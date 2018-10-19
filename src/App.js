import React, { Component } from 'react'
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import './App.css'
import './Responsive.css'
import Section from './Section'
import cross from './img/cross.png'
import mouse from './img/mouse.svg'
import mousescroll from './img/mousescroll.svg'
import iphone from './img/iphone.svg'
import close from './img/close.png'
import dayOne from './img/day01_password.gif'
import dayTwo from './img/day02_card.gif'
import dayThree from './img/day03_circlemenu.gif'
import dayFour from './img/day04_hearts.gif'
import dayFive from './img/day05_safari.gif'
import daySix from './img/day06_align.gif'
import blank from './img/blank.png'

class App extends Component {
  state = {
    windowHeight: window.innerHeight,
    dataOne: [{
      day: "DAY 01",
      title: "Password Check Interaction",
      description: "This prototype checks the length of the inputted password, and returns either the success or fail animation. The keyboard component was created from scratch, and I intend to publish it.",
      githubLink: "https://github.com/hermy0211/framer30-code/tree/master/Day%2001%20Password",
      image: dayOne
    },{
      day: "DAY 02",
      title: "Save Card Interaction",
      description: "This prototype replicates the interaction of when a card is swiped down and 'saved' to the deck. I tried to put extra care into creating smooth, easing in / out animations for the information components.",
      githubLink: "https://github.com/hermy0211/framer30-code/tree/master/Day%2002%20Cards",
      image: dayTwo
    },{
      day: "DAY 03",
      title: "Circular Menu Animation",
      description: "This is an example of a circular menu that you can tap in order to show the different menu options. When you tap on the button, the menu opens and the icons roll in. When you tap on an icon, the menu closes.",
      githubLink: "https://github.com/hermy0211/framer30-code/tree/master/Day%2003%20Circle%20Menu",
      image: dayThree
    },{
      day: "DAY 04",
      title: "Live Stream Heart Animation",
      description: "Up to now, I have been using overrides to animate my components. Today I learned that you can use querySelectors to access them as well. This was a challenging exercise, but it had a lot of takeaways!",
      githubLink: "https://github.com/hermy0211/framer30-code/tree/master/Day%2004%20Hearts",
      image: dayFour
    },{
      day: "DAY 05",
      title: "Safari Switch Tabs Interaction",
      description: "Today's prototype is a recreation of Safari's switch tab interaction. I used rotate3d() and perspective to rotate the page.",
      githubLink: "https://github.com/hermy0211/framer30-code/tree/master/Day%2005%20Safari",
      image: dayFive
    }],
    dataTwo: [{
      day: "DAY 06",
      title: "Align Text Animation",
      description: "This was a very simple one to code. All you need to know is animate.ease! If the code seems okay but it is not working, try checking if any automatic position constraints have been applied.",
      githubLink: "https://github.com/hermy0211/framer30-code/tree/master/Day%2006%20Align",
      image: daySix
    },{
      day: "DAY 07",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 08",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 09",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 10",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    }],
    dataThree: [{
      day: "DAY 11",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 12",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 13",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 14",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 15",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    }],
    dataFour: [{
      day: "DAY 16",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 17",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 18",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 19",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 20",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    }],
    dataFive: [{
      day: "DAY 21",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 22",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 23",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 24",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 25",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    }],
    dataSix: [{
      day: "DAY 26",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 27",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 28",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 29",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    },{
      day: "DAY 30",
      title: "Coming Soon",
      description: "Stay tuned for more prototypes created with FramerX and React.js.",
      githubLink: "https://github.com/hermy0211/framer30-code",
      image: blank
    }]
  }

  componentDidMount = () => {
    this.scrollAnimation()
    this.scrollInput()

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
    let about = document.querySelector(".about")
    let firstProject = document.querySelector(".project")

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
        firstProject.classList.remove("display-none")
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
        firstProject.classList.add("display-none")
      }
    })
  }

  scrollInput = () => {
    let selectSections = document.querySelectorAll(".section")
    let sections = [...selectSections]
    let selectInnerSections = document.querySelectorAll(".inner-section")
    let innerSections = [...selectInnerSections]
    let allSections = document.querySelector(".sections")
    let i = 0
    let j = 0
    let windowHeight = this.state.windowHeight
    let selectProjects = document.querySelectorAll(".project")
    let projects = [...selectProjects]

    for (let section of sections) {
      section.style.top = windowHeight+windowHeight*i*5 + "px"
      i++
    }

    for (let innerSection of innerSections) {
      innerSection.style.top = windowHeight*j + "px"
      j++
    }

    allSections.style.height = windowHeight*(sections.length)*5 + "px"

    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('mousewheel', handleMouseWheel, false)
    window.addEventListener('DOMMouseScroll', handleMouseWheel, false)

    function handleMouseWheel (event) {
      const e = window.event || event;
      const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

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

    function handleKeyPress (event) {
      if(event.keyCode === 40) {
        event.preventDefault()
        scroll.scrollMore(windowHeight, {duration: 400})
      } else if (event.keyCode === 38) {
        event.preventDefault()
        scroll.scrollMore(-windowHeight, {duration: 400})
      } else if (event.keyCode === 32) {
        event.preventDefault()
      }
    }

    // function fadeProjects (time) {
    //   projects.forEach((project) => {
    //     project.classList.add("display-none")
    //   })
    //   setTimeout(() => {
    //     projects.forEach((project)=>{
    //       project.classList.remove("display-none")
    //     })
    //   }, time)
    // }
  }

  resetHeight = () => {
    window.addEventListener('resize', () => {
      this.setState((state)=>({windowHeight: window.innerHeight}))
    })
  }

  openAbout = () => {
    const popup = document.querySelector(".about-layer")
    const sections = document.querySelector(".sections")
    const menus = document.querySelector(".menus")
    popup.classList.add("show")
    sections.classList.add("hide")
    menus.classList.add("hide")
  }

  closeAbout = () => {
    const popup = document.querySelector(".about-layer")
    const sections = document.querySelector(".sections")
    const menus = document.querySelector(".menus")
    popup.classList.remove("show")
    sections.classList.remove("hide")
    menus.classList.remove("hide")
  }

  render() {
    return (
      <div className="App bg-color-black">
        <div className="mobile">
          <p>Please view this page on a PC.</p>
        </div>
        <Element
          name="sectionOne"
          className="main-section">
          <section className="main inner-section">
            <div className="info">
              <div className="title">
                <div className="framer">FramerX</div>
                <img src={cross} alt="cross"/>
                <div className="react">React.js</div>
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
        <div className="sections">
          <Element
            name="sectionTwo"
            className="section"
          ><Section
            data = {this.state.dataOne}
          /></Element>
          <Element
            name="sectionThree"
            className="section"
          ><Section
            data = {this.state.dataTwo}
          /></Element>
          <Element
            name="sectionFour"
            className="section"
          ><Section
            data = {this.state.dataThree}
          /></Element>
          <Element
            name="sectionFive"
            className="section"
          ><Section
            data = {this.state.dataFour}
          /></Element>
          <Element
            name="sectionSix"
            className="section"
          ><Section
            data = {this.state.dataFive}
          /></Element>
          <Element
            name="sectionSeven"
            className="section"
          ><Section
            data = {this.state.dataSix}
          /></Element>
        </div>
        <div className="menus">
          <div className="sidemenu">
            <Link
              to="sectionOne"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1500}
              className="menu-item">
              Home
            </Link>
            <Link
              to="sectionTwo"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1500}
              className="menu-item">
              01 - 05</Link>
            <Link
              to="sectionThree"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1500}
              className="menu-item">06 - 10</Link>
            <Link
              to="sectionFour"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1500}
              className="menu-item">11 - 15</Link>
            <Link
              to="sectionFive"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1500}
              className="menu-item">16 - 20</Link>
            <Link
              to="sectionSix"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1500}
              className="menu-item">21 - 25</Link>
            <Link
              to="sectionSeven"
              activeClass="selected"
              spy={true}
              smooth={true}
              duration={1500}
              className="menu-item">26 - 30</Link>
          </div>
          <div>
            <button type="button" name="About" className="about" onClick={this.openAbout}>About</button>
          </div>
          <div className="copyright">
            © Anne Lee, 2018
          </div>
        </div>
        <img src={iphone} className="iphone display-none" alt="iphone"/>
        <div className="about-layer overlay">
          <div className="introduction">
            <div className="introduction-inner">
              <p className="title">
                My name is Anne and<br/>
                I am a Product Designer.<br/><br/>
              </p>
              <p className="description">
                30 Days of Framer is a<br/>
                prototyping project<br/>
                in which I create<br/>
                30 Framer X prototypes<br/>
                throughout 30 days.
              </p>
              <p className="credit">
                Inspired by Tony Jing
              </p>
            </div>
          </div>
          <div className="connect">
            <div className="connect-inner">
              <p className="connect-title">
                Connect with Me
              </p>
              <a href="https://www.linkedin.com/in/annesohyunlee/" target="_blank" rel="noopener noreferrer" className="social">Linkedin</a>
              <a href="https://www.instagram.com/coding.designer.__/" target="_blank" rel="noopener noreferrer" className="social">Instagram</a>
              <a href="https://medium.com/@annelee_22736" target="_blank" rel="noopener noreferrer" className="social">Medium</a>
              <a href="mailto:hermy0211@naver.com" target="_blank" rel="noopener noreferrer" className="social">Email</a>
            </div>
          </div>
          <button onClick={this.closeAbout} className="close" tabIndex="-1"><img src={close} alt="close"/></button>
        </div>
      </div>
    );
  }
}

export default App;
