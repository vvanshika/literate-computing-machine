import React, {useEffect} from 'react'
import ContactForm from '../components/ContactForm';

function ContactPage() {
  useEffect(() => {
    document.getElementById('contact').style.opacity = 1;
  }, [])
  
  return (
    <div className='contact-page' id='contact'>
      <h1 className='contact-page__title'>Just Say Hello</h1>
      <div className='contact-page__content'>
        <div className='contact-page__left'>
          <p>
            Let's make something new, different & more meaningful or make thing more visual or 
            conceptual? Just say Hello.
          </p>
          <div className='contact-page__information'>
            <p>Vanshika Modi</p>
            <a href='tel:8420846666'>8420846666</a>
            <p>v-44, Street no-1, Brahmpuri, Delhi-110053, India</p>
          </div>
        </div>
        
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage
