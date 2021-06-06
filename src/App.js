import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import ForGamers from './ForGamers';
import forusers from './forusers';
import programmersandeditors from './programmersandeditors';
import openning from './openning';
import Cpu from './Cpu';
import Case from './case';
import Coolers from './coolers';
import motherboard from './motherboard';
import RAM from './/RAM';
import gpu from './gpu';
import disks from './disks';
import system from './system';
export class App extends React.Component {
  render(){
    return (
      
      <div>
        <Navbar />
       <logo className="App-logo">
       </logo>
       <header className="App-header">
       <Route path="/openning" component={openning} />
             <Route path="/forgamers" component={ForGamers} />
                <Route path="/forusers" component={forusers} />
                <Route path="/programmersandeditors" component={programmersandeditors} />
                <Route path="/Cpu" component={Cpu} />
                <Route path="/Case" component={Case} />
                <Route path="/Coolers" component={Coolers} />
                <Route path="/motherboard" component={motherboard} />
                <Route path="/RAM" component={RAM} />
                <Route path="/gpu" component={gpu} />
                <Route path="/disks" component={disks} />
                <Route path="/system" component={system} />
       </header> 
      </div>

    )
  }
}

export default App
