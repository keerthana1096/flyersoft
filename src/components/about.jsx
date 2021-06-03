/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-use-before-define */
import React from 'react'
import '../styles/about.css'
import img from '../assets/overlap1.jpg'

class About extends React.Component {
  render () {
    return (<div>
            <div className="row about">
              <div className="col-md-2"/>
              <div className="col-md-4">
                  <p className="subtitle">The Best Agricultural Products</p>
                  <h3 className="abtitle">Welcome to Agriculture Farm</h3>
                  <button className="discoverbutton">Discover More</button>
              </div>
              <div className="col-md-3"/>
            <div className="col-md-3">
                <button className="prev">Prev</button>
                <button className="next">Next</button>
            </div>
            </div>

            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-1"/>
                <div className="col-md-3">

                    <img src={img} className="img2"/>
                </div>
                <div className="col-md-2"/>
                <div className="col-md-4">
                  <h3 className="sidetitle">WE'RE THE LEADER IN AGRICULTURE MARKET</h3>
                  <p className="psub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  <h4 className="h4de"><span>Growing fruits and vegetables</span></h4>
                  <p className="psub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <br/>
                <button className="learnmore">Learn More</button>
                </div>
            </div>

        </div>)
  }
}
export default About
