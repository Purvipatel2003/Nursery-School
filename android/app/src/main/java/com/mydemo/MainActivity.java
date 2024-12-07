package com.mydemo;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.os.PersistableBundle;
import androidx.annotation.Nullable;



public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  @Override
  protected String getMainComponentName() {
    return "myDemo";
  }

@Override
  public void onCreate(@Nullable Bundle savedInstanceState) {
            SplashScreen.show(this);  // here

    super.onCreate(savedInstanceState);
  }

}
