// import React, { useState,createContext } from "react"
// //import MyComponent from "../MyComponent";
// //import { MyContext } from "../MyContext";
// import { useContext } from 'react'
// import Login from "./login";
// //import TodoList from '../Components/TodoList'
// //cimport { FormContext } from "../FormContext";

// import '../index.css';
// import { Link } from "react-router-dom";
// export const FormContext= createContext("");

// function Fields(props) {

//     function HandleSubmit(e) {
//         const { name, value } = e.target;
//         props.setForm(prevForm => ({
//             ...prevForm,
//             [name]: value
//         }));
//     }

//     return (
//         <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.fieldName}>
//                 {props.fieldName}
//             </label>
//             <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
//                 name={props.fieldName}
//                 type={props.fieldType}
//                 value={props.value}
//                 onChange={HandleSubmit}
//                 placeholder={`Enter your ${props.fieldName}`}
//             />
//         </div>
//     );
// }

// export default function Register() {
//     const [form, setForm] = useState({
//         Name: "",
//         Age: "",
//         Username: "",
//         Password: "",
//     });
//     const [localDB,setDB]=useState([])
//     function HandleSubmit(){
//         setDB([...localDB,form]);
//         setForm({
//             Name: "",
//             Age: "",
//             Username: "",
//             Password: ""
//         })



//     }
//     return (
//         <div>
//             <form className="flex-inline max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-10">
//                 <h1 className="text-xl text-center font-bold font-mono">Register</h1>
//                 <Fields
//                     fieldName="Name"
//                     fieldType="text"
//                     value={form.Name}
//                     setForm={setForm}
//                 />
//                 <Fields
//                     fieldName="Age"
//                     fieldType="number"
//                     value={form.Age}
//                     setForm={setForm}
//                 />
//                 <Fields
//                     fieldName="Username"
//                     fieldType="text"
//                     value={form.Username}
//                     setForm={setForm}
//                 />
//                 <Fields
//                     fieldName="Password"
//                     fieldType="password"
//                     value={form.Password}
//                     setForm={setForm}
//                 />
//                 <div className="flex items-center justify-between">
//                     <button
//                         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         type="button"
//                         onClick={HandleSubmit}
//                     >
//                         <Link to ="./login.js">Sign Up</Link>
//                     </button>
//                 </div>
//                 <div>
//                     <h2 className="text-xl font-bold">Form Data:</h2>
//                         <table className="table-auto
//                        ">
//                         <thead className=" bg-blue-200 gap-49">
//                             <tr className="p-2 m-5">
//                             <th  className="p-2 m-5">Name</th>
//                             <th  className="p-2 m-5">Age</th>
//                             <th  className="p-2 m-5">User Name</th>
//                             </tr>
                            
//                         </thead>
//                         <tbody className="bg-grey-300">
//                            {localDB.map((Key,index)=>(
//                             <tr>
//                             <td className="p-2 m-5">{Key.Name}</td>
//                             <td className="p-2 m-5">{Key.Age}</td>
//                             <td className="p-2 m-5">{Key.Username}</td>
//                         </tr>
//                            ))}
                            
//                         </tbody>

//                         </table>
//                 </div>
//             </form>
//             <FormContext.Provider value={[localDB,setDB]}>
//                             <Login />
                           
//            </FormContext.Provider>
//         </div>
//     );
// }
import axios from "axios";
import { useState } from "react"

export default function Register(){
    const [formdata,setForm]= useState({
        name:"",
        email:"",
        password:"",
    })
    const handleChange =(e)=>{
        const {name,value}=e.target;
        setForm((prev)=>({...prev,[name]:value}));
    }
    const [res,setRes]= useState("");
    const HandleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
             const response = await axios.post("http://localhost:3001/users/register", formdata);
            console.log("Form data submitted successfully!",response.message);
            setForm({name: "",email: "",password: ""});
            setRes("User Registered Successfully !");
        } catch (error) {
            console.error("Error submitting form:", error);
} };
    return(
        <form className="flex w-200 flex-col items-center p-4 bg-black-100 border border-blue-300 rounded-lg p-3 m-4">
        <h1 className="font-bold text-lg mb-4">Register Here!</h1>
        <h5 className="text-red-600">{res}</h5>
        <div className="form-group flex flex-col w-200 mb-4">
          <label htmlFor="username" className="text-sm mb-2">Name</label>
          <input
            className="border border-gray-300 p-2 rounded"
            id="name"
            name="name"
            type="text"
            value={formdata.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
            <label htmlFor="email" className="text-sm mb-2">Email</label>
          <input
            className="border border-gray-300 p-2 rounded"
            id="email"
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            placeholder="Enter your Email"
          />
            <label htmlFor="password" className="text-sm mb-2">Password</label>
          <input
            className="border border-gray-300 p-2 rounded"
            id="password"
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <button type="submit" 
          onClick={HandleSubmit}
          className="bg-blue-500 p-1 m-3 w-30 text-white border-gray-300 p-2 rounded">
            Submit</button>
        </div>
      </form>
    )
}