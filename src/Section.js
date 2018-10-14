import React, { Component } from 'react'
import './App.css'
import medium from './img/medium.png'
import github from './img/github.png'

class Section extends Component {
  render() {
    return (
      <section className="inner-section">
        <div className="details display-none">
          <p className="day">{this.props.day}</p>
          <p className="title">{this.props.title}</p>
          <p className="description">{this.props.description}</p>
          <a href={this.props.mediumLink} target="_blank" rel="noopener noreferrer" tabIndex="-1"><img src={medium} className="logo" alt="medium logo"/></a>
          <a href={this.props.githubLink} target="_blank" rel="noopener noreferrer" tabIndex="-1"><img src={github} className="logo" alt="github logo"/></a>
        </div>
        <img src = {this.props.image} className="project display-none" alt="Prototype"/>
      </section>
    )
  }
}

export default Section
