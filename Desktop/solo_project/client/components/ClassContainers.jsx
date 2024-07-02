import React, { useEffect, useState } from 'react';
import Card from './Card.jsx'
import axios from 'axios'


const ClassContainer = () => {
const [classes, setClasses] = useState([])

useEffect(()=> {
    const data = axios.get('http://localhost:5000/class')
    console.log('data', data)
    .then(classes => setClasses(classes))
    console.log('cl', classes)
    .catch(err => console.log(err))
}, [])

    return (
        <div className ="card">
            {classes.map(cl => {
                return  (
                 <Card prop= {cl} />
                )
            })
}
        </div>
    );
}

export default ClassContainer;
