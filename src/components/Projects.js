import React from 'react'

function Projects() {
  return (
    <>
      <section id="projects" className="project-section black">
        <h1 className="section-title">&#123; Projects &#125;</h1>
        <section className="project-wrap">
          <div className="project-div">
            <h2>&#123; Home Game Tracker &#125;</h2>
            <img className="project-img" src="/images/home-game.png" />
            <p>&#123; A full-stack statistics tracker for tournament poker, with a React frontend and Django/MongoDB backend &#125;</p>
            <div className="project-icons">
              <a href="https://github.com/Majoggy/project-four-frontend">
                <i className="devicon-github-original project-icon"></i>
              </a>
              <a href="https://home-game-tracker.netlify.app/">
                <img className="link-icon" src="/images/link-icon.png" /> 
              </a>
            </div>
          </div>
          <div className="project-div">
            <h2>&#123; AirStudio &#125;</h2>
            <img className="project-img" src="/images/air-studio.png" />
            <p>&#123; A full-stack MERN application, AirStudio is an Airbnb inspired recording-studio bookings website &#125;</p>
            <div className="project-icons">
              <a href="https://github.com/Majoggy/project-three-frontend">
                <i className="devicon-github-original project-icon"></i>
              </a>
              <a href="https://airstudio-se57.netlify.app/">
                <img className="link-icon" src="/images/link-icon.png" /> 
              </a>
            </div>
          </div>
          <div className="project-div">
            <h2>&#123; Diction-Airy &#125;</h2>
            <img className="project-img" src="/images/diction-alt.png" />
            <p>&#123; A single-page application using a third-party dictionary API, coded in React &#125;</p>
            <div className="project-icons">
              <a href="https://github.com/Majoggy/Sei-Project-2">
                <i className="devicon-github-original project-icon"></i>
              </a>
              <a href="https://diction-airy.netlify.app/">
                <img className="link-icon" src="/images/link-icon.png" /> 
              </a>
            </div>
          </div>
          <div className="project-div">
            <h2>&#123; Space Invaders &#125;</h2>
            <img className="project-img" src="/images/space-invaders.png" />
            <p>&#123; A remake of the classic Space Invaders arcade game, in Vanilla JavaScript, HTML and CSS &#125;</p>
            <div className="project-icons">
              <a href="https://github.com/Majoggy/sei-project-1">
                <i className="devicon-github-original project-icon"></i>
              </a>
              <a href="https://majoggy.github.io/sei-project-1/">
                <img className="link-icon" src="/images/link-icon.png" /> 
              </a>
            </div>
          </div>
        </section>
      </section>
      <div className="interests-slant-div"></div>
    </>
  )

}

export default Projects
