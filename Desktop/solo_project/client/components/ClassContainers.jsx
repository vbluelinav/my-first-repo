import React, { useEffect, useState } from 'react';
import Card from './Card.jsx'



const ClassContainer = () => {
    console.log('hello class react')
const [classes, setClasses] = useState([])

useEffect(()=> {
    const fetchData = async()=> {
        const result = await fetch('http://localhost:5000/class')
        console.log('result', result)
        result.json().then(data => {
            setClasses(data) // [{…}, {…}, {…}]
            console.log('api', data);
            // console.log('type', typeof data)
        })
    }
    fetchData();
    }, [])

    return (
        <div className = "classContainer" style ={{width: '60rem', height:'50rem', border:"3px solid pink", display:'flex'}}>

       
        {/* <div className ="classCard" style= {{width:'10rem', height:'10rem', border: "2px solid black"}}> */}
            {classes.map((cls, index) => (
                 <Card cls = {cls} key= {index} />
                ))}

        </div>
        // </div>
    );
}
export default ClassContainer
        // {/* < Card  /> */}