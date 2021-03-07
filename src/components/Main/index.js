import React from "react"
import RepetitionExercise from "../RepetitionExercise"
import DurationExercise from "../DurationExercise"


const MAIN = "main"
const REPETITION_EXERCISE = "repetition_exercise"
const DURATION_EXERCISE = "duration_exercise"

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
        let propertyName = this.state.selectedItem.objType == "number" ? "value" : "strValue"
        this.setState((prevState) => {
            let objectToUpdate = prevState.currentObjects.find((obj) => obj == this.state.selectedItem)
            objectToUpdate[propertyName] = newValue
            return { currentObjects: this.state.currentObjects }

        })
        //this.setState({selectedItem[propertyName] = newValue
    }

    render() {
        let duration = [
            { objectType: "string", name: "Treadmill", strValue: "Timer Prep" },
            { objectType: "string", name: "Planking", strValue: "Timer Prep" },
        ]

        let screen
        //msssing with the screens
        switch (this.state.currentScreen) {
            case MAIN:
                screen = (
                    <>
                    <div class="inside">
                        <h2> Choose Your Exercise Style </h2>
                        <h4>Repetition</h4>
                        <ul>
                            {this.state.currentObjects.map((obj) =>
                                //Turnary Example//

                                <li>
                                    <button onClick={() => this.setState({ currentScreen: obj.objectType == "number" ? REPETITION_EXERCISE : DURATION_EXERCISE, selectedItem: obj })}> {obj.name} </button>
                                </li>
                                // obj refers to the object array up at the top we want to pass in
                                // Will return the value in the 'first slot' above if true
                                //Returns value in second slot below if false.
                            )}
                        </ul>

                        <h4>Duration</h4>
                        <ul>
                            {duration.map((obj) =>
                                <li>
                                    <button onClick={() => this.setState({ currentScreen: obj.objectType == "number" ? REPETITION_EXERCISE : DURATION_EXERCISE, selectedItem: obj })}> {obj.name} </button>
                                </li>
                            )}
                        </ul>

                        <button onClick={() => this.props.welcome(false)}>Return to Home</button>
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
                        <button onClick={() => this.setState({ currentScreen: MAIN })}> Back </button>
                    </>
                break;

            case DURATION_EXERCISE:
                // Line 84 Gets the properties of the selected item
                screen =
                    <>
                        <DurationExercise {...this.state.selectedItem}></DurationExercise>
                        <br></br>
                        <button onClick={() => this.setState({ currentScreen: MAIN })}> Back </button>
                    </>
                break;
        }
        return screen
    }
}