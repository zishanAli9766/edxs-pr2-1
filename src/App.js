import { connect, useSelector } from 'react-redux';
import './App.css';
import BoxCon from './Container/Box-container';
import * as actionCreators from "./Actions/index"


function App({users,obj}) {
  const color = useSelector((state) => state?.color)
  console.log("users",users)
  return (
    <div >
    <h1>Redux Api Call</h1>
    <button onClick={obj}>this The Function Call</button>
    <div>
    {color.map((item)=>{
      return(
        <>
        <p>{item.id}: {item.email}</p>
        </>
      )
    })}
    </div>
    <BoxCon />
    </div>
  );
}
const mapStateToProps = (state) => ({

  users: state.color,
  
});

const mapDispatchToProps = {
 obj: actionCreators.loadColor
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
