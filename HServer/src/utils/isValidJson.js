 const isValidJSON = (str) => {
    try {
        return JSON.parse(str);
        return true;
    }catch(e) {
        return false;
    }
 }

 export default isValidJSON;