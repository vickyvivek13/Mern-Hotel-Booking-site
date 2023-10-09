import React , {useState, useEffect } from 'react'
import axios from "axios";

function Registerscreen() {
    const [name,setname]= useState('')
    const [email,setemail]= useState('')
    const [password,setpassword]= useState('')
    const [cpasword,setcpassword]= useState('')

    

        async function register(){
            if(password==cpasword){
                const user = {
                    name,
                    email,
                    password,
                    cpasword
                }
                try {
                    
                    const result = await axios.post('/api/users/register', user).data
                    console.log(alert(" Registeration successfull :-) "))
                    window.location.href = "/login"

                    setname("")
                    setemail("")
                    setpassword("")
                    setcpassword("")
                    
                    
                } catch (error) {
                    
                    console.log(error)
                   
                }
            }
            else{
                console.log(alert('Password and Confirm Password, both need to be same !!!!'))
            }
        }

  return (
        <div>
            <div className='row justify-content-center mt-5'>

                <div className='col-md-5 mt-5'>

                    <div className="bs">

                        <h2>Registeration </h2>
                        <input type="text" className='form-control' placeholder='Name' 
                            value={name} onChange={(e)=>{setname(e.target.value)}}/>
                        <input type="text" className='form-control' placeholder='Email-ID'
                            value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                        <input type="text" className='form-control' placeholder='Password'
                            value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        <input type="text" className='form-control' placeholder='Confirm Password'
                            value={cpasword} onChange={(e)=>{setcpassword(e.target.value)}}/>
                            <button className='btn btn-primary mt-3' onClick={register}>Register</button>

                    </div>

                </div>

            </div>
        
        </div>
  )
}

export default Registerscreen