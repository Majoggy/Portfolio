import React from 'react'
import { Link } from 'react-scroll'

function Nav() {
  return (
    <section className="nav black">
      <div className="nav-items">
        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
          <p>&#123; About &#125;</p>
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={750}>
          <p>&#123; Projects &#125;</p>
        </Link>
        <Link activeClass="active" to="interests" spy={true} smooth={true} duration={1000}>
          <p>&#123; Interests &#125;</p>
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
          <p>&#123; Contact &#125;</p>
        </Link>
      </div>
    </section>
  ) 
}

export default Nav
