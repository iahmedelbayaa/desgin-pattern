// Target interface that the client expects
interface Target {
    request(): void;
}

// Adaptee: the class that needs to be adapted
class Adaptee {
    specificRequest(): void {
        console.log("Adaptee's specific request.");
    }
}

// Adapter class that adapts the Adaptee to the Target interface
class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    // Implementing the Target interface by delegating calls to Adaptee
    request(): void {
        console.log("Adapter's request method.");
        this.adaptee.specificRequest();
    }
}

// Client code
function clientCode(target: Target) {
    target.request();
}

// Using the Adapter pattern
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

console.log("Client: I can work with the Target interface:");
clientCode(adapter);
