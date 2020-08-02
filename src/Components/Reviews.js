import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('http://localhost:5000/reviews');
      const reviewsList = await response.json();
      console.log('reviewsList....', reviewsList);
      setReviewsList(reviewsList);
    };

    fetchReviews();
  }, []);
  if (!reviewsList) {
    return 'loading...';
  }

  return (
    <div className="body">
      <h2>Published</h2>
      {reviewsList.map((item) => (
        <table>
          <tr>
            <li key={item.id} className="list">
              <td className="td"> {item.title} </td>
              <td>{item.rating}</td>
            </li>
          </tr>
          {/* {' '}
          <li key={item.id} className="list">
            {item.title} {item.rating}
          </li> */}
        </table>
      ))}
      {/* <h3 className="h3">Drafts</h3>
      {reviews.map(review => (
        <li key={review.id}>{review.title}</li>
      ))} */}
    </div>
  );
};

export default Reviews;
