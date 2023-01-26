
export const debounce=(cb:any,delay:number=500)=>{
    let timer:any;
    return (...args:any)=>
    {
        clearTimeout(timer);
        timer=setTimeout(()=>{
            cb(...args);
        },delay)
    }
}

