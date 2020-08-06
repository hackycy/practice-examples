package com.siyee.middlewaresample;

public class Delegate {

    private Delegate mDelegate;

    Delegate(Delegate delegate) {
        this.mDelegate = delegate;
    }

    public Delegate getDelegate() {
        return mDelegate;
    }

    public void setDelegate(Delegate delegate) {
        this.mDelegate = delegate;
    }

    @Override
    public String toString() {
        if (mDelegate != null) {
            return mDelegate.toString();
        }
        return super.toString();
    }
}
