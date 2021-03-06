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

                <p>Exercise: {this.props.name}</p>
                <Stopwatch></Stopwatch>
            </>
        )
    }
}