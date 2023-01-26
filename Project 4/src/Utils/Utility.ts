
export const ROLE_PAGE_MAP:any = {
    "dd248154-0e30-4ba4-8647-a205554f10a2": "/admin",
    "2":"/agent"
}

let store :any= {
    token: "",
   
};

export const modifyStore = (key:string, payload:string) => {
    store = { ...store, [key]: payload };

    return store;
}

export const getStore = (key:string) => {
    return store[key];
}

// export const setFormDataFn=(formData:any,setFormData:any)=>{

//     const handleChange=(event:any)=>{
//     event.preventDefault();
//       const {name,value}=event.target;
//       setFormData((prevValue:any)=>{
//         return {
//           ...prevValue,
//         [name]:value
//         }
//       })
      
//     }
//     return handleChange
// }
