import React from "react"
import RepetitionExercise from "../RepetitionExercise"
import DurationExercise from "../DurationExercise"
import StretchingExercise from "../StretchingExercise"


const MAIN = "main"
const REPETITION_EXERCISE = "repetition_exercise"
const DURATION_EXERCISE = "duration_exercise"
const STRETCHING_EXERCISE = "stretching_exercise"

export default class Main extends React.Component {

    constructor(props) {
        super(props)
        let objects = [
            { objectType: "number", name: "Jumping Jacks", value: 0 },
            { objectType: "number", name: "Squats", value: 0 },
            { objectType: "number", name: "Leg Lifts", value: 0 },


        ]
        this.state = { currentScreen: MAIN, selectedItem: undefined, currentObjects: objects, }
        //When we click on a button, the selected item will refer to that clicked object and grab its value
    }
    updateValue(newValue) {
        let propertyName = this.state.selectedItem.objType === "number" ? "value" : "strValue"
        this.setState((prevState) => {
            let objectToUpdate = prevState.currentObjects.find((obj) => obj === this.state.selectedItem)
            objectToUpdate[propertyName] = newValue
            return { currentObjects: this.state.currentObjects }

        })
        //this.setState({selectedItem[propertyName] = newValue
    }

    render() {
        let duration = [
            { objectType: "string", name: "Treadmill"},
            { objectType: "string", name: "Planking" },
        ]

        let stretch = [
            {objectType: "string", name: "Downward Dog"},
        ]

        let screen
        //msssing with the screens
        switch (this.state.currentScreen) {
            case MAIN:
                screen = (
                    <>
                    <div class="inside">
                        <h2> Choose Your Exercise Style </h2>
                        <h3>Repetition</h3>
                        <ul>
                            {this.state.currentObjects.map((obj) =>
                                //Turnary Example//

                                <li>
                                    <button  style={{ fontSize: "20px", border: "2px solid gray", borderRadius: "5px", margin: "2px"}} onClick={() => this.setState({ currentScreen: obj.objectType === "number" ? REPETITION_EXERCISE : DURATION_EXERCISE, selectedItem: obj })}> {obj.name} </button>
                                </li>
                                // obj refers to the object array up at the top we want to pass in
                                // Will return the value in the 'first slot' above if true
                                //Returns value in second slot below if false.
                            )}
                        </ul>

                        <h3>Duration</h3>
                        <ul>
                            {duration.map((obj) =>
                                <li>
                                    <button style={{ fontSize: "20px", border: "2px solid gray", borderRadius: "5px", margin: "2px"}} onClick={() => this.setState({ currentScreen: obj.objectType === "number" ? REPETITION_EXERCISE : DURATION_EXERCISE, selectedItem: obj })}> {obj.name} </button>
                                </li>
                            )}
                        </ul>

                        <h3> Stretching </h3>
                        <ul>
                        {stretch.map((obj) =>
                        <li>
                            <button style={{ fontSize: "20px", border: "2px solid gray", borderRadius: "5px", margin: "2px"}} onClick={() => this.setState({ currentScreen: STRETCHING_EXERCISE, selectedItem: obj })}> {obj.name} </button>
                        </li>
                        )}

                        </ul>
                            <br></br>

                        <button style={{ fontSize: "23px", marginLeft: "300px"}} onClick={() => this.props.welcome(false)}>Return to Home</button>
                        </div>
                    </>
                )
                //Button to add thing to up above!!//
                break
            case REPETITION_EXERCISE:
                screen =
                    <>
                        <RepetitionExercise {...this.state.selectedItem} updateValue={(value) => this.updateValue(value)}></RepetitionExercise>
                        <br></br>
                        <button style={{ marginLeft: "350px", fontSize: "20px"}}onClick={() => this.setState({ currentScreen: MAIN })}> Back </button>
                    </>
                break;

            case DURATION_EXERCISE:
                // Line 84 Gets the properties of the selected item
                screen =
                    <>
                        <DurationExercise {...this.state.selectedItem}></DurationExercise>
                        <br></br>
                        <button style={{ fontSize: "20px", color: "black", border:"2px solid gray", borderRadius: "5px", backgroundColor: "#EFEEEE", width: "310px", marginLeft:"220px"}} onClick={() => this.setState({ currentScreen: MAIN })}> Back </button>
                    </>
                break;

            case STRETCHING_EXERCISE:
                screen =
                <>
                <StretchingExercise {...this.state.selectedItem}></StretchingExercise>
                <br></br>
                <button style={{ fontSize:"20px", marginLeft: "350px"}} onClick={() => this.setState({ currentScreen: MAIN })}> Back </button>
                </>
        }
        return screen
    }
}