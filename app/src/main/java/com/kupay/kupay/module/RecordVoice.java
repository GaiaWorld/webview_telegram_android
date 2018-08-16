package com.kupay.kupay.module;

import android.media.MediaRecorder;
import android.text.TextUtils;

import com.kupay.kupay.base.BaseJSModule;
import com.kupay.kupay.common.js.JSCallback;
import com.kupay.kupay.util.FileUtil;
import com.kupay.kupay.util.Logger;

import java.io.File;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/4.
 * RecordVoice is used to record the user's voice.
 */
public class RecordVoice extends BaseJSModule {
    private static final String TAG = "RecordVoice";
    private MediaRecorder mediaRecorder = new MediaRecorder();
    private File audioFile;
    private boolean recording;//the status of voice recording
    private Thread mThreadRecord = new Thread(new Runnable() {
        @Override
        public void run() {

        }
    });

    /**
     * Start record user's voice.
     */
    public void startRecord(int callbackId) {
        if (isRecording()) return;
        setRecording(true);
        try {
            mediaRecorder.setAudioSource(MediaRecorder.AudioSource.MIC);// 第1步：设置音频来源（MIC表示麦克风）
            mediaRecorder.setOutputFormat(MediaRecorder.OutputFormat.DEFAULT);//第2步：设置音频输出格式（默认的输出格式）
            mediaRecorder.setAudioEncoder(MediaRecorder.AudioEncoder.DEFAULT);//第3步：设置音频编码方式（默认的编码方式）
            audioFile = File.createTempFile(String.format("record_%s", callbackId), ".amr");//创建一个临时的音频输出文件
            mediaRecorder.setOutputFile(audioFile.getAbsolutePath());//第4步：指定音频输出文件
            mediaRecorder.prepare();//第5步：调用prepare方法
            mediaRecorder.start();//第6步：调用start方法开始录音
            JSCallback.callJS(callbackId, JSCallback.SUCCESS, "");
        } catch (Exception e) {
            Logger.error(TAG, e.getMessage());
            JSCallback.callJS(callbackId, JSCallback.FAIL, e.getMessage());
        }

    }

    /**
     * Stop record user's voice.
     */
    public void stopRecord(int callbackId) {
        if (!recording) return;
        setRecording(false);
        if (null == audioFile) {
            JSCallback.callJS(callbackId, JSCallback.FAIL, "呵呵，录制音频失败了！");
        } else {
            mediaRecorder.stop();
            mediaRecorder.release();
            Logger.debug(TAG, audioFile.getAbsolutePath());
            String str = FileUtil.fileToBase64(audioFile);
            if (TextUtils.isEmpty(str)) {
                JSCallback.callJS(callbackId, JSCallback.FAIL, "呵呵，录制音频失败了！");
            } else {
                JSCallback.callJS(callbackId, JSCallback.SUCCESS, str);
            }
        }
    }

    /**
     * setter
     *
     * @param recording true if and only if the audio is recording.
     */
    private void setRecording(boolean recording) {
        this.recording = recording;
    }

    /**
     * getter
     *
     * @return true if the record is running.
     */
    private boolean isRecording() {
        return recording;
    }
}
