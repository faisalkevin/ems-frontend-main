import { MouseEventHandler } from "react";

interface events {
    id: string
    createdAt: string
    updatedAt: string
    title: string
    type: string
    description: string
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    maxParticipants: number
    ticketPrice: number
    status: string
    organizerID: string
    banner_url: string
    organization_name: string
}

interface validEventResponse {
    isSuccess: Boolean
    code: number
    data: [events]
    msg: string
}

interface validAuthResponse {
    isSuccess: Boolean
    code: number
    data: any[] | null
    msg: string
} 

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchKotaProps {
    kota: string;
    setKota: (kota: string) => void;
}

export interface EventProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year: number;
}

export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

export interface CustomButtonProps {
    title: string;
    href?: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}

export interface OptionProps {
    title: string;
    value: string;
}