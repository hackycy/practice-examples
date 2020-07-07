package cn.siyee.flutterhybridandroid;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;

import android.os.Bundle;
import android.view.View;
import android.widget.FrameLayout;

import io.flutter.embedding.android.FlutterFragment;
import io.flutter.embedding.android.FlutterView;

public class MainActivity extends AppCompatActivity {

    // Declare a local variable to reference the FlutterFragment so that you
    // can forward calls to it later.
    private FlutterFragment flutterFragment;

    private static final String TAG_FLUTTER_FRAGMENT = "flutter_fragment";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Get a reference to the Activity's FragmentManager to add a new
        // FlutterFragment, or find an existing one.
        FragmentManager fragmentManager = getSupportFragmentManager();

        // Attempt to find an existing FlutterFragment,
        // in case this is not the first time that onCreate() was run.

        // Create and attach a FlutterFragment if one does not exist.
        if (flutterFragment == null) {

            flutterFragment = FlutterFragment.withNewEngine()
                    .initialRoute("/")
                    .build();

            fragmentManager
                    .beginTransaction()
                    .add(
                            R.id.fl_content,
                            flutterFragment,
                            TAG_FLUTTER_FRAGMENT
                    )
                    .commit();
        }
    }

}