import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return(
    <div>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Fragment>
      </Router>
    </div>
  )
}


export default App;

