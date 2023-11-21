import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export const GET = async (request) => {
    try {
        
        
        const supabase = createRouteHandlerClient({cookies})
        const {data, error} = await supabase.from('profiles').select("*")
        if(error){
            throw error
        }
        return NextResponse.json({data}, {
            status:200
        })
       } catch (error) {
        return NextResponse.json({error})
       }
    
}
export const POST = async (request) => {

    const userProfile = await request.json();

    try {
        
        const supabase =  createRouteHandlerClient({cookies})
        const { data: { session } } = await supabase.auth.getSession();
        const {data, error} =await  supabase.from('profiles').insert({...userProfile}).select("username,phone", "uganda").single();
        return NextResponse.json({data, error});
    } catch (error) {
        console.log("errr--------------", error.message);
    }
}