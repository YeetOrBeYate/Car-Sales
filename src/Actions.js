export const ADD = "ADD";
export const YEET = "REMOVE_FEATURE";

export const add = (item)=>{
     return {
        type: ADD,
        payload: item
    }
}

export const remove = (item)=>{
    return{
        type:YEET,
        payload: item
    }
}

