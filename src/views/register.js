import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import userAPI from '../api/userAPI';
import './register.css'

const Register = () => {

    const navigate = useHistory();

    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const register = async () => {
        const registerData = { username, password, email, firstName, lastName, phone }

        await userAPI.register(registerData)
            .then(res => navigate.push('/login'));
    }

    return (
    <div className="materialContainer">
        <div className="box">

        <div className="title">
            <p>Registration</p>
        </div>

        <div className="main">
                <input onChange={(e) => setUsername(e.target.value)} className="username " type="text" align="center" placeholder="Username"/>
                <input onChange={(e) => setEmail(e.target.value)} className="username " type="text" align="center" placeholder="Email address"/>
                <input onChange={(e) => setFirstName(e.target.value)} className="username " type="text" align="center" placeholder="First name"/>
                <input onChange={(e) => setLastName(e.target.value)} className="username " type="text" align="center" placeholder="Last name"/>
                <input onChange={(e) => setPhone(e.target.value)} className="username" type="text" align="center" placeholder="Phone" />    
                <input onChange={(e) => setPassword(e.target.value)} className="username" type="password" align="center" placeholder="Password" />       
                <input onChange={(e) => setConfirm(e.target.value)} className="username" type="password" align="center" placeholder="Confirm Password" />
                    <div style={{ display: "flex", justifyContent: "center" }} ><button onClick={register} className="submit">Register</button>   </div>
                    
        </div>
    </div>
    </div>
    )
}

export default Register;