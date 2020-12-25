import React, { useState} from "react";
import './App.css';
import SearchBox from "./Components/SearchBox";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserView from "./Components/UserView";
import NotFound from "./Components/NotFound";
import useLocalStorage from "./hooks/useLocalStorage";
import Popup from "./Components/Popup";

function App() {
    const [searchUser,setSearchUser]=useState(undefined);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(true);
    const [savedUser,setSavedUser]=useLocalStorage("saved-user",{});


    return (
    <div className="app">
      <div className="app-header">
      <h4>GitHub Searcher</h4>
      </div>
        <div className={"app-container"}>
        <SearchBox  setError={setError} setSearchUser={setSearchUser} setLoading={setLoading}/>
            <Popup searchUser={searchUser} setSavedUser={setSavedUser} type={"save"}/>
            <div>
                <h2>Search Result:</h2>
        {loading?<CircularProgress/>:
            <>{error?<NotFound/>:<UserView user={searchUser}/>}</>}
            </div>
                <h2>{savedUser?.login?"Saved User:":"No Saved User"}</h2>
                {savedUser?.login?<>
                    <UserView user={savedUser}/>
                    <Popup searchUser={searchUser} setSavedUser={setSavedUser} type={"delete"}/>
                </>:<></>}
        </div>
    </div>
  );
}

export default App;
