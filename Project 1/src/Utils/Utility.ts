let store:any= {
    token: ""
};


export const modifyStore = (key:string, payload:string) => {
    store = { ...store, [key]: payload };
    return store;
}

export const getStore = (key:string) => {
    return store[key];
}

export const ROLE_PAGE_MAP:any = {
    "0a85908d-6574-441f-8a88-a7d7ef4aa947": "Admin",
    "a1fb54a0-659c-423d-81d5-1cda568459db":"Distributor"
}


export const Navigate=(page:any,setPage:any)=>{

    const onNavigate=(page:string)=>{
    setPage(page)
    window.history.pushState({},"",`${page}`)
    }
    return onNavigate;
}

export const setFormDataFn=(formData:any,setFormData:any)=>{

    const handleChange=(event:any)=>{
    event.preventDefault();
      const {name,value}=event.target;
      setFormData((prevValue:any)=>{
        return {
          ...prevValue,
        [name]:value
        }
      })
      
    }
    return handleChange
}
