
import SignIn from '../molecules/SignIn';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const SignInPage = () => {

  return (
    <div css={css`height: 80vh;display: flex; justify-content: center;align-items: center`}>
      <SignIn />
    </div>
  );
};

export default SignInPage;
