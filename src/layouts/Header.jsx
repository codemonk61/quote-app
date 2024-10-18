/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Text from '../atoms/Text';

const styles = {
    headerWrapper: css`
      background : #7e8dfa;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 38px;
    `,
    userWrapper: css`
      display: flex;
      align-items: center;
      gap: 24px
    `,
    user: css`
      height: 30px;
      width:30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      border-radius: 50%;
      
    `
}

const Header = () => {
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
            <div css={styles.userWrapper}>
                <div css={styles.user}>
                    <Text
                        text="S"
                        fontSize="18px"
                        fontWeight="bold"
                        color={"#7e8dfa"}
                    />
                </div>
                <div >
                    <Text
                        text="Logout"
                        fontSize="18px"
                        fontWeight="bold"
                        color={"white"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header