import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Report1 from './components/Report1';
import AddReport from './components/AddReport';

function App() {
  return(
    <div>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Report1" element={<Report1 />}></Route>
            <Route exact path="/AddReport" element={<AddReport />}></Route>
          </Routes>
        </Fragment>
      </Router>
    </div>
  )
}


export default App;

