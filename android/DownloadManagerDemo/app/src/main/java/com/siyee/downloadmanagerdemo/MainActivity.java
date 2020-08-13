package com.siyee.downloadmanagerdemo;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DownloadManager;
import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.blankj.utilcode.constant.PermissionConstants;
import com.blankj.utilcode.util.PermissionUtils;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    Button btnStart;

    private static String downloadUrl = "https://github.com/PicGo/flutter-picgo/releases/download/v1.9.0%2B19-beta.2/app-release.apk";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // init
        btnStart = findViewById(R.id.btn_start);
        btnStart.setOnClickListener(this);
        if (!PermissionUtils.isGranted(PermissionConstants.STORAGE)) {
            PermissionUtils.permission(PermissionConstants.STORAGE)
                    .request();
        }
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.btn_start) {
            DownloadManager.Request request;

            try{
                request = new DownloadManager.Request(Uri.parse(downloadUrl));
                request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE);
                request.setTitle("下载");
                request.setDescription("应用正在下载");
                request.setAllowedOverRoaming(false);
                // 放入下载队列
                Context appContext = getApplicationContext();
                DownloadManager manager = (DownloadManager)appContext.getSystemService(Context.DOWNLOAD_SERVICE);
                manager.enqueue(request);
            }catch (Exception e){
                e.printStackTrace();
                return;
            }
        }
    }
}