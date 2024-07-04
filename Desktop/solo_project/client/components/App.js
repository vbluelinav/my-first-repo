import React from 'react';
// import ClassContainer from './ClassContainers.jsx'
// import "../../styles/style.css"
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home.js'
import Instructor from '../pages/Instructor.js'
import Class from '../pages/Class.js'
import Login from '../pages/Login.js'
import About from '../pages/About.js'
import NoPage from '../pages/NoPage.js'
import NavBar from './headers/NavBar.js'
import ClassInfo from '../pages/ClassInfo.js'
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element : <ClassContainer />
//     }
// ])

// export default function App () {
//     console.log('hello from App comp')
//     return (
//         <>
//         <h1>header</h1>
//         <RouterProvider router={router} />
//         <h1>footer</h1>
//         </>
//     );
// }
console.log('say hi from App.jsx file')

export default function App() {
    return (
        <>
        <NavBar />
         <div classname="container">
         <Routes>
         {/* <Route index element = {<Home />} */}
            <Route index element = {<Home />} />
           <Route path="/home" element = {<Home />} />
            <Route path="/about" element = {<About />} />
             <Route path="/instructor" element = {<Instructor />} />
            <Route path="/class" element = {<Class />} />
            <Route path="/class/:id" element = {<ClassInfo />} />
             <Route path="/login" element = {<Login />} />
             <Route path="*" element = {<NoPage />} />
         </Routes>
         </div>

        </>
    )
}
