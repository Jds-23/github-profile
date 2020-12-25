import React from "react";
import Moment from 'react-moment';

const UserView=({user})=>{
    return(
        <div className="user-view">
            <div className="user-view-card">
                <img alt={"avatar"} src={user?.avatar_url} height={"150px"}/>
                <div className="user-view-ids">
                <h2>{user?.name}</h2>
                    <h3>{user?.login}</h3>
                    <p>Joined at <Moment format="D MMM YYYY" withTitle>{user?.created_at}</Moment></p>
                </div>
                <div className="user-view-followers">
                <p>{user?.followers + " followers | "+user?.following+" following"}</p>
                </div><div className="user-view-info">
                <h5>{user?.bio}</h5>
                <p>{user?.public_repos + " repos || "+user?.public_gists+" gists"}</p>
                </div>
            </div>
        </div>
    )
}
export default UserView;