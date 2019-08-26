import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
class UserDetails extends React.Component {

    constructor(){
        super();
        this.state = {
            finalNames : ["Yatharth","Sant"]
        }
    }

    render() {
        const {userInfo} = this.props;
        return (
                <div className="right-container">
                    <div align='center'>
                       <label>First Name </label>
                        <input type='text' name='fname' id = 'firstname' value={`${userInfo[0]}`} onChange={e => this.setState({ finalNames: e.target.value })}></input><br/><br/>
                        <label>Last Name </label>
                        <input type='text' name='fname' id = 'lastname' value={`${userInfo[1]}`}></input><br/><br/>
                        <button name = "Update" value="Update" onClick={this.onClickAction.bind(this)}>Update</button>
                    </div>
                </div>
        );
    }
    onClickAction(){
        let fname = document.getElementById('firstname').value;
        let lname = document.getElementById('lastname').value;
        this.setState({
            finalNames: [fname, lname]
        });
    }
}
export default UserDetails;