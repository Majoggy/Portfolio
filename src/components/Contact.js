function Contact() {
  return (
    <section id="contact" className="contact-section off-white">
      <h1 className="section-title">&#123; Contact &#125;</h1>
      <div className="contact-wrap">
        <div>
          <a href="http://www.linkedin.com/in/cpr-baker">
            <i className="devicon-linkedin-plain contact-icon"></i>
          </a>
          <p>&#123; LinkedIn &#125;</p>
        </div>
        <div>
          <a href="https://github.com/Majoggy">
            <i className="devicon-github-original contact-icon"></i>
          </a>
          <p>&#123; Github &#125;</p>
        </div>
        <div>
          <a href='mailto:cbaker87@gmail.com'>
            <img className="email-icon" src="/images/email-icon.png" /> 
          </a>
          <p>&#123; Email &#125;</p>
        </div>
      </div>
    </section>
  ) 
}

export default Contact
