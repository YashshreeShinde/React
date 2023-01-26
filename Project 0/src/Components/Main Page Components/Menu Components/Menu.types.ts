
export interface IMenuProps
{
  data?:IUserData[];
  setSelectedUserDetails:(data?:IUserData)=>void
}

export interface IMenuItemProps{
  data?:IUserData,
  setSelectedUserDetails:(data?:IUserData)=>void
  
}

export interface IUserData
{
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
    street: string,
    suite:string,
    city: string,
    zipcode: number,
    geo: {
    lat: number,
    lng: number
    }
    },
    phone: number,
    website: string,
    company: {
    name:string,
    catchPhrase: string,
    bs: string
}
}


