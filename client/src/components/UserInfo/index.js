import React from "react";
import {Row, Col} from "../Grid";

const UserInfo = props => {
    return (props.users.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>No One has Planted Anything</h3>
                </div>
            </div>
        </div> 
    ) : (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    {props.users.map(user => {
                        return (
                            <li className="list-group-item">
                                <Row className="SearchResult row" id={user.email + "Card"} key={user._id}>
                                    <Col size="1">
                                        {user.email} Garden
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="1">
                                        How can I access user's plants in their garden?
                                    </Col>
                                </Row>
                                
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserInfo;
