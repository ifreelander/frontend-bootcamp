import React, { useState, useEffect } from 'react';
import Reviews from './Reviews';
import { useHistory } from 'react-router-dom';

const NewReview = () => {
  const [title, setTitle] = useState('Frontend boot camp');
  const [body, setBody] = useState('Everything is awesome');
  const [rating, setRating] = useState();
  const [review, setReview] = useState('');
  const [responseMessage, setResponseMessage] = useState([]);

  console.log('responseMessage state:', responseMessage);

  const history = useHistory();

  const ratingOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ];

  const addReview = async (rvw) => {
    const postRequest = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rvw),
    };

    try {
      const response = await fetch('http://localhost:5000/reviews', postRequest);
      const addedReview = await response.json();

      // console.log(addedReview[0].message);
      console.log('addedReview', addedReview);
      if (response.status === 400) {
        setResponseMessage(addedReview[0].message);
      }

      if (response.status === 200) {
        history.push('/');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className="body">
      <h2 className="h2">New Review</h2>

      <h3>{responseMessage}</h3>

      <form className="form">
        <label htmlFor="title">Title</label>
        <br></br>
        <input
          id="title"
          type="text"
          className="titleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        <label>Review</label>
        <br></br>
        <input
          className="reviewInput"
          id="review-body"
          label="review-body"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      <br></br>
      <div className="divRating">
        <label className="label" htmlFor="rating">
          Rating
        </label>
        <select
          id="rating"
          value={rating ?? ''}
          onChange={(e) => setRating(parseInt(e.target.value))}
        >
          <option>Select a number between 1 and 5</option>
          {ratingOptions.map((opt) => (
            <option value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <br></br>
      <button
        className="button"
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          const newReview = { title, body, rating, published: false };
          const addedReview = await addReview(newReview);
        }}
      >
        Publish
      </button>
    </div>
  );
};

export default NewReview;
