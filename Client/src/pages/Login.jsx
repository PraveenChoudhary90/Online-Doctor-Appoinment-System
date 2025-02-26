import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handelSubmit =async(e)=>{
        e.preventDefault();
           let api=`${BASE_URL}/doctor/doctorLogin`;
           try {
            const response = await axios.post(api, {email:email, password:password})
            console.log(response.data);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("email", response.data.email);
            navigate("/dashboard")
            
           } catch (error) {
          alert(error.response.data.msg)
           }
    }

    return(
        <>
        <h1>Login page</h1>
         <Form style={{width:"50%" , margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Login;