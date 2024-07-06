import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import CardInfo from './CardInfo.jsx';

const Card = (prop) => {
    // calling useNavigate hook in the Card component;
    const navigate = useNavigate();
    const [itemId, setItemId] = useState(null);
 
    // const {err, isError} = useState(true);
const {_id, picture, name, instructor, available ,price, status } = prop.cls;

// Function to handle button click and redirect
const redirectToPage = () => {

if({_id}) {
    // by using useNavigate we are going to obtain the id and trigger the setItemId state function
    navigate(`/class/${_id}`);
    } else {
    console.log('Item ID not fetched yet')
    }
};

//conditional rendering
    return (
        <div className='card'>
            <div className = 'classImages'>
            <img src ={picture} alt ='picture1' className = "imageStyle" />
            {/* <a href='https://youtu.be/JqyHToMWl3E?si=1WAG6iWEbo__aFzy' /> */}
            {/* <video style= {{height: '750', width: '2500', border: 'solid, 1px, green'}} controls >
            <source src={prop.video} type= "video/mp4"/>
            </video> */}
         </div>
            <div className = 'name'>
            <h3>{name}</h3>
            <p>Instructor: {instructor}</p>
            <p>Available Seat: {available} </p>
            <p>Price: {price}</p>
            <p>Status: {status} </p>
            {/* <CardInfo prop = {_id} className= "cardOption"/> */}

            </div>
            <div className = "classButton" style={{width:'50px', height:'30px', display: 'relative'}}>
            <button className='viewButton' onClick={redirectToPage} prop = {prop.cls._id} >View</button>
            </div>
           </div>
    )
}

export default Card

/*
</div>
            <div className ="classText" style={{width:'80', height:'80',justifyContent: 'center', alignContent:'center'}}>
*/
