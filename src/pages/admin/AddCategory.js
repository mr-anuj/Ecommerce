import React,{useState} from 'react';
import AdminSidebar from './AdminSidebar';
import { isAuthenticated } from '../auth';
import { addcategory } from './apiIndex';

const AddCategory = () => {

    const [category_name, setCategory] = useState('')

    const [error,setError]=useState(false)
    const [success,setsuccess]=useState(false)

    //destucture token and user from localstorage

    const {user, token} = isAuthenticated()
    const handleChange=(e)=>{
        setError('')
        setCategory(e.target.value.toLowerCase())
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setError('')
        setsuccess(false)
        //make request to add category
        addcategory(token,{category_name})
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else {
                setError("")
                setsuccess(true)
                setCategory("")
            }
        })
    }

    // to show error msg
    const showError=()=>(
        <div className='alert alert-danger' style={{display:error?"":"none"}}>
            {error}

        </div>
    )

        // to show success msg
        const showSuccess=()=>(
            <div className='alert alert-info' style={{display:success?"":"none"}}>
                {/* {success} */}
                New category added
    
            </div>
        )

    
  return ( 
  < >
  <div className='container-fluid'>
      <div className='row'>
          <div className='col-md-3'>
              <AdminSidebar/>
          </div>
          <div className='col-md-6'>
              <form className='shadow-lg p-3'>
                  <h2 className='text-muted'>Add Category Form</h2>
                  {showError()}
                  {showSuccess()}
                  <div className='mb-3'>
                      <label htmlFor='category'>Category Name</label>
                      <input type="text" id="category" className="form-control"
                      onChange={handleChange}
                      value={category_name}
                      
                      />
                  </div>

                  <div className='mb-3'>
                      <button className='btn btn-primary' onClick={handleSubmit}>Add Categorty</button>
                  </div>
              </form>
          </div>

      </div>
  </div>
  
  
  
  </ >
  );
};

export default AddCategory;
