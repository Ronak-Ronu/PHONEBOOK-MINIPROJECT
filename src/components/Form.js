import React, { useState } from 'react'
import './Form.css';
export default function Form() {
    const [form,setForm] = useState({});
    // const [user,setUser]= useState([]);
    const HandleForm = (e) =>{
        // console.log(e.target.value,e.target.name);
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const HandleSubmit = async (e)=>{
        e.preventDefault();
        const response=await fetch('https://phonebookserver-24x7.onrender.com/db',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json();
        console.log(data);
    }
   
    // const getPhoneBookData = async ()=>{
    //     const response=await fetch('https://phonebookserver-24x7.onrender.com/db',{
    //         method:'GET',
    //     })
    //     const data=await response.json();
    //     setUser(data);
    // }
    // useEffect(()=>{
    //     getPhoneBookData();
    // });
  return (
    <>
    <p>Add contact</p>
<div className="login-box">
    <form onSubmit={HandleSubmit}>
        <div className="user-box">
        <input type="text" name='Name' onChange={HandleForm}/>
        <label >Name</label>
        </div>
    <div className="user-box" >
        <input type="text" name='PhoneNumber' onChange={HandleForm}/>
        <label >PhoneNumber</label>
    </div>
    <div className="user-box" >

        <input type="text" name='Location' onChange={HandleForm}/>
        <label >Location</label>
    </div >
    <div className="button">

        <input type="submit" />
    </div>
    </form>
</div>
    {/* <p>{JSON.stringify(form)}</p> */}
    </>
  )
}
