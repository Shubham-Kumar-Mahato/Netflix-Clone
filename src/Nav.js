import React,{useState,useEffect} from 'react'
import "./Nav.css";

function Nav() {
    
    const [show,handleShow]=useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () =>
        {
            if(window.scrollY > 100){
                handleShow(true);
            }
            else{
            handleShow(false);
            }
        });
        return () =>{
            window.addEventListener("scroll");
        };
    },[]);
    return (
        <div className={`nav ${show &&"nav_black"}`}>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt='netflix logo' className="nav_logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" className="nav_avatar" />
        </div>
       
        
    )
}

export default Nav
