

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

