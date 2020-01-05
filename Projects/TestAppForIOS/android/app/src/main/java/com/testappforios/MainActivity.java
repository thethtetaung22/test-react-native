package com.testappforios;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    @Override
    protected void onStart() {
        super.onStart();
        Log.d("WIDGET_PROVIDER", "En onEnabled");
        Bundle bundleIntent = getIntent().getExtras();
        boolean isWidgetClick = Boolean.parseBoolean(String.valueOf(bundleIntent.getBoolean("isWidgetPress")));
        if (isWidgetClick) {
            Intent serviceIntent = new Intent(getApplicationContext(), BackgroundTask.class);
            Bundle bundle = new Bundle();
            bundle.putString("foo", "bar");
            serviceIntent.putExtras(bundle);
            getApplicationContext().startService(serviceIntent);
            HeadlessJsTaskService.acquireWakeLockNow(getApplicationContext());
        }
    }

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */


    @Override
    protected String getMainComponentName() {
        return "TestAppForIOS";
    }
}
