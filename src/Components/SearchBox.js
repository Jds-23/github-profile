import React, {useEffect, useState} from "react";
import {Input,Button} from "@material-ui/core";
import axios from "axios";

const SearchBox=()=>{
    const [username,setUsername]=useState("");

    useEffect(()=>{
        if(username!==""){
            axios.get(`https://api.github.com/users/${username}`)
                .catch(error => console.log(error))
                .then(data => console.log(data));
        }
    },[username])
    return(
        <div className="search-box">
        <Input type={"text"} value={username} onChange={e=>setUsername(e.target.value)} placeholder={"GitHub search.."}/>
        <Button>Save</Button>
        </div>
    )
}

export default SearchBox;