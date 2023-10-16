import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async (request) => {

    const shipper = request.json();
    try {
        //returns all shippers
        return NextResponse.json({data:""})
    } catch (error) {
        console.log("errr--------------",error.message);
    }
}

export const POST = async (request) => {

    const shipper = await request.json();

    try {
        
        const supabase =  createRouteHandlerClient({cookies})
        const { data: { session } } = await supabase.auth.getSession();
        const {data, error} =await  supabase.from('shippers').insert({...shipper}).select().single();
        return NextResponse.json({data, error});
    } catch (error) {
        console.log("errr--------------", error.message);
    }
}