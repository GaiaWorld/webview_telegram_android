package com.iqos.qrcodedemo.common.app;

import android.app.Activity;
import android.content.Intent;
import android.content.res.AssetFileDescriptor;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.Handler;
import android.os.Vibrator;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.WindowManager;
import android.widget.ImageView;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.Result;
import com.iqos.qrcodedemo.R;
import com.iqos.qrcodedemo.common.camera.CameraManager;
import com.iqos.qrcodedemo.common.decoding.CaptureActivityHandler;
import com.iqos.qrcodedemo.common.decoding.InactivityTimer;
import com.iqos.qrcodedemo.common.widget.ViewfinderView;

import java.io.IOException;
import java.util.Vector;


public class QRScannerActivity extends Activity implements SurfaceHolder.Callback, View.OnClickListener {
    private static final long VIBRATE_DURATION = 200L;
    private static final float BEEP_VOLUME = 0.10f;
    public static final int SCAN_RESULT_CODE = 15613;
    public static final String SCAN_RESULT = "scan_result";
    private ViewfinderView mScanView;
    private CaptureActivityHandler handler;
    private Vector<BarcodeFormat> decodeFormats;
    private String characterSet;
    private ImageView mIvBack;
    private InactivityTimer inactivityTimer;
    private MediaPlayer mediaPlayer;
    private SurfaceView mSurfaceView;
    private boolean hasSurface;
    private boolean playBeep;
    private boolean vibrate;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(getLayoutResources());
        this.findViews();
        this.init();
    }

    /**
     * 获取布局文件
     *
     * @return XML里面的布局文件
     */
    protected int getLayoutResources() {
        return R.layout.activity_qrscanner;
    }

    /**
     * 获取XML里面的控件
     */
    protected void findViews() {
        this.mScanView = findViewById(R.id.viewfinder_view);
        this.mSurfaceView = findViewById(R.id.preview_view);
        this.mIvBack = findViewById(R.id.app_scanner_qr_code_iv_back);
    }


    /**
     * 初始化
     */
    protected void init() {
        mSurfaceView.getHolder().addCallback(this);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON, WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        CameraManager.init(getApplication());
        hasSurface = false;
        inactivityTimer = new InactivityTimer(this);
        mIvBack.setOnClickListener(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        this.initQRScanner();
    }

    private void initQRScanner() {
        if (null == mSurfaceView)
            mSurfaceView = findViewById(R.id.preview_view);
        SurfaceHolder surfaceHolder = mSurfaceView.getHolder();
        if (hasSurface) {
            initCamera(surfaceHolder);
        } else {
            surfaceHolder.addCallback(this);
            //noinspection deprecation
            surfaceHolder.setType(SurfaceHolder.SURFACE_TYPE_PUSH_BUFFERS);
        }
        decodeFormats = null;
        characterSet = null;
        playBeep = true;
        AudioManager audioService = (AudioManager) getSystemService(AUDIO_SERVICE);
        if (audioService != null && audioService.getRingerMode() != AudioManager.RINGER_MODE_NORMAL) {
            playBeep = false;
        }
        initBeepSound();
        vibrate = true;
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (handler != null) {
            handler.quitSynchronously();
            handler = null;
        }
        CameraManager.get().closeDriver();
    }

    @Override
    protected void onDestroy() {
        inactivityTimer.shutdown();
        super.onDestroy();
    }

    /**
     * 处理扫描结果
     *
     * @param result 扫描的结果
     */
    public void handleDecode(Result result) {
        inactivityTimer.onActivity();
        String resultStr = result.getText();
        Intent intent = new Intent();
        intent.putExtra(SCAN_RESULT, resultStr);
        this.setResult(SCAN_RESULT_CODE, intent);
        finish();
    }

    private void initCamera(SurfaceHolder surfaceHolder) {
        try {
            CameraManager.get().openDriver(surfaceHolder);
        } catch (IOException | RuntimeException ioe) {
            ioe.printStackTrace();
        }
        if (null == handler) {
            handler = new CaptureActivityHandler(this, decodeFormats, characterSet);
        }
    }

    @Override
    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {
    }

    @Override
    public void surfaceCreated(SurfaceHolder holder) {
        if (!hasSurface) {
            hasSurface = true;
            initCamera(holder);
        }
    }

    @Override
    public void surfaceDestroyed(SurfaceHolder holder) {
        hasSurface = false;
    }

    public Handler getHandler() {
        return handler;
    }

    public void drawViewfinder() {
        mScanView.drawViewfinder();
    }

    private void initBeepSound() {
        if (playBeep && mediaPlayer == null) {
            // The volume on STREAM_SYSTEM is not adjustable, and users found it
            // too loud,
            // so we now play on the music stream.
            setVolumeControlStream(AudioManager.STREAM_MUSIC);
            mediaPlayer = new MediaPlayer();
            mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
            mediaPlayer.setOnCompletionListener(beepListener);
            AssetFileDescriptor file = getResources().openRawResourceFd(R.raw.beep);
            try {
                mediaPlayer.setDataSource(file.getFileDescriptor(), file.getStartOffset(), file.getLength());
                file.close();
                mediaPlayer.setVolume(BEEP_VOLUME, BEEP_VOLUME);
                mediaPlayer.prepare();
            } catch (IOException e) {
                mediaPlayer = null;
            }
        }
    }

    /**
     * 扫码成功后播放“滴”并且振动手机
     */
    protected final void playBeepSoundAndVibrate() {
        if (playBeep && mediaPlayer != null) {
            mediaPlayer.start();
        }
        if (vibrate) {
            Vibrator vibrator = (Vibrator) getSystemService(VIBRATOR_SERVICE);
            if (vibrator != null) {
                vibrator.vibrate(VIBRATE_DURATION);
            }
        }
    }

    /**
     * 连续扫描、调用此方法即可重新扫描
     */
    protected final void restartQRScanner() {
        if (null != handler) {
            handler.restartPreviewAndDecode();//重新启动预览和解码
        }
    }


    /**
     * When the beep has finished playing, rewind to queue up another one.
     */
    private final MediaPlayer.OnCompletionListener beepListener = new MediaPlayer.OnCompletionListener() {
        public void onCompletion(MediaPlayer mediaPlayer) {
            mediaPlayer.seekTo(0);
        }
    };

    @Override
    public void finish() {
        super.finish();
        overridePendingTransition(R.anim.app_enter_exit_stay, R.anim.app_in_up_to_down);
    }

    /**
     * Called when a view has been clicked.
     *
     * @param v The view that was clicked.
     */
    @Override
    public void onClick(View v) {
        int id = v.getId();
        if (id == R.id.app_scanner_qr_code_iv_back) {
            super.finish();
        }
    }
}
