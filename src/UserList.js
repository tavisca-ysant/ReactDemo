import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import UserDetails from "./UserDetails";

var Details = {
    firstname: "Yatharth",
    lastname: "sant"
}



class UserList extends React.Component {
    constructor(){
        super();
        this.state = {
            name: ["Yatharth", "Sant"]
        }
    }
   
    render() {
        
        return (
               <div className="container">
                <div className="left-container">
                        {
                            this.props.Names.map((data, index) => (
                                <div className="list-content" id = {`${index}`} onClick={this.onClickAction.bind(this, index)}>
                                    <h3>{data}</h3>
                                </div>
                                
                            ))
                        } 
                </div>
                <UserDetails userInfo = {this.state.name}/>
               </div>
        );
    }
    onClickAction(index){
        var t1 = this.props.Names;
        var temp = "" + t1[index];
        this.setState({
            name: [temp.split(' ')[0], temp.split(' ')[1]]
        });
        
    }
    
}
export default UserList;