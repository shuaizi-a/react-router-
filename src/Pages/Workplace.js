import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
import Getup from './workplace/Getup';
import Money from './workplace/Money';
import './index.css'

function Workplace(){
  return (
      <div>
          <Redirect to="/workplace/getup" />
          <div className="topNav">
              <ul>
                  <li><Link to="/workplace/getup">哈哈哈</Link></li>
                  <li><Link to="/workplace/money">呵呵呵</Link></li>
              </ul>
          </div>
          <div className="videoContent">
              <Route path="/workplace/getup/"   component={Getup} />
              <Route path="/workplace/money/"   component={Money} />
          </div>
      </div>
  )
}
export default Workplace;