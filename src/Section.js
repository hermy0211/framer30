import React, { Component } from 'react'
import './App.css'
import medium from './img/medium.png'
import github from './img/github.png'
import dayOne from './img/day01_password.gif'

class Section extends Component {
  render() {
    return (
      <section className="inner-section">
        <div className="details display-none">
          <p className="day">DAY 01</p>
          <p className="title">Password Check Interaction</p>
          <p className="description">This prototype checks the length of the inputted password, and returns either the success or fail animation. The keyboard component was created from scratch, and I intend to publish it.</p>
          <a href="https://medium.com/@annelee_22736" target="_blank" rel="noopener noreferrer" tabIndex="-1"><img src={medium} className="logo" alt="medium logo"/></a>
          <a href="https://github.com/hermy0211/framer30-code/tree/master/Day%2001%20Password" target="_blank" rel="noopener noreferrer" tabIndex="-1"><img src={github} className="logo" alt="github logo"/></a>
        </div>
        <img src = {dayOne} className="project display-none" alt="Prototype for Day 01"/>
      </section>
    )
  }
}

export default Section
