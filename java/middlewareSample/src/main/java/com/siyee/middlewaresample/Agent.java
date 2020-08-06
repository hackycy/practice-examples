package com.siyee.middlewaresample;

public class Agent {

    private Agent agent;
    private Object object;
    private MiddlewareBase header;
    private MiddlewareBase tail;

    private Agent(AgentBuilder builder) {
        this.object = builder.ob;
        this.tail = builder.tail;
        this.header = builder.header;
    }

    public static class AgentBuilder {

        private MiddlewareBase header;
        private Object ob;
        private MiddlewareBase tail;

        public AgentBuilder useMiddleware(MiddlewareBase middleware) {
            if (middleware == null) {
                return this;
            }
            if (header == null) {
                header = tail = middleware;
            } else {
                tail.enq(middleware);
                tail = middleware;
            }
            return this;
        }

        public AgentBuilder setObject(Object ob) {
            this.ob = ob;
            return this;
        }

        public Agent build() {
            return new Agent(this);
        }

    }

    public String printString() {
        return getObject().toString();
    }

    private Object getObject() {
        return header;
    }

}
