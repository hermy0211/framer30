import React, { Component } from 'react'
import './App.css'
import iphone from './img/iphone.svg'
import medium from './img/medium.png'
import github from './img/github.png'

class Section extends Component {
  render() {
    let data = this.props.data

    return (
      <div>
      {Array.isArray(data) && (data.map((project, index) =>
        <section className="inner-section" key={index}>
          <div className="details display-none">
            <p className="day">{project.day}</p>
            <p className="title">{project.title}</p>
            <p className="description">{project.description}</p>
            <a href={project.mediumLink} target="_blank" rel="noopener noreferrer" tabIndex="-1"><img src={medium} className="medium" alt="medium logo"/></a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" tabIndex="-1"><img src={github} className="github" alt="github logo"/></a>
          </div>
          <img src={iphone} className="iphone" alt="iphone"/>
          <img src = {project.image} className="project" alt="Prototype"/>
        </section>
      ))}
      </div>
    )
  }
}

export default Section
