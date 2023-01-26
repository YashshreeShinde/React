export interface IState{ 
        stars:number,
        showEmoji:string,
        comment:string
}
export interface IAction{
    type:string,
    payload?:{
        payload:string
    }
}
export interface IShowStatus{
    face:string,
    comment:string
}
