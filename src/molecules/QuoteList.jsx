// src/components/QuoteList.js
import React, { useState, useEffect } from 'react';
import { getQuotes } from '../services/quote';

import { dateConverter } from '../utils/helper';
/** @jsxImportSource @emotion/react */ // Add this to enable the `css` prop.
import { css } from '@emotion/react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Loader from '../atoms/Loader';


const styles = {
  wrapper: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:12px;
     @media (max-width: 1232px){
        padding: 0px 12px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
     }

    @media (max-width: 960px){
         padding: 0px 12px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
     }

    @media (max-width: 680px){
         padding: 0px 12px;
        display: grid;
        grid-template-columns:  1fr;
     }
    
   `,
  containerStyle: css`
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: 10px; /* Optional: Rounded corners */
`,

  imageStyle: css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,

  overlayStyle: css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none; /* Prevent interaction with the overlay */
`,

  containerHover: css`
  &:hover > div {
    opacity: 1; /* Show overlay on hover */
  }
`,
  paginationWrapper: css`
   display: flex;
   gap: 20px;
   align-items: center;
   justify-content: flex-end;
   padding: 0px 12px;
   @media (max-width: 1232px){
        padding: 0px 12px;
     }

    @media (max-width: 960px){
         padding: 0px 12px;
     }

    @media (max-width: 680px){
         padding: 0px 12px;
     }

 `
}


const QuoteList = () => {

  const [quotes, setQuotes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
  const limit = 20;
  const token = localStorage.getItem('token');

  const fetchQuotes = async () => {
    setIsLoading(true)
    try {
      const data = await getQuotes(token, limit, offset);
      setQuotes((prev) => [...prev, ...data]);
      setIsLoading(false)
    } catch (error) {
      console.error('Failed to fetch quotes:', error);
      setIsLoading(false)
    }
  };

  const handleNext = () => {
    if (offset + limit < quotes.length) {
      setOffset(offset + limit);
    }
  };

  // Handle Previous Button Click
  const handlePrev = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [limit, offset]);

  if(isLoading) {
    return <Loader/>
  }


  return (
    <>
      <div css={styles.wrapper}>
        {quotes.slice(offset, offset + 20).map((quote, index) => (
          <div key={index} css={styles.imageWrapper}>
            <div css={[styles.containerStyle, styles.containerHover]}>
              <img src={quote.mediaUrl} alt="Quote" css={styles.imageStyle} />
              <div css={styles.overlayStyle}>
                <Text
                  text={`Created At`}
                  fontSize="14px"
                  fontWeight="bold"
                  color="white"
                  marginLeft='12px'
                  marginTop='12px'
                />
                <Text
                  text={`${dateConverter(quote.createdAt)}`}
                  fontSize="14px"
                  fontWeight="bold"
                  color="white"
                  marginRight='12px'
                  marginTop='12px'
                />
              </div>
            </div>
            <Text
              text={`${quote.username}`}
              fontSize="14px"
              fontWeight="bold"
              marginBottom='8px'
              marginTop='12px'
            />
            <Text
              text={`${quote.text}`}
              fontSize="14px"
              marginBottom='12px'
            />
          </div>
        ))}
      </div>
      <div css={styles.paginationWrapper}>
        <Button
          block={false}
          bgColor="#7e8dfa"
          innerText="< Prev"
          onClick={handlePrev}
          disabled={offset === 0}
          marginBottom='24px'
          marginTop='24px'
        />
        <Button
          block={false}
          bgColor="#7e8dfa"
          innerText="Next >"
          onClick={handleNext} disabled={offset + limit >= quotes.length}
          marginBottom='24px'
          marginTop='24px'
        />
      </div>
    </>
  );
};

export default QuoteList;
