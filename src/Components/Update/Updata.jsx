import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Updata = () => {
    const navigate = useNavigate();
    const [id,setId] = useState('');
    const [name,  setName] = useState('');
    const [age , setAge] = useState('');
    const [email, setEmail] = useState('');
    const [pass , setPass] = useState('');
    const getLocalstoragedata =() =>{
     setId(localStorage.getItem("id"))
     setName(localStorage.getItem("name"));
     setAge(localStorage.getItem("age"));
     setEmail(localStorage.getItem("email"));
     setPass(localStorage.getItem("pass"));

    }

    useEffect(()=>{
        getLocalstoragedata();
    },[])

    const Handelsubmiited = async(e) =>{
        e.preventDefault();
        const API = 'https://6621bd0727fcd16fa6c7d141.mockapi.io/image';
    await axios.put(`${API}/${id}`,{
        id,
        name,
        age,
        email,
        pass
    }).then(()=>{
        navigate('/ShowData')
    })
        
    }
    return (

        <div className='form-data'>
           <div className='form-title-data'>
           <h2> Updata Data ! </h2>
           <form className='form-input-data' onSubmit={Handelsubmiited}>
           <div className='form-input-data'>
            <input type='text'  placeholder='Name 👤' value={name} onChange={(e)=>setName(e.target.value)} required/>
            <input type='number' placeholder='Age ⚠️' value={age} onChange={(e)=>setAge(e.target.value)} required />
            <input type='email' placeholder='Email 📧' value={email} onChange={(e)=>setEmail(e.target.value)}  required />
            <input type='password' placeholder='Password 🔓' value={pass} onChange={(e)=>setPass(e.target.value)} required />
           </div>
           <button type='submit'>Updata</button>
           </form>
    
           </div>
          
        </div>
      )
}

export default Updata
