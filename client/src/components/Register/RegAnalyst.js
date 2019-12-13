import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import service from '../../services/api';

export default function RegAnalyst() {
    const [ userData, setData ] = useState({});
    const [ isEditing, setEditing ] = useState(false);
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setData({
          ...userData,
          [name]: value
        });
      }
    const formSubmit = (e) => {
        e.preventDefault();
        service.registerUser({...userData, type: 'analyst', isEditing})
        .then(result => {
            if (result.data.success) {
                console.log('inserted')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    let { id } = useParams();
    console.log(id)
    useEffect(() => {
        if (id) {
            setEditing(true);
            service.viewUser(parseInt(id))
                .then((result => {
                    console.log(result.data[0])
                    const {username, id, fname, lname, mname} = result.data[0]
                    setData({...userData,username, id, fname, lname, mname});
                    console.log(userData)
                }))
                .catch((e) => {
                    console.log(e);
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        
        <div className="container">
            <form autoComplete="off" onSubmit={formSubmit} method="post" >
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="first">First Name</label>
                            <input type="text" required name="fname" defaultValue={userData.fname} onChange={handleInputChange} className="form-control" placeholder="" id="first" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="last">Middle Name</label>
                            <input required type="text" name="mname" defaultValue={userData.mname} onChange={handleInputChange} className="form-control" placeholder="" id="middle" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="last">Last Name</label>
                            <input type="text" name="lname" required defaultValue={userData.lname} onChange={handleInputChange} className="form-control" placeholder="" id="last" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" required defaultValue={userData.email} onChange={handleInputChange} className="form-control" id="email" placeholder="email" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" name="phone" required defaultValue={userData.phone} onChange={handleInputChange} className="form-control" id="phone" placeholder="phone" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" required defaultValue={userData.username} onChange={handleInputChange} className="form-control" id="username" placeholder="email" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" autoComplete="new-password" name="password" required={!isEditing} onChange={handleInputChange} className="form-control" id="password" placeholder="phone" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="Department">Department</label>
                            <select name="Department" defaultValue={userData.department} className="form-control" onChange={handleInputChange}>
                                <option value="">Select</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}
