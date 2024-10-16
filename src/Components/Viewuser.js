import axios from "axios";
import React, { useEffect, useState } from "react";
import user from "./user";


const Viewuser = () => {
  const [usermodule, setUser]=useState([]);
  useEffect(()=>{document.title="View User";
    getAllUser();
  },[]);

  const getAllUser = async() => {
    try{
        const response = await axios.get('http://localhost:8081/user_details');
        console.log(response.data);
        setUser(response.data);
      }
      catch(err){
        console.log(err);
      }
  };
 
 
  return (
      <div>
        <h1 className="text-center">All Users</h1>
        { 
            usermodule.length>0?(
                usermodule.map((sp) => 
                <user shp={sp} key={sp.category}/> )
            ):(
                <h1>No user</h1> 
           ) } 
     </div>
    );
};

export default Viewuser;