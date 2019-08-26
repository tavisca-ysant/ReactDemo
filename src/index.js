import React from "react";
import ReactDOM from "react-dom";
import UserList from "./UserList";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
             array : ["Yatharth Sant", "Anil Kadam", "Govind Sanap"]
        }
    }
    render() {
        return (
            <div> 
                <UserList Names = {this.state.array}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));