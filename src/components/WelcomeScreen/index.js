import React from "react"

export default class WelcomeScreen extends React.Component {
    render() {
        return (
            <>
                <h2> Welcome to the Exercise Tracker </h2>
    
                <br></br>
                <button style ={{ fontSize: "23px", marginLeft: "260px"}} onClick={() => this.props.welcome(true)}>Click here to continue</button>
                <br></br>
                <br></br>
            </>
        )
    }
}