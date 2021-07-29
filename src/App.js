import Header from "./Header"
import RouterComponent from "./RouterComponent"
import DataCache from "./Component/DataCache"
import React, { useState } from 'react';

const App = () => {
  const [ data, setData ] = useState([])

  //need the navbar component with the link
  //need the "router" component that switches components

  return (
    <div className="container-fluid p-0">
      <DataCache callback={(data) => setData(data)} />
      <Header />
      <RouterComponent data={data.results} />
    </div>
  )
}
export default App;
