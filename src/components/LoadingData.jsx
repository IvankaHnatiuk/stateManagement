import { useState, useEffect } from "react";

export default function LoadingData(){

const [users, setUsers] = useState([]);
const [trigger, setTrigger] = useState(false);
const [isVisible, setIsVisible] = useState(false);

const getData = async()=> {
    const promise = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await promise.json();
    setUsers(json);
    console.log(json);
    
}

useEffect(()=>{
   if (trigger) {
     getData();
   }
},[trigger] );

const handleClick = ()=>{
    if (isVisible) {
        setIsVisible(false);
        setTrigger(false);
        setUsers(null);
    }else{
        setIsVisible(true);
        setTrigger(true);
    }
}



    return (
        <>
            <h1>Async React Lesson</h1>
            <button onClick={handleClick}>Vedere users</button>
            <ul>
                {isVisible && users && users.map((user)=>{
                 return  <li key={user.id}>Nome:{user.name} <br /> Email:{user.email}</li>    
                })}
            </ul>
        </>
    )
}