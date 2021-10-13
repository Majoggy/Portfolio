function Interests() {
  return (
    <>
      <section id="interests" className="interests-section off-white">
        <div className="interests-wrap">
          <h1 className="section-title">&#123; Interests &#125;</h1>
          <section className="interests-three-across">
            <div className="interest-div int-fic" style={{ backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(/images/int-fic.jpg)' }}>
              <p className="interest-text">&#123; Active in the Interactive Fiction community, playing and creating ‘retro’ works of IR in Inform 6/Puny Inform (a language with C like syntax) or Inform 7 (a modernised ‘natural language’ style) &#125;</p>
            </div>
            <div className="interest-div reading" style={{ backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(/images/books.jpeg)' }}>
              <p className="interest-text">&#123; Enthusiastic non-fiction reader, particularly in the field of economic history, politics, international relations, and labour history &#125;</p>
            </div>
            <div className="interest-div guitar" style={{ backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(/images/horizon.jpg)' }}>
              <p className="interest-text">&#123; Recovering musician/electric guitarist &#125;</p>
            </div>
          </section>
        </div>
      </section>
      <div className="contact-slant-div"></div>
    </>
  )
}

export default Interests