import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('name', name);
    console.log('email', email);
    setName('');
    setEmail('');
  }

  return (
    <form className="contact-form" onSubmit={handleOnSubmit}>
      <div className="contact-form__method">
        <h2>Name:</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autofocus={true}
          autoComplete="off"
        />
      </div>
      <hr />

      <div className="contact-form__method">
        <h2>Email:</h2>
        <input
          type="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
      </div>
      <hr />

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
