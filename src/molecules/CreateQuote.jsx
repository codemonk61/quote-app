


/** @jsxImportSource @emotion/react */
import { useState, } from 'react'
import { css } from '@emotion/react';
import Text from '../atoms/Text';
import { useNavigate } from 'react-router-dom';
import { createQuote, login, uploadImage } from '../services/quote';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const styles = {
  wrapper: css`
     padding: 24px;
     width: 300px;
     background-color: white;
     border: 1px solid #7e8dfa;
     border-radius: 4px;
    `
}

const CreateQuote = () => {

    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const mediaData = await uploadImage(file);
        await createQuote(token, text, mediaData.mediaUrl);
        navigate('/quotes');
      } catch (error) {
        console.error('Failed to create quote:', error);
      }
    };
 

  return (
    <div css={styles.wrapper}>
      <Text
        text="Create Quote"
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
        value={text}
        height={"35px"}
        onChange={(e) => setText(e.target.value)}
      />
      <Text
        text="Upload Image:"
        fontSize="14px"
        alignment="left"
        marginTop={"16px"}
        marginBottom={"8px"}

      />
      <Input
        type="file"
        placeholder="Enter OTP"
        value={file}
        height={"35px"}
        onChange={(e) => setFile(e.target.value)}
      />
      <Button
        block={true}
        alignment="center"
        bgColor="#7e8dfa"
        innerText="Submit"
        onClick={handleSubmit}
        marginTop={"24px"}
      />

    </div>
  )
}

export default CreateQuote
