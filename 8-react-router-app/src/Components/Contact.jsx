function About() {
    return(
        <div className="contact-main-page">
            <div className="card-container">
            <h1>Contact Us</h1>
                <div className="name">
                    <label htmlFor="name">Name :  </label>
                    <input type="text" placeholder="Enter you name"/>
                </div>
                <div className="age">
                    <label htmlFor="email">Email :  </label>
                    <input type="email" placeholder="Enter you email"/>
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default About;