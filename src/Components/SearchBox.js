import React, {useEffect, useState} from "react";
import {Input} from "@material-ui/core";
import axios from "axios";

const SearchBox=({setSearchUser,setLoading,setError})=>{
    const [username,setUsername]=useState("");

    useEffect(()=>{
    getSearch();
        // eslint-disable-next-line
    },[username])

    const getSearch=async() =>
    {
        if (username !== "") {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.github.com/users/${username}`);
                setSearchUser(response?.data);
                setLoading(false);
                setError(false);
            } catch (e) {
                setError(true);
                setLoading(false);
                setSearchUser(undefined);
            }
        }
        else {
            setError(true);
        }
    }


    return(
        <div className="search-box">
        <Input type={"text"} value={username} onChange={e=>setUsername(e.target.value)} placeholder={"GitHub search.."}/>
        </div>
    )
}

export default SearchBox;