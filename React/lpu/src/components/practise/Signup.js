import React from 'react'
import { useState } from 'react'
export default function Signup() {
    const [data, setData] = useState({
        name:'',
        password:''
    });
    const [signup , setSignup] = useState(true);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value
        }));
        localStorage.setItem('name' , data.name);
        localStorage.setItem('password', data.password);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (signup) {
          if (data.name && data.password) {
            localStorage.setItem('name', data.name);
            localStorage.setItem('password', data.password);
            alert('Signup Successful');
            // setData({name:'',password:''});
            setSignup(false);
          }

        } else {
          const storedName = localStorage.getItem('name');
          const storedPassword = localStorage.getItem('password');
          if (data.name === storedName && data.password === storedPassword) {
            setData({ name: 'Hello Logged in', password: '' });
            alert('Login Successful');
          } else {
            alert('Invalid Username or Password. Please try again.');
          }
        }
        // setData({name:'', password:''});
      };
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" value={data.name} onChange={handleChange} placeholder='Username'/><br></br>
            <input type="password" name='password' id='password' value={data.password} onChange={handleChange} placeholder='Password' /><br></br>
            <button type='submit'>{signup===true?<>Signup</>:<>Login</>}</button>
            
        </form>
    </div>
)
}