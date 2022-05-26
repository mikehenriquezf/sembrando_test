import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";
import { redirect } from "next/dist/server/api-utils";

export default NextAuth({
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "johndoe@contratosenley.org" },
                password: { label: "Password", type: "password" },
            },
            authorize: (credentials) => {
                // DB Loockup Mock
                if (credentials?.username === "admin" && credentials.password === "test") {
                    return {
                        id: 1,
                        name: "Admin",
                        email: "admin@contratosenley.org",
                    };
                }
                // login fail
                return null;
            },
        }),
    ],
    callbacks: {
        async redirect(url, baseUrl) {
            return "http://localhost:3000/additem/";
        },

        // JSON Web Token
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        // Session
        session: async ({ session, token }) => {
            if (token) {
                session.id = token.id;
            }
            return session;
        },
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true,
    },
});
