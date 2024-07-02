import React, { useEffect, useState } from 'react';

const Card = (prop) => {
    // console.log(item)
    // prop = {
    //     picture : '../assets/big-1.webp',
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
  const {picture, name, instructor} = prop
    // const [urls, updateUrls] = useState([]);

    // const style = {
    //     color: black,
    //     height: 10rem,
    //     width: 
    // }
// useEffect(() => {
    
//     const fetchData = async() => {
//         try {
//             const response = await fetch(prop);
//             const data = await response.json()
//             console.log('data', data)

//             updateUrls(data)
//         }catch(error) {
//             console.log('unable to retrieve data')
//         }
//     }

// })
    return (
        <div className = "view" >
            <img src={picture} alt='images'/>
            <form >
            <label style = {{color: 'green'}}>
                {name}
                {/* Name : <input name={prop.name} /> */}
            </label>
            <p>{instructor}</p>
            <button type ="submit">View</button>
            </form>


        </div>
    )

}
//     reutrn (
//         <div className='card'>
//            <form >
//             <img src={prop.picture} />
//             <h3>{prop.name}</h3>
//             <p>{prop.instructor}</p>
//             <p>Available Seat: {prop.available} </p>
//             <p>Price: {prop.price}</p>
//             <p>status: {prop.status} </p>
//             <button className='view'>View</button>
//            </form>
//         </div>
//     )
// }

export default Card