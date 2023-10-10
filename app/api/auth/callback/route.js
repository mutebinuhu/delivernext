import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const url = new URL(request.url);
    console.log("url", url);
    const code = url.searchParams.get('code');
    if (code) {
        let supabase = createRouteHandlerClient({ cookies })
        await supabase.auth.exchangeCodeForSession(code);
    }
    //redirect Link
    return NextResponse.redirect(process.env.NEXT_PUBLIC_PRODUCTION_URL+"/dashboard");
}