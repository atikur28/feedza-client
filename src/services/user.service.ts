import { cookies } from "next/headers";

const AUTH_API = process.env.NEXT_PUBLIC_AUTH_URL;

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = cookies();
      const res = await fetch(`${AUTH_API}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      if (!res.ok) {
        const errorData = await res.json();
        return { data: null, error: errorData?.message || "Session missing!" };
      }

      const session = await res.json();
      return { data: session, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error };
    }
  },

  signOut: async function () {
    try {
      const cookieStore = cookies();
      const res = await fetch(`${AUTH_API}/sign-out`, {
        method: "POST",
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      if (!res.ok) {
        const errorData = await res.json();
        return {
          data: null,
          error: errorData?.message || "Failed to sign out!",
        };
      }

      return { message: "Signed out successfully!", error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error };
    }
  },
};
