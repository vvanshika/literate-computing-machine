import React, {useEffect} from 'react'

function AboutPage() {
  useEffect(() => {
    document.getElementById('about').style.opacity = 1;
  }, [])
  
  return (
    <div className='about' id='about'>
      <h2 className='about__content-main'>
        <span>“I have an enthusiast to combine my</span> design research skills with wireframes to create 
        seamless digital experiences.”
      </h2>
      <p className='about__content'>
        I design because human experience matters. Growing up, I became passionate about finding 
        solutions for human needs, affecting any community. I want to work with organisations to 
        design life centered solutions keeping long term sustainability at the core.
      </p>
      <p className='about__content'>
        As a designer, I try to appreciate a problem through a systemic lens instead of a convex 
        one. Some important keywords that define my interests are human centered design, digital 
        prototyping, experience mapping, interface design, Content Writing and exhibition designing.
      </p>
    </div>
  )
}

export default AboutPage
