
export class CurrentUser {
  static username;
  static setCurrentUser(username) {
    return this.username = username;
  }
  static getCurrentUser() {
    return this.username;
  }
  static logout(){
    this.username = undefined;
  } 
}