import React, { useRef, useState } from 'react'
import './FormData.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const FormData = () => {
 const navigate = useNavigate(); 
 const [name, setName] = useState('');
 const [age , setAge] =useState('');
 const [email, setEmail] = useState('');
 const [pass, setPassword] = useState(''); 
const HandelSubmit= async(e)=>{
  e.preventDefault();
  const API ='https://6621bd0727fcd16fa6c7d141.mockapi.io/image';
  const response = await axios.post(API,{
    name,
    age,
    email,
    pass,
  }).then(()=>{
    
    navigate('/showdata');
  }).catch(()=>{
    alert("SomeThigs Wrong !")
  });
}
return (

  <div className='form-data'>
  
     <div className='form-title-data'>
     <Link to='/showdata' className='read-shodata'>Read Data</Link>
     <h2> Create Data! </h2>
     <form className='form-input-data' onSubmit={HandelSubmit}>
     <div className='form-input-data'>
      <input type='text'  placeholder='Name 👤' value={name} onChange={(e)=>setName(e.target.value)} required/>
      <input type='number' placeholder='Age ⚠️' value={age} onChange={(e)=>setAge(e.target.value)} required />
      <input type='email' placeholder='Email 📧' value={email} onChange={(e)=>setEmail(e.target.value)}  required />
      <input type='password' placeholder='Password 🔓' value={pass} onChange={(e)=>setPassword(e.target.value)} required />
     </div>
     <button type='submit'>Create</button>
     </form>

     </div>
    
  </div>
)
}

export default FormData




// return (

//   <div className='form'>   
//      <div className='form-title'>
//      <div>
//      <Link to ='/ShowData'><button>Read Data</button></Link>
//      </div>
//      <h2>🤝 Fill Data 🤝</h2>
//      <form className='form-input' onSubmit={HandelSubmit}>
//      <div className='form-inputdata'>
//       <input  type='text'  placeholder='Name 👤' />
//       <input type='number' placeholder='Age ⚠️' />
//       <input type='email' placeholder='Email 📧' value={email} onChange={(e)=>setEmail(e.target.value)} required />
//       <input type='password' placeholder='Password 🔓' value={pass} onChange={(e)=>setPassword(e.target.value)} required />
//      </div>
//      <button type='submit'>Submit</button>
//      </form>

//      </div>
    
//   </div>
  
// )