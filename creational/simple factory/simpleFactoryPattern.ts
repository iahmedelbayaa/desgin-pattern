// Product interface
interface Product {
    operation(): string;
}

// Concrete Product A
class ConcreteProductA implements Product {
    operation(): string {
        return 'ConcreteProductA operation';
    }
}

// Concrete Product B
class ConcreteProductB implements Product {
    operation(): string {
        return 'ConcreteProductB operation';
    }
}

// Simple Factory
class SimpleFactory {
    // Factory method for creating products
    createProduct(type: string): Product {
        switch (type) {
            case 'A':
                return new ConcreteProductA();
            case 'B':
                return new ConcreteProductB();
            default:
                throw new Error('Invalid product type');
        }
    }
}

// Client code
class Client {
    private factory: SimpleFactory;

    constructor(factory: SimpleFactory) {
        this.factory = factory;
    }

    // Client code can request products from the factory
    requestProduct(type: string): void {
        const product = this.factory.createProduct(type);
        console.log(product.operation());
    }
}

// Usage
const factory = new SimpleFactory();
const client = new Client(factory);

client.requestProduct('A'); // Output: ConcreteProductA operation
client.requestProduct('B'); // Output: ConcreteProductB operation
