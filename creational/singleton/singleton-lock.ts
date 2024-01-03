class Singleton {
  private static instance: Singleton | null = null;
  private static lock: boolean = false;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  static getInstance(): Singleton {
    // Use a lock to ensure only one instance is created
    if (!Singleton.instance) {
      if (!Singleton.lock) {
        // Set the lock to prevent other threads from entering
        Singleton.lock = true;

        // Create the instance
        Singleton.instance = new Singleton();

        // Release the lock
        Singleton.lock = false;
      }
    }

    return Singleton.instance as Singleton;
  }
}

// Example usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true - both instances refer to the same object
