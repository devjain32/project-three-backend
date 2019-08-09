import React, { Component } from "react";
import Nav from "../components/Nav";
// import UserInfo from "../components/UserInfo"
import API from "../utils/API";

class CommunityGarden extends Component {
    state = {
        users: []
      }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.loadUsers().then(res => 
            this.setState({users: res.data})
            )
    }
    
    render() {
        return (
            <div>
                <Nav />
                {/* <UserInfo 
                name="test"
                /> */}
            </div>
        )
    }
    }


export default CommunityGarden;