import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    console.log("GET", request)
    const url = new URL(request.url);
    console.log("url", url);
    const code = url.searchParams.get('code');
    if (code) {
        let supabase = createRouteHandlerClient({ cookies })
        await supabase.auth.exchangeCodeForSession(code);
    }

    return NextResponse.redirect(url.origin+"/dashboard");
}