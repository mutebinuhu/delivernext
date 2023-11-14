import { NextResponse } from "next/server";
import {cookies} from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
export const GET = async (request, {params}) =>{
   try {
    const id = params.id
    const supabase = createRouteHandlerClient({cookies})
    const {data, error} = await supabase.from('bookings').select("*").eq('id', id)
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
export const PATCH = async (request, {params}) =>{
    try {
     const id = params.id
     const newData = await request.json()
     const supabase = createRouteHandlerClient({cookies})
     const {data, error} = await supabase.from('bookings').update(newData).eq('id', id).select().single()
     if(error){
         throw new Error(error)
     }
     return NextResponse.json({data}, {
         status:200
     })
    } catch (error) {
     //tthrow new Error(error)
     console.log("errrrrr", error)
    }
 }