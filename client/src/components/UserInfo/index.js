import React from "react";

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
        <div>
            {props.users.map(user => {
                return (
                    <p>
                    {user.name}
                    </p>
                )
            })}
        </div>
    )
}

export default UserInfo;
