import { ILeaveData } from '../Main/Main.types';
export interface IStatus{
    status:string,
    onClick:(item:ILeaveData)=>void
}

export interface ICardProps{
    type:string,
    data:ILeaveData[],
    statusData:IStatus[]
}