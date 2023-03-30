// nextauth.d.ts
import { DefaultSession, DefaultUser, NextAuth } from "next-auth";
// Define a role enum
export enum SubType {
  standard = "Standard",
  premium = "Premium",
  admin = "Admin",
}
// common interface for JWT and Session
interface IUser extends DefaultUser {
  subType?: SubType;
}
declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}




// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       fname: string,
//       lname: string,
//       subType: string,
//       email: string
//     }
//   }
// }