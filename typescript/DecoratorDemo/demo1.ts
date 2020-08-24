function sealed(constructor: Function) {
    // do something with "target" ...
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(constructor);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}