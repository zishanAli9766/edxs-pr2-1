let defaultState={
    color:[]
}
const mainReducer=(state=defaultState,action)=>{
    console.log("zishan",state?.color);
switch (action.type) {
    case "CHANGE_COLOR":return{
        ...state,
        color:action.payload,
        
    }
     default: return state
      
}

}

export default mainReducer;