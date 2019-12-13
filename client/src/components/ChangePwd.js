import React, { useState } from 'react'
import services from '../services/api';

export default function ChangePwd() {
    const [ oldPwd, setOld ] = useState();
    const [ newPwd, setnewPwd] = useState();
    const [ cPwd, setCnewPwd] = useState();
    
    const pwdChange = (e)=> {
        e.preventDefault();
        if(newPwd === cPwd){
            services.changepwd(oldPwd,newPwd)
            .then(val=> {
                console.log(val);
                document.getElementById('pwdChangeForm').reset();
            })
            .catch(err=>{

            })
        }else{
            document.getElementById('pwdChangeForm').reset();
            alert('Password doesnt match');
        }
    }

    return (
        <form onSubmit={pwdChange} id="pwdChangeForm">
        <div >
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="first">Current Pasword</label>
                        <input type="password" required name="oldpwd" onChange={(e)=>setOld(e.target.value)} className="form-control" placeholder="" id="first" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="first">New Pasword</label>
                        <input type="password" required name="newpwd" onChange={(e)=>setnewPwd(e.target.value)} className="form-control" placeholder="" id="first" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="first">Confirm Pasword</label>
                        <input type="password" required name="cpwd" onChange={(e)=>setCnewPwd(e.target.value)} className="form-control" placeholder="" id="first" />
                    </div>
                </div>
            </div>
            <button className="btn btn-primary">Change Password</button>
        </div>
        </form>
    )
}
