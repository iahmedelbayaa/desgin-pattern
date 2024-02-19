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

// step 1 : create a class with a private static instance property
// step 2 : create a private constructor to prevent instantiation
// step 3 : create a static method to get the instance
// step 4 : in the static method, check if the instance is null, if so, create a new instance
// step 5 : return the instance
// step 6 : create two instances and check if they are the same