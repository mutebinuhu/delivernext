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

    const {shipper_name, units, shipper_id, pickup_location,drop_off, shipment_date, weight, information, customer_phone} =await  request.json();

    const supabase =  createRouteHandlerClient({cookies})

    try {
        const {data, error} = await supabase.from('bookings').insert({shipper_name, shipper_id, pickup_location,drop_off, shipment_date, weight, information, units, customer_phone}).single().select()
        if(error){
        //api error response
            return NextResponse.json({error})    
        }
    
        //api success response
        return NextResponse.json({booking:data})

    } catch (error) {
        console.log("err--------------", error.message)
    }
   
}