import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
import ReactPage from './viedeo/ReactPage';
import Flutter from './viedeo/Flutter';
import Vue from './viedeo/Vue';
import './index.css'

function Video(){

return (
  <div>
    <Redirect to="/video/reactpage" />
    < div className="topNav">
      <ul>
        <li><Link to="/video/reactpage">React教程</Link></li>
        <li><Link to="/video/vue">Vue教程</Link></li>
        <li><Link to="/video/flutter">Flutter教程</Link></li>
      </ul>
    </div>
    <div className="videoContent">
      {/* <div><h3>视频教程</h3></div> */}
      <Route path="/video/reactpage"   component={ReactPage} />
      <Route path="/video/vue"   component={Vue} />
      <Route path="/video/flutter"   component={Flutter} />
    </div>
  </div>
)
}
export default Video;