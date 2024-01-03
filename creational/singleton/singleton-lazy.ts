class Singleton {
  private static instance: Singleton | null = null;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  static getInstance(): Singleton {
    // Lazy instantiation
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

// Example usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true - both instances refer to the same object
