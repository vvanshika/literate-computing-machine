import React, {useEffect} from 'react'

function HomePage() {
  useEffect(() => {
    document.getElementById('home').style.opacity = 1;
  }, [])
  
  return (
    <div className='home' id='home'>
      <div className='home__content'>
        <div className='home__greet'>
          <hr />
          <h2>Hello</h2>
        </div>
        <h2 className='home__title'><span>I'm</span> Vanshika Modi</h2>
        <h3 className='home__tagline'>A UI & UX designer, visual merchandiser, <br />graphic designer and content creator.</h3>
      </div>
      <img className='home__image' src="/images/profile.jpeg" alt='profile pic' />
    </div>
  )
}

export default HomePage
