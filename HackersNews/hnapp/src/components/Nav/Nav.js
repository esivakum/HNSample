import React, { Component } from 'react'
import './Nav.css'
class Chart extends Component {
    render() {
        return (
           <nav>
               <h3>Hacker News</h3>
               <ul className="nav-links">
                   <li>chart</li>
               </ul>
           </nav>
        );
    }
}

export default Chart;