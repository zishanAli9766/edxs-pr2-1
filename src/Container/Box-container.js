import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../Actions/index.js"
class BoxCon extends React.Component{
 
    render(){
        const {color} = this.props;
        console.log("yeh hai state",color);
        const itemList = color.map((item) =>{
            return(
                <div key={item.id}>
<p>{item.id}={item.name}</p>
                </div>
            )
        })
        return(
            <>
            <button onClick={this.props.loadColor} >HI The Class Call</button>
            <p>{itemList}</p>
            </>
        )
    }
}




const mapStateToProps=(state)=>({
    color:state.color,
});

export default connect (mapStateToProps, actionCreators)(BoxCon); 