import React from "react";
import ReactDOM from "react-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            arr : ["Yatharth Sant", "Anil Kadam", "Govind Sanap"],
            selected :0
        }
    }

    updateArrayValue(changedValue){
        let updated = this.state.arr;
        updated[this.state.selected] = changedValue;
        this.setState({
            arr: updated
        })
    }
    updateSelected(index){
        this.setState({
            selected:index
        })
    }
    
    render() {
        const {user} = this.state;
        return (
            <div> 
                <UserList users={this.state.arr} funcupdateSelected={this.updateSelected.bind(this)}/>
                <UserDetails users={this.state.arr[this.state.selected]} funcUpdatArray={this.updateArrayValue.bind(this)}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));