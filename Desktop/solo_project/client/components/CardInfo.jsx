import React, {useEffect, useState} from 'react'


// need to get the one of information that is matching with id

function CardInfo() {   /// class data objest should be passing 
const [item, setItem] = useState([null]);
// const {_id, picture, name, instructor, available ,price, status } = prop
console.log('hitting CardInfo here?')
// console.log('what is my prop', {_id})
// console.log('what is -ID', {_id})
useEffect(() => {

    const fetchData = async() => {
        try {
        const result = await fetch(`http://localhost:5000/class/${id}`)
        //fetching class
        console.log('result', result)
        const data = await result.json();
            setItem(data)
            console.log('CardInfo data', data)
        }
    catch(error) {
        return 'Unable to fetch the CardInfo database'
    }
}
fetchData();
},[id])

if(!item) {
    return <p>Error: Failed to fetch data</p>
}

return (
    <div className = 'cardContainer'>
        <div class="item">Item 1 {picture}</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
    </div>
)

}




export default CardInfo