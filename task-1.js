class Client {
    constructor(firstName, lastName, balance) {
      this.firstName = firstName;
      this.lastName = lastName;
      this._balance = balance;
    }
  
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    get balance() {
      return this._balance;
    }
  
    set balance(newBalance) {
      this._balance = newBalance;
    }
  }
  
  const client1 = new Client('John', 'Doe', 1000);
  
  console.log(client1.fullName()); 
  console.log(client1.balance); 
  
  client1.balance = 500;
  
  console.log(client1.balance); 
  