import React, { useState, useEffect } from 'react';
import Reviews from './Reviews';

const NewReview = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState();
  const [review, setReview] = useState('');

  const ratingOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ];

  const addReview = async rvw => {
    const postRequest = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rvw),
    };

    try {
      const response = await fetch('http://localhost:5000/reviews', postRequest);
      const addedReview = await response.json();
      console.log('respone', response, response.status);
      return addedReview;
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <body className="body">
      <h2>New Review</h2>

      <form>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={e => setTitle(e.target.value)} />
        <label>Review</label>
        <input id="review-body" value={body} onChange={e => setBody(e.target.value)} />
      </form>

      <label htmlFor="rating">Rating</label>
      <select id="rating" value={rating ?? ''} onChange={e => setRating(parseInt(e.target.value))}>
        <option>Select a number</option>
        {ratingOptions.map(opt => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <button
        type="submit"
        onClick={async e => {
          e.preventDefault();
          const newReview = { title, body, rating, published: false };
          const addedReview = await addReview(newReview);
        }}
      >
        Save as draft
      </button>
      <button>Publish</button>
    </body>
  );
};

export default NewReview;
