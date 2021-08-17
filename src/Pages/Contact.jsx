import React from 'react'

function Contact() {
    return (
        <>
               <section class="contact">
        <div class="row">
            <h1>Contact Us</h1>
        </div>
        <div class="row">
            <form>
                <input type="text" placeholder="Enter your name"/>
                <input type="email" placeholder="Enter your email"/>
                <textarea>Enter your message</textarea>
                <input type="submit" value="Send"/>
            </form>
        </div>
    </section>
        </>
    )
}

export default Contact
