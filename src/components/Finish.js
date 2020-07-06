import React from "react";
import "./Finish.css";

import Context from '../context/Context';

function Finish() {
  const {finish, setFinish, globalEmail} = React.useContext(Context);
  return (
    <div className={finish ? "Finish FinishShow" : "Finish"}>
      <h1>You're nearly done!</h1>
      <h1>{'A confirmation email has been sent to '+globalEmail}</h1>
      <a className="Back" onClick={()=>setFinish(false)}><i id="Arrow" className="fas fa-chevron-left"></i>Back</a>
    </div>
  );
}

export default Finish;
