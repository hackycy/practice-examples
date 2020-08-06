package com.siyee.middlewaresample;

import com.siyee.middlewaresample.impl.Middle1;
import com.siyee.middlewaresample.impl.Middle2;

public class Application {

    public static void main(String[] args) {
        Person p = new Person("hackycy", 22);
        Agent agent = new Agent.AgentBuilder().setObject(p)
                .useMiddleware(new Middle1())
                .useMiddleware(new Middle2()).build();
        System.out.println(agent.printString());
    }

}
