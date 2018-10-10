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
    windowHeight: window.innerHeight,
    currentMenu: {}
  }

  componentDidMount = () => {
    this.scrollAnimation()
    this.controlScroll()
    this.selectMenu()
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
    let about = document.querySelector(".about")

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
        about.classList.add("bg-color-white")
        about.classList.remove("bg-color-trans")
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
        about.classList.remove("bg-color-white")
        about.classList.add("bg-color-trans")
      }
    })
  }

  controlScroll = () => {
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

  selectMenu = () => {
    const menuItems = document.querySelectorAll(".menu-item")
    const menus = [...menuItems]
    const menuOne = document.querySelector(".menu-one")
    const menuTwo = document.querySelector(".menu-two")
    const menuThree = document.querySelector(".menu-three")
    const menuFour = document.querySelector(".menu-four")
    const menuFive = document.querySelector(".menu-five")
    const menuSix = document.querySelector(".menu-six")
    const menuSeven = document.querySelector(".menu-seven")
    let windowHeight = this.state.windowHeight

    this.setState({currentMenu: document.querySelector(".selected")})

    menus.forEach((menu) => {
      menu.addEventListener('click', () => {
        let currentMenu = this.state.currentMenu
        if (menu.classList.contains("original")) {
          menu.classList.add("selected")
          menu.classList.remove("original")
          currentMenu.classList.add("original")
          currentMenu.classList.remove("selected")
          this.setState({currentMenu: menu})
        } else {
          return
        }
      })
    })

    menuOne.addEventListener('click', () => {
      scroll.scrollTo(windowHeight*0, {duration: 1000})
    })
    menuTwo.addEventListener('click', () => {
      scroll.scrollTo(windowHeight*1, {duration: 1000})
    })
    menuThree.addEventListener('click', () => {
      scroll.scrollTo(windowHeight*2, {duration: 1000})
    })
    menuFour.addEventListener('click', () => {
      scroll.scrollTo(windowHeight*3, {duration: 1000})
    })
    menuFive.addEventListener('click', () => {
      scroll.scrollTo(windowHeight*4, {duration: 1000})
    })
    menuSix.addEventListener('click', () => {
      scroll.scrollTo(windowHeight*5, {duration: 1000})
    })
    menuSeven.addEventListener('click', () => {
      scroll.scrollTo(windowHeight*6, {duration: 1000})
    })
  }

  render() {
    return (
      <div className="App bg-color-black">
        <div className="mobile">
          <p>Please view this page on a PC.</p>
        </div>
        <div className="sections">
          <section className="main section">
            <div className="info">
              <div className="title">
                <div className="framer">FramerX</div>
                <img src={cross}/>
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
          <Section/>
          <Section/>
          <Section/>
        </div>
        <div className="menus">
          <div className="sidemenu">
            <div className="menu-item menu-one selected">Home</div>
            <div className="menu-item menu-two original color-white">01 - 05</div>
            <div className="menu-item menu-three original color-white">06 - 10</div>
            <div className="menu-item menu-four original color-white">11 - 15</div>
            <div className="menu-item menu-five original color-white">16 - 20</div>
            <div className="menu-item menu-six original color-white">21 - 25</div>
            <div className="menu-item menu-seven original color-white">25 - 30</div>
          </div>
          <div>
            <button type="button" name="About" className="about bg-color-trans">About</button>
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
