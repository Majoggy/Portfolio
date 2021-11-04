import React, { useState } from 'react'

function Interests() {

  const [intFicShown, setIntFicShown] = useState(false)
  const [readingShown, setReadingShown] = useState(false)
  const [guitarShown, setGuitarShown] = useState(false)

  return (
    <>
      <section id="interests" className="interests-section off-white">
        <div className="interests-wrap">
          <h1 className="section-title">&#123; Interests &#125;</h1>
          <section className="interests-three-across">       
            <div
              className="interest-div int-fic" 
              onMouseEnter={() =>setIntFicShown(true)} 
              onMouseLeave={() => setIntFicShown(false)} 
              style={{ backgroundImage: intFicShown ? 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/int-fic.jpg)' 
                : 'url(/images/int-fic.jpg)' }}>
              {intFicShown && <p className="interest-text">&#123; Active in the Interactive Fiction community, playing and creating ‘retro’ works of IR in Inform 6/Puny Inform (a language with C like syntax) or Inform 7 (a modernised ‘natural language’ style) &#125;</p>}
            </div>
            <div 
              className="interest-div reading" 
              onMouseEnter={() =>setReadingShown(true)} 
              onMouseLeave={() => setReadingShown(false)} 
              style={{ backgroundImage: readingShown ? 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/books.jpeg)' 
                : 'url(/images/books.jpeg)' }}>
              {readingShown && <p className="interest-text">&#123; Enthusiastic non-fiction reader, particularly in the field of economic history, politics, international relations, and labour history &#125;</p>}
            </div>
            <div 
              className="interest-div guitar"
              onMouseEnter={() =>setGuitarShown(true)} 
              onMouseLeave={() => setGuitarShown(false)} 
              style={{ backgroundImage: guitarShown ? 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/horizon.jpg)'
                : 'url(/images/horizon.jpg)' }}>
              {guitarShown && <p className="interest-text">&#123; Recovering musician/electric guitarist &#125;</p>}
            </div>
          </section>
        </div>
      </section>
      <div className="contact-slant-div"></div>
    </>
  )
}

export default Interests