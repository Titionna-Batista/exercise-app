//Guidance from https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2

import React, { Component } from "react"

export default class Stopwatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            running: false,
            begin: 0
        }
        this.beginTime = this.beginTime.bind(this)
        this.stopTime = this.stopTime.bind(this)
        this.resetTime = this.resetTime.bind(this)
    }

    beginTime() {
        this.setState({
            running: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }

    stopTime() {
        this.setState({ running: false })
        clearInterval(this.timer)
    }

    resetTime() {
        this.setState({ time: 0, running: false })
    }

    render() {
        let commence = (this.state.time === 0) ?
            <button style={{ fontSize: "20px", color: "black", border:"2px solid gray", borderRadius: "5px", backgroundColor: "#EFEEEE", width: "310px", marginLeft:"-105px"}} onClick={this.beginTime}> Start Exercise </button> : null

        let end = (this.state.time === 0 || !this.state.running) ? null :
            <button style={{ fontSize: "20px", color: "black", border:"2px solid gray", borderRadius: "5px", backgroundColor: "#EFEEEE", width: "310px", marginLeft:"-105px"}} onClick={this.stopTime}> Stop Exercise </button>

        let reset = (this.state.time === 0 || this.state.running) ? null :
            <button style={{ fontSize: "20px", color: "black", border:"2px solid gray", borderRadius: "5px", backgroundColor: "#EFEEEE", width: "310px", marginLeft:"-105px"}} onClick={this.resetTime}> Reset Timer </button>

        return (
            <>
                <h4 style={{textAlign: "center", fontSize: "40px", 
           backgroundColor: "gray", borderRadius: "10px", color: "white", border: "3px solid #ffffff", width: "200px", height: "90px", margin: "auto"}}> Timer: {this.state.time}</h4>
           <br></br>
               <div style={{marginLeft: "326px"}}>
                {commence}
                {end}
                {reset}
                </div>
            </>
        );
    }
}