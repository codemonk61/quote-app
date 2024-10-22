
/** @jsxImportSource @emotion/react */
import { useEffect, useState, useContext} from 'react'
import { css } from '@emotion/react';
import Text from '../atoms/Text';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/quote';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { UserContext } from '../AuthContext';

const styles = {
  wrapper: css`
     padding: 24px;
     width: 300px;
     background-color: white;
     border: 1px solid #7e8dfa;
     border-radius: 4px;
    `
}

const SignIn = () => {

  const context = useContext(UserContext)
  const [authentication, setAuthentication] = useState({username: "", otp: "1234"})
  const {user, setUser} = context;

  const navigate = useNavigate();

  const handleLoginClick = async (e) => {

    try {
      const response = await login(authentication.username, authentication.otp);
      localStorage.setItem('token', response.token);
      setUser({...user, username: authentication.username})
      navigate('/quotepage');
    } catch (error) {
      console.error('Login failed:', error);
   
    }
  };

  const isDisable = !(authentication.otp.length && authentication.username.length)

  useEffect(()=>{
    setUser({username: "", otp: "1234"})
  }, [])

  return (
    <div css={styles.wrapper}>
      <Text
        text="Sign In"
        fontSize="30px"
        fontWeight="bold"
        alignment="left"
        marginBottom={"12px"}
      />
      <Text
        text="Enter Username:"
        fontSize="14px"
        alignment="left"
        marginTop={"16px"}
        marginBottom={"8px"}
      />
      <Input
        type="text"
        placeholder="Enter username"
        value={authentication.username}
        height={"35px"}
        onChange={(e) => setAuthentication({...authentication, username: e.target.value})}
      />
      <Text
        text="Enter OTP:"
        fontSize="14px"
        alignment="left"
        marginTop={"16px"}
        marginBottom={"8px"}

      />
      <Input
        type="text"
        placeholder="Enter OTP"
        value={authentication.otp}
        height={"35px"}
        onChange={(e) => setAuthentication({...authentication, otp: e.target.value})}
      />
      <Button
        block={true}
        alignment="center"
        bgColor="#7e8dfa"
        innerText="Login"
        onClick={handleLoginClick}
        marginTop={"24px"}
        disabled={isDisable}
      />

    </div>
  )
}

export default SignIn