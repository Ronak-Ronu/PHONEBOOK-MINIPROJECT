import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import image from '../components/notebook.png';
import image2 from '../components/add.svg';
import image3 from '../components/unknown.png';
export default function Navbar() {

    const [user,setUser]= useState([]);

    const getPhoneBookData = async ()=>{
        const response=await fetch('https://phonebookserver-24x7.onrender.com/db',{
            method:'GET',
        })
        const data=await response.json();
        setUser(data);
    }
    useEffect(()=>{
        getPhoneBookData();
    });

    return (
    <>
    <div className='topnav'>
    <span className='name1'> CSBS-PHONEBOOK <img src={image} className="image1" /></span>        
    </div>
    <h5 className='name1'>ALL CONTACTS</h5>
    <div className='container'>
        {user.map(usr=>(<div className='card' key={usr._id}>
            <span className='profile'> <img src={image3} className="image3" alt="" /></span>
            <span className='username'>{usr.name}</span>
            <span className='phone'>  {usr.phone}  </span>
            <span className='location'> {usr.location}</span>
            </div>))}
    </div>
    <footer>
    <Link to="/add-contact">
    <img src={image2} className="image2"  />
    </Link>
    </footer>
    </>

  )
}
