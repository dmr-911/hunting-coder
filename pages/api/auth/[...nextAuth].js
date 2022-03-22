import { TwitterAuthProvider } from "firebase/auth";
import NextAuth from "next-auth";

export default NextAuth({
    providers : [
        TwitterAuthProvider({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET
          })
    ]
})