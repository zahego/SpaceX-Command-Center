import axios from 'axios';
//base URL
const url = 'https://api.spacexdata.com/v4';

//lauch
const urlLaunch=url.concat('/launches');
const urlLaunchPast=urlLaunch.concat('/past');
const urlLaunchUpcoming=urlLaunch.concat('/upcoming');
const urlLaunchLatest=urlLaunch.concat('/latest');
const urlLaunchNext=urlLaunch.concat('/next');

//launchpad
const urlLaunchPads=url.concat('/launchpads');

//payload
const urlPayloads=url.concat('/payloads');

//rocket
const urlRockets=url.concat('./rockets');

//ship
const urlShips=url.concat('/ships');

//capsules
const urlCapsules=url.concat('/capsules');


export const fetchSpaceXLaunch=async(timeline)=>{
    let newLaunchURL=urlLaunch;
    if(timeline=="past") newLaunchURL=urlLaunchPast;
    else if(timeline=="upcoming") newLaunchURL=urlLaunchUpcoming;
    else if(timeline=="latest") newLaunchURL=urlLaunchLatest;
    else if(timeline=="next") newLaunchURL=urlLaunchNext;
    else(timeline) newLaunchURL.concat('/'+timeline);
    try{
        //props must name data to work(even props doesnt work). possibly a await or get() thing
        const{data}=await axios.get(newLaunchURL);
        const launchData={
            id:data.id;
            links:data.links,
            static_fire_date_utc:data.static_fire_date_utc;
            rocket:data.rocket,
            success:data.success;
            failures:data.failures;
            crew:data.crew;
            ships:data.ships;
            capsules:data.capsules;
            payloads:data.payloads;
            launchpad:data.launchpad;
            flight_number:data.flight_number;
            name:data.name;
            date_utc:data.date_utc;
            details:data.details,
            capsules:data.capsules,
            cores:data:cores;
        };
        return launchData;
    }catch(e){
        console.log(e);
    }
}

export const fetchSpaceXLaunchPad=async(launchpad)=>{
    let newLaunchpadURL=urlLaunchPads;
    if(launchpad) newLaunchURL.concat('/'+urlLaunchPads);
    try{
        const{data}=await axios.get(newLaunchURL);
        const launchpadData={
            //fill info here
        };
        return launchpadData;
    }catch(e){
        console.log(e);
    }
}

export const fetchSpaceXPayload=async(payload)=>{
    let newPayloadURL=urlPayloads;
    if(payload) newPayloadURL.concat('/'+urlPayloads);
    try{
        const{data}=await axios.get(newPayloadURL);
        const payloadData={
            //fill info here
        };
        return payloadData;
    }catch(e){
        console.log(e);
    }
}

export const fetchSpaceXRocket=async(rocket)=>{
    let newRocketURL=urlRockets;
    if(rocket) newRocketURL.concat('/'+urlRockets);
    try{
        const{data}=await axios.get(newRocketURL);
        const rocketData={
            //fill info here
        };
        return rocketData;
    }catch(e){
        console.log(e);
    }
}

export const fetchSpaceXShip=async(ship)=>{
    let newShipURL=urlShips;
    if(ship) newShipURL.concat('/'+urlShips);
    try{
        const{data}=await axios.get(newShipURL);
        const shipData={
            //fill info here
        };
        return shipData;
    }catch(e){
        console.log(e);
    }
}

export const fetchSpaceXCapsules=async(capsule)=>{
    let newCapsulesURL=urlCapsules;
    if(capsule) newCapsulesURL.concat('/'+urlCapsules);
    try{
        const{data}=await axios.get(newCapsulesURL);
        const capsuleData={
            //fill info here
        };
        return capsuleData;
    }catch(e){
        console.log(e);
    }
}

