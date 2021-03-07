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
                <h3>{this.props.name}</h3>
                <p style={{textAlign: "center", fontSize: "40px", 
           backgroundColor: "gray", borderRadius: "10px", color: "white", border: "3px solid #ffffff", width: "290px", margin: "auto"}}>Number Completed: {this.state.value}</p>
           <br></br>
                <button style={{ marginLeft: "220px", fontSize: "20px", color: "black", border:"2px solid gray", borderRadius: "5px", backgroundColor: "#EFEEEE", width: "310px", margin: "15px;"}} onClick={() => this.plusOne()}> Add a Rep</button>
                <br></br>
                <br></br>
                <button style={{ marginLeft: "220px", fontSize: "20px", color: "black", border:"2px solid gray", borderRadius: "5px", backgroundColor: "#EFEEEE", width: "310px", margin: "15px;"}} onClick={() => this.Reset()}> Reset</button>
                <br></br>
            </>
        )
    }
}
