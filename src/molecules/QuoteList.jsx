// src/components/QuoteList.js
import React, { useState, useEffect } from 'react';
import { getQuotes } from '../services/quote';

import { dateConverter } from '../utils/helper';
/** @jsxImportSource @emotion/react */ // Add this to enable the `css` prop.
import { css } from '@emotion/react';


const styles = {
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
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  pointer-events: none; /* Prevent interaction with the overlay */
`,

  containerHover: css`
  &:hover > div {
    opacity: 1; /* Show overlay on hover */
  }
`,

}


const QuoteList = () => {

  const [quotes, setQuotes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const token = localStorage.getItem('token');

  const fetchQuotes = async () => {
    try {
      const data = await getQuotes(token, 20, offset);
      if (data.length === 0) setHasMore(false);
      setQuotes((prev) => [...prev, ...data]);
    } catch (error) {
      console.error('Failed to fetch quotes:', error);
    }
  };

  console.log(setOffset)

  useEffect(() => {
    fetchQuotes();
  }, []);

  console.log(hasMore, offset)
  return (
    <>
      {quotes.map((quote, index) => (
        <div key={index} css={styles.imageWrapper}>
          <div css={[styles.containerStyle, styles.containerHover]}>
            <img src={quote.mediaUrl} alt="Quote" css={styles.imageStyle} />
            <div  css={styles.overlayStyle}>{dateConverter(quote.createdAt)}</div>
          </div>
          <div>{quote.username}</div>
          <div>{quote.text}</div>
        </div>
      ))}
      {/* {hasMore && <button onClick={() => setOffset(offset + 20)}>Load More</button>} */}
    </>
  );
};

export default QuoteList;
