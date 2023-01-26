export const fieldValuesMap:any={
    company:[
        {
            text:"Maruti Suzuki",
            value:"maruti Suzuki"
        },
        {
            text:"Toyota",
            value:"toyota"
        },
        {
            text:"Kia",
            value:"kia"
        },
        {
            text:"Hyundai",
            value:"hyundai"
        },
        {
            text:"Honda",
            value:"honda"
        },

    ],
    colour:[
        {
            text:"Red",
            value:"red"
        },
        {
            text:"White",
            value:"white"
        },
        {
            text:"Silver",
            value:"silver"
        },
        {
            text:"Black",
            value:"black"
        },
        {
            text:"Blue",
            value:"blue"
        },

    ],
    price:[
        {
            text:"0 - 100000",
            value:"0-100000"
        },
        {
            text:"100000 - 300000",
            value:"100000-300000"
        },
        {
            text:"300000 - 800000",
            value:"300000-800000"
        }

    ],
}


export const setFilter=(key:any,value:any)=>{
    if(key==="price")
    {
        const arrayOfPrices=value.split("-");
        const fromPrice=arrayOfPrices[0];
        const toPrice=arrayOfPrices[1];
        return `fromPrice=${fromPrice}&toPrice=${toPrice}`
    }
    return `&${key}=${value}`
}