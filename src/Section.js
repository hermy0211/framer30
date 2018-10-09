import React, { Component } from 'react'
import './App.css'
import medium from './img/medium.png'
import github from './img/github.png'

class Section extends Component {
  render() {
    return (
      <section className="section">
        <div className="details display-none">
          <p className="day">DAY 01</p>
          <p className="title">Safari Scroll Interaction</p>
          <p className="description">A simple, Safari style scroll based on the webpage panning interaction. Created with Framer X and React.js. A simple, Safari style scroll based on the webpage panning interaction.</p>
          <img src={medium} className="logo"/>
          <img src={github} className="logo"/>
        </div>
      </section>
    )
  }
}

export default Section
