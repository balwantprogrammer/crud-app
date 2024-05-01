import React, { useEffect, useState } from 'react'
import './ShowData.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const ShowData = () => {
  const navigate = useNavigate();
  const [dataShow , setDataShow] = useState([]);
  const FormDataShow =async()=>{
    const API = 'https://6621bd0727fcd16fa6c7d141.mockapi.io/image';
    await axios.get(API).then((data)=>{
      setDataShow(data.data);
    })

  }
  useEffect(()=>{
    FormDataShow();
  },[])

  const DeleteData = async(id)=>{
    const API = 'https://6621bd0727fcd16fa6c7d141.mockapi.io/image';
    await axios.delete(`${API}/${id}`)
    .then(()=>{
      FormDataShow();
    })
  }
  
const setStoragedata =(id,name,age, email, pass) =>{
   localStorage.setItem("id", id)
   localStorage.setItem("name" , name)
   localStorage.setItem("age" , age);
   localStorage.setItem("email" , email)
   localStorage.setItem("pass" , pass);
   console.log(id,name,age,email,pass)

}


  return (
    <div className='new-data'>
    <button onClick={()=>navigate('/')}>Create New Data</button>
    <div className='table'>
    <table style={{background:"black"}}>
        <thead className='thead'>
            <tr>
            <th >User name</th>
            <th  >User age</th>
            <th >User Email</th>
            <th >Password</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
              dataShow.map((data)=>{
                return(
                <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
                <td>{data.pass}</td>
                <Link to='/update'><td  onClick = {()=>setStoragedata(data.id, data.name ,data.age, data.email , data.pass)}  style={{ color:"#fff", fontWeight:700, background:"green" ,border:"none", borderRadius:"4px" , cursor:"pointer"}}>Edit</td></Link>
                <td onClick={()=> {if(window.confirm("Are Your Sure Delete Data !"))DeleteData(data.id)}} style={{ color:"#fff", fontWeight:700, cursor:"pointer", background:"orange" ,border:"none", borderRadius:"4px"}}>Delete</td>
                </tr>
                )
              })
            }
        </tbody>
    </table>
      
    </div>
    </div>
  )
}

export default ShowData
