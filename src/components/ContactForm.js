import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const form = useRef()
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  function submit(e) {
    e.preventDefault();

    emailjs.sendForm('service_7717cav', 'template_4p2yrzm', form.current, {
      publicKey:'Bbc_vFdECfGAAx1NK'
    })
    .then(
      () => {
        alert("Your email was sent!");
        setFormInput(  {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }

  function updateInput(e) {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  }

  return (
    <div className="contactFormContainer">
      <h1 style={{ position: "relative", bottom: "4vh", left:"10px" }}>Contact Me</h1>
      <form ref={form} className="contactForm" onSubmit={(e) => submit(e)}>
        <div className="nameContainer">
          <h6 className="inputTitle">Name (required)</h6>
          <h6 className="nameLabel">First Name</h6>
          <input
            className="nameInput"
            name="firstName"
            value={formInput.firstName}
            onChange={(e) => updateInput(e)}
            />
        </div>

        <div className="nameContainer">
          <h6 className="nameLabel">Last Name</h6>
          <input
            className="nameInput"
            name="lastName"
            value={formInput.lastName}
            onChange={(e) => updateInput(e)}
            />
        </div>


        <div className="inputContainer">
          <h6 className="inputTitle">Email (required)</h6>
          <input
            className="contactInput"
            name="email"
            value={formInput.email}
            onChange={(e) => updateInput(e)}
          />
        </div>

        <div className="inputContainer">
          <h6 className="inputTitle">Subject (required)</h6>
          <input
            className="contactInput"
            name="subject"
            value={formInput.subject}
            onChange={(e) => updateInput(e)}
          />
        </div>

        <div className="inputContainer">
          <h6 className="inputTitle">Message (required)</h6>
          <textarea
            className="messageInput"
            name="message"
            value={formInput.message}
            onChange={(e) => updateInput(e)}
          />
        </div>

        <Button variant="contained" id="submitMessage" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}
