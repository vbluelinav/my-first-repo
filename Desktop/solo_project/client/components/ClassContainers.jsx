import React, { useEffect, useState } from 'react';
import Card from './Card.jsx'



const ClassContainer = () => {
    console.log('hello class react')
const [classes, setClasses] = useState([])

useEffect(()=> {
    const fetchData = async()=> {
        const result = await fetch('http://localhost:5000/class')
        // console.log('result', result)
        result.json().then(data => {
            setClasses(data) // [{…}, {…}, {…}]
            console.log('api', data);
        })
    }
    fetchData();
    }, [])

    return (
        <div className = "classContainer" >
            {classes.map((cls, index) => (
                 <Card cls={cls} key= {index} />
                ))}
        </div>
    );
}
export default ClassContainer

      
