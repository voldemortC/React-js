import {useEffect} from 'react';

import axios from 'axios';
let REQUESTS = {};

REQUESTS.POST = async (url) => {
    return new Promise(async(resolve, reject)=>{
        let getData = await axios.get(url);
        resolve(getData)
    })
}

export default REQUESTS;
