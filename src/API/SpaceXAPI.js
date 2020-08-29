import axios from 'axios';
//base URL
const url = 'https://api.spacexdata.com/v3';

//lauch
const urlLaunch = url.concat('/launches');
const urlLaunchPast = urlLaunch.concat('/past');
const urlLaunchUpcoming = urlLaunch.concat('/upcoming');
const urlLaunchLatest = urlLaunch.concat('/latest');
const urlLaunchNext = urlLaunch.concat('/next');

//launchpad
const urlLaunchPads = url.concat('/launchpads');

//payload
const urlPayloads = url.concat('/payloads');

//rocket
const urlRockets = url.concat('/rockets');

//ship
const urlShips = url.concat('/ships');

//capsules
const urlCapsules = url.concat('/capsules');


export const fetchSpaceXLaunch = async (timeline) => {
    let newLaunchURL = urlLaunch;
    if (timeline === "past") newLaunchURL = urlLaunchPast;
    else if (timeline === "upcoming") newLaunchURL = urlLaunchUpcoming;
    else if (timeline === "latest") newLaunchURL = urlLaunchLatest;
    else if (timeline === "next") newLaunchURL = urlLaunchNext;
    else if (timeline) newLaunchURL = newLaunchURL.concat('/' + timeline);
    try {
        //props must name data to work(even props doesnt work). possibly a await or get() thing
        const { data } = await axios.get(newLaunchURL);
        const launchData = data;
        return launchData;
    } catch (e) {
        console.log(e);
    }
}
export const searchSpaceXLaunch = async (searchKeywords) => {
    let newLaunchURL = urlLaunch;
    const searchItem = searchKeywords.keyword;
    newLaunchURL = newLaunchURL.concat(`?filter=${searchKeywords.data_type},flight_number`);
    try {
        //props must name data to work(even props doesnt work). possibly a await or get() thing
        const { data } = await axios.get(newLaunchURL);
        let launchData = data;
        const searchlaunchData = launchData.filter(launchDatum => Object.values(launchDatum)[0] === searchItem);
        //if(launchData.filter(launchDatum=>Object.value(launchDatum)[0])===keyword)
        if (searchlaunchData.length === 1) {
            try {
                const brandnewURL = urlLaunch.concat(`/${Object.values(searchlaunchData[0])[1]}`);
                const { data }   = await axios.get(brandnewURL);
                const brandNewLaunchData = data;
                return brandNewLaunchData;
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            return "no matching value";
        }
    } catch (e) {
        console.log(e);
    }
}

export const fetchSpaceXLaunchPad = async (launchpad) => {
    let newLaunchpadURL = urlLaunchPads;
    if (launchpad) newLaunchpadURL.concat('/' + urlLaunchPads);
    try {
        //const{data}=await axios.get(newLaunchpadURL);
        const launchpadData = {
            //fill info here
        };
        return launchpadData;
    } catch (e) {
        console.log(e);
    }
}

export const fetchSpaceXPayload = async (payload) => {
    let newPayloadURL = urlPayloads;
    if (payload) newPayloadURL.concat('/' + payload);
    try {
        //const{data}=await axios.get(newPayloadURL);
        const payloadData = {
            //fill info here
        };
        return payloadData;
    } catch (e) {
        console.log(e);
    }
}

export const fetchSpaceXRocket = async (rocket) => {
    let newRocketURL = urlRockets;
    if (rocket) newRocketURL.concat('/' + rocket);
    try {
        const{data}=await axios.get(newRocketURL);
        const rocketData = data;
        return rocketData;
        }catch (e) {
        console.log(e);
    }
}

export const searchSpaceXRocket = async (searchKeywords) => {
    let newLaunchURL = urlRockets;
    const searchItem = searchKeywords.keyword;
    newLaunchURL = newLaunchURL.concat(`?filter=${searchKeywords.data_type},rocket_id`);
    try {
        //props must name data to work(even props doesnt work). possibly a await or get() thing
        const { data } = await axios.get(newLaunchURL);
        let launchData = data;
        const searchlaunchData = launchData.filter(launchDatum => Object.values(launchDatum)[0] === searchItem);
        if (searchlaunchData.length === 1) {
            try {
                const brandnewURL = urlRockets.concat(`/${Object.values(searchlaunchData[0])[1]}`);
                const { data }   = await axios.get(brandnewURL);
                const brandNewLaunchData = data;
                return brandNewLaunchData;
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            return "no matching value";
        }
    } catch (e) {
        console.log(e);
    }
}

export const fetchSpaceXShip = async (ship) => {
    let newShipURL = urlShips;
    if (ship) newShipURL.concat('/' + urlShips);
    try {
        //const{data}=await axios.get(newShipURL);
        const shipData = {
            //fill info here
        };
        return shipData;
    } catch (e) {
        console.log(e);
    }
}

export const fetchSpaceXCapsules = async (capsule) => {
    let newCapsulesURL = urlCapsules;
    if (capsule) newCapsulesURL.concat('/' + urlCapsules);
    try {
        // const{data}=await axios.get(newCapsulesURL);
        const capsuleData = {
            //fill info here
        };
        return capsuleData;
    } catch (e) {
        console.log(e);
    }
}

