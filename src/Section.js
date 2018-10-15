import React, { Component } from 'react'
import './App.css'
import medium from './img/medium.png'
import mediumDisabled from './img/medium-disabled.png'
import github from './img/github.png'

class Section extends Component {
  render() {
    let data = this.props.data

    return (
      <div>
      {Array.isArray(data) && (data.map((project) =>
        <section className="inner-section">
          <div className="details display-none">
            <p className="day">{project.day}</p>
            <p className="title">{project.title}</p>
            <p className="description">{project.description}</p>
            <img src={mediumDisabled} className="logo" alt="medium logo"/>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" tabIndex="-1"><img src={github} className="logo" alt="github logo"/></a>
          </div>
          <img src = {project.image} className="project display-none" alt="Prototype"/>
        </section>
      ))}
      </div>
    )
  }
}

export default Section
