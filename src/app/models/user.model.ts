export interface IUser {
 name: string;
  email: string;
  conectado: boolean;
  // age: number;
}

export class User implements IUser {
  constructor(
    public name: string,
    public email: string,
    public conectado: boolean,
    private pass: string
  ) {}
  changeName(newPass : string): void {
     this.pass = newPass;
  }
}
