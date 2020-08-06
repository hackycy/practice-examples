package com.siyee.middlewaresample.impl;

import com.siyee.middlewaresample.MiddlewareBase;

public class Middle2 extends MiddlewareBase {

    public static final String TAG = Middle2.class.getSimpleName();

    public Middle2() {

    }

    @Override
    public String toString() {
        System.out.println(TAG);
        return super.toString();
    }
}
