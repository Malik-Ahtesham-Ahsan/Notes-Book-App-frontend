import {React,useState} from 'react'
import {useNavigate} from 'react-router-dom';
const Signup = (props) => {
    let navigate = useNavigate();
    const [credential, setCredential] = useState({name:"",email:"",password:"",cpassword:""})
    const handleSubmit = async (e) => {
        e.preventDefault();
       const {name,email,password}=credential;
        const response = await fetch(`http://localhost:7000/api/authrouter/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({name,email,password}),


        });
        const json = await response.json()
        console.log(json)
        if(json)
        {
            localStorage.setItem('token',json.authtoken)
            navigate("/")
            props.showAlert("account created successfully","success")
        }
        else
        {
            props.showAlert("invalid cedentilas","danger")
        }
    }
    const onChange=(e)=>{
        
        setCredential({...credential,[e.target.name]:e.target.value})
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" readonly className="form-control-plaintext"  onChange={onChange} name='name' id="name" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" readonly className="form-control-plaintext"  onChange={onChange} name='email' id="email" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="Password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" name='password'  onChange={onChange} id="password" minlength={5} required />
                        </div>
                        
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="cPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" name='cpassword'  onChange={onChange} id="cpassword" minlength={5} required />
                        </div>
                        
                    </div>
                    <button type='submit' className='btn-btn-primary' >Signup</button>
                </form>
            </div>
        </>
    )
}

export default Signup