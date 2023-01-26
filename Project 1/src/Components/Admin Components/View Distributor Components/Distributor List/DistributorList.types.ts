import { IDistributor, IDistributorsData } from "../Layout/Layout.types";

export interface IDistributorsListProps{
    data?:IDistributor[];
    getData:()=>void,
    displayModal:Function
    displayPopUp:Function,
    
}