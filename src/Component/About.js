import React, { } from 'react';
import { withRouter } from "react-router-dom";

const About = (props) => {
  return (
    <div>
      <h1>About Page</h1>
      {props.data ? <div>{props.data.length}</div> : <div>prop did not load </div>}
    </div>
  )

}

export default withRouter(About)