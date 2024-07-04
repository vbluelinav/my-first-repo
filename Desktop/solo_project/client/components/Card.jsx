import React, { useEffect, useState } from 'react';

const Card = (prop) => {

    console.log('what is my prop', prop.cls)
    // const {err, isError} = useState(true);

//     function errorHandling(){
//     return isError(err => !err);
//  }    // const {picture, name, instructor, available,price, status } = {cls};
    // console.log('picture', {cls.picture})
    // prop = {
    //     picture: '..\assets\beginning_pose1.jpg',
    //     video : 'https://youtu.be/JqyHToMWl3E?si=0EDobAwogOdcDjuP',
    //     name : 'Balance with Stress', 
    //     instructor: 'Jessie S.', 
    //     available : 4, 
    //     price: 40,
    //     status: 'available'}

    // prop = {
    //     picture: '../assets/adv-pic 5.webp',
    //     name: 'Into the Wood',
    //     instructor: 'Helena K',

    // }
//   const {picture, name, instructor} = prop
    // const [urls, updateUrls] = useState([]);

    // const style = {
    //     color: black,
    //     height: 10rem,
    //     width: 
    // }

//     return (
//         <div className = "view" >
//             <img src={picture} alt='images' style={{heigth: '50px', width: '50px', border: "solid green 1px"}}/>
//             <form >
//             <label style = {{color: 'black'}}>
//                 Class Name: {name}
//                 {/* Name : <input name={prop.name} /> */}
//             </label>
//             <p>Instructor: {instructor}</p>
//             <button type ="submit">View</button>
//             </form>


//         </div>
//     )

// }
    return (
        <div className='card' style ={{width:'80px', heigt: '100px', padding:'20px', border:'blue solid 3px'}}>
            <div className = 'classImages' style={{height: "30px", width:"50px", border: 'solid red 2px'}}>
            <img src ={prop.cls.picture} alt ='picture1' style={{height: "30px", width:"50px", border: 'solid yellow 3px'}}/>
            {/* <a href='https://youtu.be/JqyHToMWl3E?si=1WAG6iWEbo__aFzy' /> */}
            {/* <video style= {{height: '750', width: '2500', border: 'solid, 1px, green'}} controls >
            <source src={prop.video} type= "video/mp4"/>
            </video> */}
         </div>
            <div className = 'name' style={{height: '30px', width: "50px", display:'relative', border: 'black solid 2px'}}>
            <h3>Class Name: {prop.cls.name}</h3> 
            <p>Instructor: {prop.cls.instructor}</p>
            <p>Available Seat: {prop.cls.available} </p>
            <p>Price: {prop.cls.price}</p>
            <p>status: {prop.cls.status} </p>
            </div>
            <div className = "classButton" style={{width:'50px', height:'30px', display: 'relative'}}>
            <button className='view'>View</button>
            </div>
           </div>
    )
}

export default Card

/*
</div>
            <div className ="classText" style={{width:'80', height:'80',justifyContent: 'center', alignContent:'center'}}>
*/
