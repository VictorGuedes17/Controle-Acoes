import ls from 'local-storage';

function getData(key:any) {
    //@ts-ignore
   const response = JSON.parse(localStorage.getItem(key));
   return response;
}

function setData(key:string,value:any) {
    localStorage.setItem(key,JSON.stringify(value));
}

function excludeData(key:string) {
    localStorage.removeItem(key);
}

export { getData, setData, excludeData };