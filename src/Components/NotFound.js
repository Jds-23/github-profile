import React from "react";
import logo from "../Octocat.png";

const NotFound=()=>{
    return(
        <div className="user-view">
            <div className="user-view-card">
                <img alt={"avatar"} src={logo} height={"150px"}/>
                <div className="user-view-ids">
                    <h2>Not found</h2>
                   </div>
            </div>
        </div>
    )
}
export default NotFound;