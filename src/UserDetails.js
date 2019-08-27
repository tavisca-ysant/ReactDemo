import React from "react";
import ReactDOM from "react-dom";
import "./style.css";


class UserDetails extends React.Component {
    constructor(props){
        super();
        this.state = {
            firstname: props.users.split(" ")[0],
            lastname: props.users.split(" ")[1]
        }
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        this.setState({
            firstname: newProps.users.split(" ")[0],
            lastname: newProps.users.split(" ")[1]
        })
    }

    render() {
        
        let userList = this.props.users;
        return (
            <div className="right-container" align="center">
                <div className="user-detail-content">
                    <label>First Name : </label>
                    <input type="text"  value={this.state.firstname} onChange={e => this.setState({firstname: e.target.value})}/>
                    <br /><br/>
                    <label>Last Name : </label>
                    <input type="text"  value={this.state.lastname} onChange={e => this.setState({lastname: e.target.value})}/>
                    <br /><br/>
                    <button onClick={() => this.props.funcUpdatArray(this.state.firstname+" "+this.state.lastname)}>Update</button>
                </div>
            </div>
        );
        }
} 

export default UserDetails;