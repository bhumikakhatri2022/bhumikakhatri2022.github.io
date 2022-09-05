export class User{
  userId:string;
  userName:string;
  userEmail:string;
  userPassword:string;
  userDOB: Date;


  constructor(){
      this.userId = "";
      this.userName = "";
      this.userEmail = "";
      this.userPassword = "";
      this.userDOB = new Date;

  }

}
