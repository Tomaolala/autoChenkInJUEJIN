import axios from "axios"
import config from "../config.js"

const getCheckStatus =async ()=>{

    try {
        const getStatus= await axios.get(config.getCheckStatus)
        return getStatus.data
    }catch(err){
        console.log("Status Error",err)
    }
}
const getStones =async ()=>{
    try {
        const getStatus= await axios.get("/growth_api/v1/get_cur_point",{
            aid:2608,
            uuid:7088553991310771719,
            spider:0
        })
        return getStatus.data
    }catch(err){
        console.log("Status Error",err)
    }
}
const getCheckInDays =async ()=>{
    try {
        const getStatus= await axios.get(config.getCheckInDays,{
            aid:2608,
            uuid:7088553991310771719,
            spider:0
        })
        return getStatus.data
    }catch(err){
        console.log("Status Error",err)
    }
}

const check_in =async ()=>{
    try {
        const getStatus= await axios.post(config.checkIn,{
            aid:config.aid,
            uuid:config.uuid,
            spider:0,
            msToken:config.msToken,
            a_bogus:config.a_bogus
        })
        return getStatus.data
    }catch(err){
        console.log("Status Error")
    }
}
const sticky_luck =async ()=>{
    try {
        const getStatus= await axios.post(config.dipLucky,{
            aid:config.aid,
            uuid:config.uuid,
            spider:config.spider,
            msToken:config.msToken,
            a_bogus:config.a_bogus
        })
        return getStatus.data
    }catch(err){
        console.log("Status Error")
    }
}
const draw =async ()=>{
    try {
        const getStatus= await axios.post(config.draw,{
            aid:config.aid,
            uuid:config.uuid,
            spider:config.spider,
            msToken:config.msToken,
            a_bogus:config.a_bogus
        })
        return getStatus.data
    }catch(err){
        console.log("Status Error")
    }
}
export {
    getCheckStatus,
    getStones,
    getCheckInDays,
    check_in,
    sticky_luck,
    draw
}