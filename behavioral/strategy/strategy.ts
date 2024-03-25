// Define a strategy interface
interface Strategy {
    execute(a: number, b: number): number;
}

// Concrete strategy 1: addition
class ConcreteStrategyAddition implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

// Concrete strategy 2: subtraction
class ConcreteStrategySubtraction implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}

// Context class that uses the strategy
class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    // Set strategy dynamically
    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    // Execute strategy
    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

// Client code
const context = new Context(new ConcreteStrategyAddition());

console.log("Addition strategy: " + context.executeStrategy(5, 3));

context.setStrategy(new ConcreteStrategySubtraction());
console.log("Subtraction strategy: " + context.executeStrategy(5, 3));
