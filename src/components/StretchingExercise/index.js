import React from "react"
import CountdownTimer from "../CountdownTimer"

export default class StretchingExercise extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: this.props.value}
    }
    render(){
        return(
            
            <div style={{margin: "auto"}}>
                <h3>{this.props.name}</h3>
                <CountdownTimer></CountdownTimer>
            </div>
            
        
        );
    }
}

