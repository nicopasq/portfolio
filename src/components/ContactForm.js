import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

export default function ContactForm(){
    return (
        <div className="contactFormContainer">
            <h1 style={{position:"relative", bottom:'4vh'}}>Contact Me</h1>
            <form className="contactForm">

                <div className="inputContainer">
                    <h6 className="inputTitle">Name (required)</h6>
                    <label className="nameLabel">First Name</label>
                        <input className="nameInput" />

                    <label className="nameLabel">Last Name</label>
                        <input className="nameInput"/>
                </div>

                <div className="inputContainer">
                <h6 className="inputTitle">Email (required)</h6>
                <input className="contactInput"/>
                </div>

                <div className="inputContainer">
                <h6 className="inputTitle">Subject (required)</h6>
                <input className="contactInput"/>
                </div>

                <div className="inputContainer">
                <h6 className="inputTitle">Message (required)</h6>
                <textarea className="messageInput"/>
                </div>

                <Button variant="contained" id="submitMessage" type="submit">Send</Button>

            </form>
        </div>
    )
}