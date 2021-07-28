import React, { } from 'react';
import Header from "./Header"
import Router from "./Router"

const App = () => {

  //need the navbar component with the link
  //need the "router" component that switches components

  return (
    <div className="container-fluid p-0">
      <Header />
      <Router />
    </div>
  )
}
export default App;
