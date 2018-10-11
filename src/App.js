import React, { Component } from 'react'
import * as Scroll from 'react-scroll'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './App.css'
import './Responsive.css'
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

    let menuItems = document.querySelectorAll(".menu-item")
    let elements = [...menuItems]

    scroll.scrollTo(1)

    elements.forEach((element) => {
      element.classList.add("color-white")
    })
  }

  scrollAnimation = () => {
    let app = document.querySelector(".App")
    let menuItems = document.querySelectorAll(".menu-item")
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
        details.forEach((detail) => {
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
        details.forEach((detail) => {
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
    let windowHeight = this.state.windowHeight

    for (let section of sections) {
      section.style.top = windowHeight*i + "px"
      i++
    }

    allSections.style.height = windowHeight*(sections.length) + "px"

    window.addEventListener('keydown', (event) => {
      if(event.keyCode === 40) {
        event.preventDefault()
        scroll.scrollMore(windowHeight, {duration: 400})
      } else if (event.keyCode === 38) {
        event.preventDefault()
        scroll.scrollMore(-windowHeight, {duration: 400})
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

      if (delta === -1) {
        event.preventDefault()
        scroll.scrollMore(windowHeight, {duration: 400})
      } else if (delta === 1) {
        event.preventDefault()
        scroll.scrollMore(-windowHeight, {duration: 400})
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
        <div className="mobile">
          <p>Please view this page on a PC.</p>
        </div>
        <div className="sections">
          <Element
            name="sectionOne"
            className="section">
            <section className="main inner-section">
              <div className="info">
                <div className="title">
                  <div className="framer">FramerX</div>
                  <img src={cross} alt="cross"/>
                  <div className="react">React</div>
                </div>
                <div className="subtitle">
                  30 Prototypes in 30 Days
                </div>
                <div className="tags">
                  <div className="tag">#Framer30</div>
                  <div className="tag">#Prototyping</div>
                  <div className="tag">#UXUIDesign</div>
                </div>
                <div className="scroll">
                  <div className="mouse">
                    <img src={mouse} className="mousecircle" alt="mouse"/>
                    <img src={mousescroll} className="mousescroll" alt="mouse wheel"/>
                  </div>
                  <div className="scrolltext">Scroll Down</div>
                </div>
              </div>
            </section>
          </Element>
          <Element
            name="sectionTwo"
            className="section"
          ><Section/></Element>
          <Element
            name="sectionThree"
            className="section"
          ><Section/></Element>
          <Element
            name="sectionFour"
            className="section"
          ><Section/></Element>
          <Element
            name="sectionFive"
            className="section"
          ><Section/></Element>
          <Element
            name="sectionSix"
            className="section"
          ><Section/></Element>
          <Element
            name="sectionSeven"
            className="section"
          ><Section/></Element>
        </div>
        <div className="menus">
          <div className="sidemenu">
            <Link
              to="sectionOne"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1000}
              className="menu-item">
              Home
            </Link>
            <Link
              to="sectionTwo"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1000}
              className="menu-item">
              01 - 05</Link>
            <Link
              to="sectionThree"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1000}
              className="menu-item">06 - 10</Link>
            <Link
              to="sectionFour"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1000}
              className="menu-item">11 - 15</Link>
            <Link
              to="sectionFive"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1000}
              className="menu-item">16 - 20</Link>
            <Link
              to="sectionSix"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1000}
              className="menu-item">21 - 25</Link>
            <Link
              to="sectionSeven"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1000}
              className="menu-item">25 - 30</Link>
          </div>
          <div>
            <button type="button" name="About" className="about">About</button>
          </div>
          <div className="copyright">
            © Anne Lee, 2018
          </div>
        </div>
        <img src={iphone} className="iphone display-none" alt="iphone"/>
      </div>
    );
  }
}

export default App;
