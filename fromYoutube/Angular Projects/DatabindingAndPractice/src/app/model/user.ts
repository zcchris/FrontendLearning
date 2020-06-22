export class User {
  public userId: number;
  public id: number;
  public title: string;
  public body: string;

  constructor(userId: number, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

export class UsersPayload {
  data: User[];
}

export class Comment {
  public email: string;
  public name: string;
  public body: string;

  constructor(name: string, email: string, body: string) {
    this.email = email;
    this.name = name;
    this.body = body;
  }
}
