
import PlatFormListCard from '@/components/PlatFormListCard';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import React from 'react';

const getPlatforms = async () =>{
    const supabase = createServerComponentClient({cookies})
    
    try {
        const {data, error} = await supabase.from('shippers').select();

        if (error){
            throw error.message;
        }
        return data; 
        
    } catch (error) {
        console.log("errs", error);
    }
}
const PlatformsList = async () => {
    const data = await getPlatforms();
    console.log("shipperrr", data);
    const handleClick = () =>{
        alert("hello")
    }
    return (
        <>
        {data && data.map((platform)=>{
            return (
                <div>
                <PlatFormListCard
                    imageSrc={platform.image}
                    title={platform.name}
                    description={platform.description}
                    ctaText="Learn More"
                    price={platform.start_price}
                    currencey="AED"
                    deliveriesCount={1000}
                    ctaText2="Book Now" 
                    showBookingForm={true}
                /> 
                </div>
            )
        })}

            
        </>
    );
}

export default PlatformsList;
