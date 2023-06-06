import {React,useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login =(props) => {
    let navigate = useNavigate();
    const [credential, setCredential] = useState({email:"",password:""})
    

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:7000/api/authrouter/login', {
            email: credential.email,
            password: credential.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = response.data;
        console.log(json);

        if (json) {
            localStorage.setItem('token', json.authtoken);
            navigate('/');
            props.showAlert("Login successfully","success")
            
        } else {
            props.showAlert("invalid cedentilas","danger")
        }
        // console.log(json.success);
    } catch (error) {
        console.error(error);
        props.showAlert("invalid cedentilas","danger")
    }
};

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch(`http://localhost:7000/api/authrouter/login`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",

    //         },
    //         body: JSON.stringify({email:credential.email,password:credential.password}),


    //     });
    //     const json = await response.json()
    //     console.log(json)
    //     if(json.success)
    //     {
    //         localStorage.setItem('token',json.authtoken)
    //         navigate.push("/")
    //     }
    //     else
    //     {
    //         alert("invalid cresential bro");
    //     }
    // }

    const onChange=(e)=>{
        
        setCredential({...credential,[e.target.name]:e.target.value})
    }
    return (
        <>
        <div className='container'>
            <form >
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control-plaintext"  value={credential.email} onChange={onChange} name='email' id="email"  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" name='password' value={credential.password} onChange={onChange} id="password" />
                    </div>
                    <button onClick={handleSubmit} type='submit' className='btn-btn-primary' >Login</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default Login