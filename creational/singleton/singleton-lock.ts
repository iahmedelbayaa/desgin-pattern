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



// step 1 : make the constructor private
// step 2 : create a static method to get the instance
// step 3 : create a static variable to store the instance
// step 4 : create a static variable to lock the creation of the instance
// step 5 : use the lock to prevent other threads from entering
// step 6 : release the lock after the instance is created
// step 7 : return the instance
// step 8 : example usage
