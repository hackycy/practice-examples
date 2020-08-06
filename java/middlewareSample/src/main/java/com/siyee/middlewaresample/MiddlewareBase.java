package com.siyee.middlewaresample;

public class MiddlewareBase extends Delegate {

    private MiddlewareBase mMiddlewareBase;

    public MiddlewareBase(Delegate delegate) {
        super(delegate);
    }

    public MiddlewareBase(MiddlewareBase base) {
        super(base);
        this.mMiddlewareBase = base;
    }

    public MiddlewareBase() {
        super(null);
    }

    public MiddlewareBase next() {
        return this.mMiddlewareBase;
    }

    public MiddlewareBase enq(MiddlewareBase base) {
        setDelegate(base);
        this.mMiddlewareBase = base;
        return base;
    }

}
