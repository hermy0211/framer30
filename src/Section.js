import React, { Component } from 'react'
import './App.css'
import medium from './img/medium.png'
import github from './img/github.png'

class Section extends Component {
  render() {
    return (
      <section className="inner-section">
        <div className="details display-none">
          <p className="day">DAY 01</p>
          <p className="title">Safari Scroll Interaction</p>
          <p className="description">A simple, Safari style scroll based on the webpage panning interaction. Created with Framer X and React.js. A simple, Safari style scroll based on the webpage panning interaction.</p>
          <a href="https://medium.com/@annelee_22736" target="_blank" rel="noopener noreferrer"><img src={medium} className="logo" alt="medium logo"/></a>
          <a href="https://github.com/hermy0211" target="_blank" rel="noopener noreferrer"><img src={github} className="logo" alt="github logo"/></a>
        </div>
      </section>
    )
  }
}

export default Section
