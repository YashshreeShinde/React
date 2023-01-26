import { IDistributor } from "../Layout/Layout.types";

export interface IDistributorItemProps{
    name:string,
    displayModal:Function,
    getData:()=>void,
    data:IDistributor,
    displayPopUp:Function
}