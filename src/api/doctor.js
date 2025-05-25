import axios from "axios";
import { API_PATH, BASE_URL } from "./constant"
import { doctorsData } from "../data/appConstant";

export const fetchDoctors = async ()=>{
    const url= BASE_URL+API_PATH.DOCTORS;

    //const {data} =await axios.get(url);
   // return data;
   return doctorsData;
}

export const fetchDoctorById = async (id)=>{
    const url= BASE_URL+API_PATH.DOCTORS;

    //const {data} =await axios.get(url);
   // return data;
   return doctorsData?.find((item) => item.id === id);
}