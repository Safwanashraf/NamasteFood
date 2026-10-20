import { useState } from "react";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="contact-page">
            <header className="contact-heading">
                <p className="eyebrow">WE ARE LISTENING</p>
                <h1>Let's talk <span>food.</span></h1>
                <p>Questions, ideas, or a restaurant we should know about? Send a note our way.</p>
            </header>

            <div className="contact-layout">
                <aside className="contact-aside">
                    <img
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
                        alt="A warmly lit restaurant table ready for a meal"
                    />
                    <div className="contact-aside-copy">
                        <p className="eyebrow">WHAT'S ON YOUR MIND?</p>
                        <h2>We'd love to hear from you.</h2>
                        <p>Choose a topic and leave us a few details. We'll take it from there.</p>
                    </div>
                </aside>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-form-row">
                        <label>
                            Your name
                            <input name="name" type="text" autoComplete="name" placeholder="Name" required />
                        </label>
                        <label>
                            Email address
                            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                        </label>
                    </div>
                    <label>
                        What is this about?
                        <select name="topic" defaultValue="" required>
                            <option value="" disabled>Choose a topic</option>
                            <option value="order">An order or restaurant</option>
                            <option value="partnership">Restaurant partnership</option>
                            <option value="feedback">Feedback or something else</option>
                        </select>
                    </label>
                    <label>
                        Your message
                        <textarea name="message" rows="5" placeholder="Tell us a little more..." required />
                    </label>
                    <div className="contact-form-footer">
                        <button className="contact-submit" type="submit">
                            Send message <span aria-hidden="true">&#8599;</span>
                        </button>
                        <p className="contact-demo-note">Demo form only. Messages are not sent yet.</p>
                    </div>
                    <p className="contact-status" aria-live="polite">
                        {submitted ? "Thanks for reaching out. This demo form is not connected to a message service yet." : ""}
                    </p>
                </form>
            </div>
        </main>
    )
}

export default Contact;