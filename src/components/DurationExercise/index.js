import React from "react"
import Stopwatch from "../Stopwatch"

export default class DurationExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.strValue }
    }
    render() {
        return (
            <>

                <h2>Exercise: {this.props.name}</h2>
                <br></br>
                <Stopwatch></Stopwatch>
            </>
        )
    }
}