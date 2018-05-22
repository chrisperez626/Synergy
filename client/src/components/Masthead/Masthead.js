import React from 'react';
import "./Masthead.css";
import Welcome from "../Welcome";
import {Wrapper} from "../BootstrapGrid";




const Masthead = ({loggedIn, logout, user, children }) => {
    return (
      !loggedIn ?
      <div className="masthead">
      <div className="container h-100">
        <div className="row h-100">
        {children}
        </div>
      </div>
    </div>
    :
    <div className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <Wrapper>
            <Welcome user={user}/>
          </Wrapper>
        </div>
      </div>
    </div>
  
);
}

export default Masthead;


