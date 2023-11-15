import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";



export const GET = async (request) => {

    try {
        //returns all shippers
        const supabase =  createRouteHandlerClient({cookies})
        const { data, error } = await supabase.from('bookings').select('*');
        if (error) {
            throw error;
          }
          return NextResponse.json({ data });
    } catch (error) {
        console.error('Error fetching data from Supabase:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
   
}

export const POST = async (request) => {


    try {
        
    const bookingInfo = await request.json();
    
    const supabase =  createRouteHandlerClient({cookies})

    const {data, error} = await supabase.from('bookings').insert({...bookingInfo}).single().select()
        if(error){
        //api error response
            return NextResponse.json({error})    
        }
    
        //api success response
        return NextResponse.json({data})

    } catch (error) {
        console.log("err--------------", error.message)
    }
   
}

export const PATCH =  async (request) =>{
return NextResponse({method:"PATCH"})
}

