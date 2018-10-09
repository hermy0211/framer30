import React, { Component } from 'react'
import * as Scroll from 'react-scroll'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './App.css'
import Section from './Section'
import cross from './img/cross.png'
import mouse from './img/mouse.svg'
import mousescroll from './img/mousescroll.svg'
import iphone from './img/iphone.svg'

class App extends Component {
  state = {
    windowHeight: window.innerHeight
  }

  componentDidMount = () => {
    this.scrollAnimation()
    this.sectionSize()
  }

  scrollAnimation = () => {
    let app = document.querySelector(".App")
    let menuItems = document.querySelectorAll(".original")
    let elements = [...menuItems]
    let scroll = document.querySelector(".mouse")
    let scrollText = document.querySelector(".scrolltext")
    let iphone = document.querySelector(".iphone")
    let detailItems = document.querySelectorAll(".details")
    let details = [...detailItems]
    let windowHeight = this.state.windowHeight

    window.addEventListener('scroll', () => {
      let y = window.scrollY
      if (y>windowHeight-1) {
        app.classList.remove("bg-color-black")
        app.classList.add("bg-color-white")
        elements.forEach((element) => {
            element.classList.remove("color-white")
            element.classList.add("color-black")
          }
        )
        scroll.classList.add("display-none")
        scrollText.classList.add("display-none")
        iphone.classList.remove("display-none")
        detailItems.forEach((detail) => {
          detail.classList.remove("display-none")
        })
      } else {
        app.classList.add("bg-color-black")
        app.classList.remove("bg-color-white")
        elements.forEach((element) => {
            element.classList.add("color-white")
            element.classList.remove("color-black")
          }
        )
        scroll.classList.remove("display-none")
        scrollText.classList.remove("display-none")
        iphone.classList.add("display-none")
        detailItems.forEach((detail) => {
          detail.classList.add("display-none")
        })
      }
    })
  }

  sectionSize = () => {
    let selectSections = document.querySelectorAll(".section")
    let sections = [...selectSections]
    let allSections = document.querySelector(".sections")
    let i = 0
    let currentSection = 1
    let windowHeight = this.state.windowHeight

    for (let section of sections) {
      section.style.top = windowHeight*i + "px"
      i++
    }

    allSections.style.height = windowHeight*(sections.length) + "px"

    window.addEventListener('keydown', (event) => {
      if(event.keyCode === 40) {
        event.preventDefault()
        if (currentSection < sections.length) {
          scroll.scrollTo(windowHeight*(currentSection), {duration: 400})
          currentSection++
        } else if (currentSection = sections.length) {
          scroll.scrollTo(windowHeight*(currentSection), {duration: 400})
        }
      } else if (event.keyCode === 38) {
        event.preventDefault()
        if (currentSection > 1) {
          scroll.scrollTo(windowHeight*(currentSection-2), {duration: 400})
          currentSection--
        } else if (currentSection = 1) {
          scroll.scrollTo(windowHeight*(currentSection-2), {duration: 400})
        }
      } else if (event.keyCode === 32) {
        event.preventDefault()
      }
    })

    window.addEventListener('mousewheel', handleMouseWheel, false)
    window.addEventListener('DOMMouseScroll', handleMouseWheel, false)

    function handleMouseWheel (event) {
      const e = window.event || event;
      const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      console.log(delta)

      if (delta == -1) {
        event.preventDefault()
        if (currentSection < sections.length) {
          scroll.scrollTo(windowHeight*(currentSection), {duration: 400})
          currentSection++
        } else if (currentSection = sections.length) {
          scroll.scrollTo(windowHeight*(currentSection), {duration: 400})
        }
      } else if (delta == 1) {
        event.preventDefault()
        if (currentSection > 1) {
          scroll.scrollTo(windowHeight*(currentSection-2), {duration: 400})
          currentSection--
        } else if (currentSection = 1) {
          scroll.scrollTo(windowHeight*(currentSection-2), {duration: 400})
        }
      } else {
        event.preventDefault()
      }
    }
  }

  resetHeight = () => {
    window.addEventListener('resize', () => {
      this.setState({windowHeight: window.innerHeight})
    })
  }

  render() {
    return (
      <div className="App bg-color-black">
        <div className="sections">
          <section className="main section">
            <div className="info">
              <div className="title">
                <div className="framer">FramerX</div>
                <img src={cross}/>
                <div className="react">React</div>
              </div>
              <div className="subtitle">
                A 30 Day Challenge
              </div>
              <div className="tags">
                <div className="tag">#Framer30</div>
                <div className="tag">#Prototyping</div>
                <div className="tag">#UXUIDesign</div>
              </div>
              <div className="scroll">
                <div className="mouse">
                  <img src={mouse} className="mousecircle"/>
                  <img src={mousescroll} className="mousescroll"/>
                </div>
                <div className="scrolltext">Scroll Down</div>
              </div>
            </div>
          </section>
          <Section/>
          <Section/>
          <Section/>
        </div>
        <div className="menus">
          <div className="sidemenu">
            <div className="selected">Home</div>
            <div className="original color-white">01 - 05</div>
            <div className="original color-white">06 - 10</div>
            <div className="original color-white">11 - 15</div>
            <div className="original color-white">16 - 20</div>
            <div className="original color-white">21 - 25</div>
            <div className="original color-white">25 - 30</div>
          </div>
          <div>
            <button type="button" name="About" className="about">About</button>
          </div>
          <div className="copyright">
            © Anne Lee, 2018
          </div>
        </div>
        <img src={iphone} className="iphone display-none"/>
      </div>
    );
  }
}

export default App;
