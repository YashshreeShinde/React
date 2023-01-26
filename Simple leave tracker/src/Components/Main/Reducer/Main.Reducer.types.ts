import { ILeaveData } from './../Main.types';
 
export interface IAction{
   type:string
    payload:{
        data:ILeaveData
    }
}