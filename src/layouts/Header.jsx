/** @jsxImportSource @emotion/react */
import {useContext} from 'react'
import { css } from '@emotion/react';
import Text from '../atoms/Text';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../AuthContext';
import Logout from '../atoms/icons/Logout';

const styles = {
    headerWrapper: css`
      background : #7e8dfa;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 48px;
      @media (max-width: 1232px){
        padding: 12px 30px;
     }

    @media (max-width: 960px){
         padding: 12px 12px;
     }

    @media (max-width: 680px){
         padding: 12px 12px;
     }

    `,
    user: css`
     height: 30px;
     width: 30px;
     border-radius: 50%;
     display: inline-block;
     background: white;
     font-weight: 600;
     text-align:center;
     line-height: 30px;
     text-transform: uppercase
    `,
    signOut: css`
    display: flex;
    align-items: center;
    gap:12px;
      cursor: pointer;
    `,
}

const Header = () => {

    const context = useContext(UserContext)
    const navigate = useNavigate()

    const handleSignoutClick = () => {
        context.setUser({username: "", otp: "1234"})
        navigate('/')
    }

    return (
        <div css={styles.headerWrapper}>
            <div css={styles.logoWrapper}>
                <Text
                    text="QUOTE"
                    fontSize="18px"
                    fontWeight="bold"
                    color={"white"}
                />
            </div>
            { context.user.username && 
            <div css={styles.signOut} onClick={handleSignoutClick}>
                <span css={styles.user}>
                    {context.user.username.charAt(0)}
                </span>
              
              <Logout/>
            </div>
}
        </div>
    )
}

export default Header