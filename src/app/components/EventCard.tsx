"use client"

import { useState } from "react"
import Image from "next/image"
import CustomButton from "./CustomButton"
import { EventProps } from "../../../types/custom-types"
import { generateCarImageUrl } from "../../../constants"
import EventDetails from "./EventDetails"
import Link from "next/link"


interface EventCardProps {
    event: EventProps;
}

const EventCard = ({ event }: EventCardProps) => {
    const { city_mpg, year, make, model, transmission, drive} = event;

    const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>

        <div className="relative w-full h-40 my-03 object-contain">
            <Image src={generateCarImageUrl(event)} alt="car model" fill priority className="object-contain" />
        </div>
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="" width={20} height={20} alt="Event price"/>
                    <p className="text-[14px]">
                        {transmission === 'a' ? 'IDR xxx' : 'Free'}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="" width={20} height={20} alt="Event date"/>
                    <p className="text-[14px]">
                        Event Date
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="" width={20} height={20} alt=""/>
                    <p className="text-[14px]">
                        {}
                    </p>
                </div>
            </div>
            <div className="car-card__btn-container">
                <CustomButton
                title="Event Details"
                containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                textStyles="text-white text-[14px] leading=[17px] font-bold"
                rightIcon="/right-arrow.svg"
                handleClick={() => setIsOpen(true)}
                />
        </div>

        <EventDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} event={event} />

        </div>

        

    </div>
  )
}

export default EventCard