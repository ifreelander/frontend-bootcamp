import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

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
    <body className="body">
      <h3>Published</h3>
      {reviewsList.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
      {/* <h3 className="h3">Drafts</h3>
      {reviews.map(review => (
        <li key={review.id}>{review.title}</li>
      ))} */}
    </body>
  );
};

export default Reviews;
