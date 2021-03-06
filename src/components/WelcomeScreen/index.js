import React from "react"

export default class WelcomeScreen extends React.Component {
    render() {
        return (
            <>
                <h2> Welcome to the Exercise Tracker </h2>

                <button onClick={() => this.props.welcome(true)}>Click here to continue</button>
            </>
        )
    }
}