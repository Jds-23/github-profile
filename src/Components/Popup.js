import React, {useState} from "react";
import {Modal,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 280,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Popup=({type,setSavedUser,searchUser})=>{
    const classes=useStyles();
    const [open,setOpen]=useState(false);
    const [modalStyle]=React.useState(getModalStyle);
return(
    <div className={"popup"}>
    <Modal
        open={open}
        onClose={()=>setOpen(false)}
    >
        <div style={modalStyle} className={classes.paper}>
           <h1> Do you want to {type==="save"?"Save":"Delete"}</h1>
            <Button onClick={()=>{
                setSavedUser((type==="save"?searchUser:undefined))
                setOpen(false)
            }}>Yes</Button>
        </div>
    </Modal>
        <Button onClick={()=>{
            if(type==="save"){
                if (searchUser) {
                    setOpen(true)
                } else {
                    alert("No User Found!")
                }
            }
            else {
                setOpen(true);
            }
        }}>{type==="save"?"Save":"Delete"}</Button>
    </div>
        )
}
export default Popup;