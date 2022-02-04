import React,{useState,useEffect} from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Link,useNavigate } from 'react-router-dom';
import { signin,authenticate,isAuthenticated } from './index';
const SignIn = () => {
    const navigate =useNavigate()
    //const {pathname} = useLocation()
    const {user}=isAuthenticated()
    const [values,setValues]= useState({
        email:'',
        password:"",
        error:"",
        redirectToPage:false
    })

    useEffect(() =>{
        redirectUser()
    })

    
const{email,password,error,redirectToPage} = values

const handleChange=name=>event=>{
    setValues({...values,error:false,[name]:event.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault()
   // console.log("JJJJ");
    setValues({...values,error:false})
    signin({email,password})
    .then(data=>{
        if(data.error){
            setValues({...values, error:data.error})
        }
        else{
            authenticate(data,()=>{
                setValues({...values, redirectToPage:true})
            })
           
        }
    })
}

    // to show error msg
    const showError=()=>(
        <div className='alert alert-danger' style={{display:error?"":"none"}}>
            {error}

        </div>
    )

    const redirectUser=()=>{
        // if(redirectToPage){
        //     return navigate('/admin/dashboard')
      //  }
        if(redirectToPage){
            if(user && user.role ===1){
                return navigate('/admin/dashboard')
            }

           // return navigate('/')
        }
        if(isAuthenticated() && user.role ===0){
            return navigate('/user/profile')
        }
    }

  return (
      <>
      <Navbar/>


      <div className="container" style={{marginBottom: "200px"}}>
        <div className="d-flex justify-content-center">
            <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
                <form>
                    {showError()}
                    {/* {redirectUser()} */}
                   
                    <div className="col-12 mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" 
                        placeholder="example@gmail.com" 
                        value={email}
                        onChange={handleChange('email')}
                        className="form-control"/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        name="pass"
                        value={password}
                        onChange={handleChange('password')}
                         id="password" placeholder="***********" className="form-control"/>
                    </div>
                    
                    <div className="col-4 mb-3">
                        <button className="btn btn-primary form-control" onClick={handleSubmit}>Signin</button>
                    </div>
                    <div className="col-4 offset-md-8">
                       <Link to="/forget/password" className="text-decoration-none text-secondary">Forget Password?</Link>
                    </div>

                </form>
            </div>
        </div>
    </div>


      <Footer/>
      </>
  );
};

export default SignIn;
