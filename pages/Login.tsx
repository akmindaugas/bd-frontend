import React, {useState} from 'react'
import styles from "./LoginPage/Login.module.css"
import PageTemplate from '../components/PageTemplate/PageTemplate'
import axios from 'axios'
import {useRouter} from "next/router"



    const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isBadData, setBadData] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    const loginBody = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      setError(true);
      return;
    }

    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/users/login`,
        loginBody
      );

      if (response.status === 200) {
        setBadData(false);
        // cookie.set("jwt_token", response.data.jwt_token);
        router.push("/");
      }

      setLoading(false);

      console.log("response", response);
    } catch (err) {
      setBadData(true);
      console.log("err", err);
      setLoading(false);
    }
  };


  return (
    <PageTemplate>
      
   <div className={styles.container}>
       <h3>LoginPage    </h3>
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      {/* <Button isLoading={isLoading} onClick={onLogin} title="Login" /> */}

      {isError && (
        <div className={styles.error}>Please fill all the inputs</div>
      )}

      {isBadData && (
        <div className={styles.error}>Your provided data is bad</div>
      )}
    </div>
  
</PageTemplate>
 

  )
}

export default Login