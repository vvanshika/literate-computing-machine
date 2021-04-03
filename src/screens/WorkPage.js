import React, {useEffect} from 'react'
import Projects from '../components/Projects';

function WorkPage() {
  useEffect(() => {
    document.getElementById('work').style.opacity = 1;
  }, [])
  
  return (
    <div className='work' id='work'>
      <h1 className='work__title'>"I PREFER GREAT WORK, BUT<span> I DONT DO MEDIOCRE PUSH UPS"</span></h1>
      <Projects />
    </div>
  )
}

export default WorkPage
