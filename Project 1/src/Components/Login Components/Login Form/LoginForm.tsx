import React, { useState } from "react";
import styles from "./LoginForm.module.scss"
import { http } from "../../../Services/Http.service";
import { ROLE_PAGE_MAP, setFormDataFn,modifyStore} from "../../../Utils/Utility";

const LoginForm = ({onNavigate,displayPopUp}:any) => {

  const [formData,setFormData]=useState({
    username:'',
    password:''
  })

  const handleChange=setFormDataFn(formData,setFormData)

  const onSubmit=async(event:any)=>{
    event.preventDefault();
  
    try{
        const response=await http("post","auth/login",formData);
        console.log(response)
        const {roleId,token}=response.data;
        const page=ROLE_PAGE_MAP[roleId];
        const message=response.data.message;

        setFormData({
          username:"",
          password:""
        })
        modifyStore("token",token) 
        displayPopUp("success",message)   
        onNavigate(page)
        // onNavigate("Admin")
             
      }
      catch(error)
      {
        
        displayPopUp("error","Please Enter valid credentials")
      }  
  }

  return (
  
      <section className={styles["login-container"]}>
        <header>
          <h2>Login</h2>
        </header>
        <form>
          <div>
            <input
              type="text"
              placeholder="Enter the username"
              className={styles["login-input"]}
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Enter the password"
              className={styles["login-input"]}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="button" className={styles["login-submit-btn"]} onClick={onSubmit}>Submit</button>
          </div>
        </form>
        
      </section>

  );
};

export default LoginForm;
