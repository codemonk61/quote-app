/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Text from '../atoms/Text';
import { useNavigate } from 'react-router-dom';

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
    signOut: css`
      cursor: pointer;
    `,
}

const Header = () => {
    const navigate = useNavigate()
  
    const isLogin = localStorage.getItem('token')
    
    const handleSignoutClick = () => {
        localStorage.removeItem('token')
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
            { isLogin && 
            <div css={styles.signOut} onClick={handleSignoutClick}>
                <Text
                    text="Sign out"
                    fontSize="18px"
                    fontWeight="bold"
                    color={"white"}
                />
            </div>
}
        </div>
    )
}

export default Header