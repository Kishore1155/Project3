import Radium from "radium";
import React from "react";
function Appz()
{
    const style1={
        ':hover':{
            backgroundColor:'green'
        }
    }
    return(
       <div>
        <button style={style1}>CLICK ME</button>
       </div>
    );
}
export default Radium(Appz);