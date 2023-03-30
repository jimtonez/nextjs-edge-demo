import { getSubscription } from "@/hooks/getSubscription";
import axios from "axios";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
      signIn: "/auth/signin"
  },
  // callbacks: {
  //    async session({ session, user }) {
  //     if (!session) return;
  //     const getUser = await fetch(`/api/users`, {
  //       method: 'GET'
  //     })
  //     // const getUser = await axios.get(`http://localhost:8080/customer?email=${encodeURIComponent(session.user.email)}`)
  //     console.log(getUser)
  //     return session // The return type will match the one returned in `useSession()`
  //   },
  // },
}

export default NextAuth(authOptions)

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     // ...add more providers here
//   ],
//   secret: process.env.NEXTAUTH_SECRET!,
//   pages: {
//       signIn: "/auth/signin",
//   },
//   callbacks: {
//       async session({ session, token, user }) {
//           session.user.username = session.user.name.split(' ').join("").toLocaleLowerCase();
//           session.user.uid = token.sub;
//           return session;
//       }
//   }
// })