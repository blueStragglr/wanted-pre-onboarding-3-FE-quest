import qs from 'qs';

const utils ={
    checkAuth: (search) => {
        // console.log(search);
        let needPermit = false;
        needPermit = JSON.parse(qs.parse(search,{ignoreQueryPrefix:true}).permission);
        // console.log('needPermit',needPermit);
    
        return needPermit;
    }
};


export default utils;

