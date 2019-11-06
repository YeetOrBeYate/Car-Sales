export const ADD = "ADD";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const add = (item)=>{
     return {
        type: "ADD",
        payload: item
    }
}

export const remove = (item)=>{
    return{
        type:"REMOVE_FEATURE",
        payload: item
    }
}

