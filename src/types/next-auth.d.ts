import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's accessToken. */
            accessToken: string
        } & DefaultSession["user"]
        supabaseAccessToken?: string
        accessTokenExpires?: number;
        refreshToken?: string;
        error?: string;
    }
}

declare module 'next-auth/jwt' {
    /** Extends the JWT interface for custom properties */
    interface JWT {
        accessToken?: string;
        accessTokenExpires?: number;
        refreshToken?: string;
        user?: {
            id?:string,
            name?: string;
            email?: string;
            image?: string;
            emailVerified?:string
            /** Include any other properties you're adding to the JWT user object */
        };
        error?: string;
    }
}
