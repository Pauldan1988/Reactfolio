import React, { useState } from "react"

interface FormState {
    name: string
    email: string
    message: string
}

export default function ContactForm() {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        switch (e.target.id) {
            case "name":                
                break;
            case "email":
                break;
            case "message":
            default:
                break;
        }
    }

    return (
        <div>
            <form>
                <div className= "block">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="message">Type a message</label>
                <textarea id="message" onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}