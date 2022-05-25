import React,{Component} from "react";
import Tables from "./Tables";
//Simulate & Dive
class Articles extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }
    render(){
        const {count} = this.state;
        return(
            <div>
<div className={`clicks-${count}`}>
{count}  Clicks
</div>
<button onClick={()=>{this.setState({count: count +1 })}}>
    Increment
</button>
<h1>Article Details</h1>
<Tables />
            </div>
        )
    }
}

export default Articles