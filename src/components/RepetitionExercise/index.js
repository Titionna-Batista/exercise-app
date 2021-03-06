import React from "react"

export default class RepetitionExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.value }
    }
    plusOne() {
        this.setState((prevState) => {
            let newValue = prevState.value + 1
            this.props.updateValue(newValue)
            return {
                value: prevState.value + 1,
            }
        })
    }

    Reset() {
        this.setState((prevState) => {
            let newValue = prevState.value = 0;
            this.props.updateValue(newValue)
            return {
                value: 0,
            }
        })
    }


    render() {

        return (
            <>
                <p>{this.props.name}</p>
                <p>Number Completed: {this.state.value}</p>
                <button onClick={() => this.plusOne()}> Add a Rep</button>
                <button onClick={() => this.Reset()}> Reset</button>
            </>
        )
    }
}
