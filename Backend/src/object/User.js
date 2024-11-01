class User {
    constructor(accountname, password, username, role) {
      this._accountname = accountname;
      this._password = password;
      this._username = username;
      this._role = role;
    }
  
    // Getter and Setter for accountname
    get accountname() {
      return this._accountname;
    }
  
    set accountname(value) {
      this._accountname = value;
    }
  
    // Getter and Setter for password
    get password() {
      return this._password;
    }
  
    set password(value) {
      this._password = value;
    }
  
    // Getter and Setter for username
    get username() {
      return this._username;
    }
  
    set username(value) {
      this._username = value;
    }
  
    // Getter and Setter for role
    get role() {
      return this._role;
    }
  
    set role(value) {
      this._role = value;
    }
  }
  

  module.exports={
    User
  }