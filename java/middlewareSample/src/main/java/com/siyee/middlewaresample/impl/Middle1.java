package com.siyee.middlewaresample.impl;

import com.siyee.middlewaresample.MiddlewareBase;

public class Middle1 extends MiddlewareBase {

    public static final String TAG = Middle1.class.getSimpleName();

    public Middle1() {

    }

    @Override
    public String toString() {
        System.out.println(TAG);
        return super.toString();
    }
}
