import React ,{useState}from "react";
import axios from "axios";
import { useNavigate,Link  } from "react-router-dom";
import styles from "./signin.module.css";
 import Navbar from "../navbar/Navbar"

function SignIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();

    if ( !formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await axios.post("http://localhost:8085/api/v1/customer/login", {
        email: formData.email,
        password: formData.password
      });
      //alert("Registation Successfully");
      navigate("/foodList");
    } catch (err) {
      console.log(err);
    }
    console.log(formData);
  }




  return (
    <div>
      <Navbar/>
    <div className={styles.mainbody}>
      <form>
        <div className={styles.header}>
        <h1>Sign In</h1>
        </div>
      <div className={styles.inputbox}>
        <div className={styles.email}>
          <input
            className={styles.emailbox}
            type="email"
            id="uname"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>
        
        <div className="password">
          <input
            className={styles.pswbox}
            type="password"
            id="pname"
            placeholder="password"
            name="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          />
        </div>
      </div>
       

        <button  className={styles.getin} type="submit" onClick={handleSubmit}>
          Login
        </button>

        <br />
        <div className={styles.last}>
          Don't have an account{" "}
          <Link className={styles.switch} to="/signup">
            Create
          </Link>
        </div>
        <br />
      </form>
    </div>
    </div>
  );
}

export default SignIn;
