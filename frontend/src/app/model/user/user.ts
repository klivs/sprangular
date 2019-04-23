export class User {
  uuid: string;
  username: string;
  firstName: string;
  lastName: string;

  constructor(uuid: string, username: string, firstName: string, lastName: string) {
    this.uuid = uuid;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
