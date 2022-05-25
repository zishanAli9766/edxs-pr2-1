import axios from "axios";

export function loadColor(){
    return(dispatch)=>{
        return axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log("ali",response.data);
            dispatch(changeColor(response.data));
        })
    }
}

export function changeColor(payload){
    return{
        type:"CHANGE_COLOR",
        payload:payload
    }
}