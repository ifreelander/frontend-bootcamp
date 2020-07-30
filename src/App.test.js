import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('When app loads, user should first see the published page', async () => {
  render(<App />);
  const landingPage = await screen.findByRole('heading', { name: 'Published' });
  expect(landingPage).toBeInTheDocument();
});

test('User should be able to navigate from published to new review page', async () => {
  render(<App />);
  const newLink = await screen.findByRole('link', { name: 'New' });
  userEvent.click(newLink);
  const reviewPage = await screen.findByRole('heading', { name: 'New Review' });
  expect(reviewPage).toBeInTheDocument();
});

test('User should be able to navigate from new review page to published page', async () => {
  render(<App />);
  const newLink = await screen.findByText('New');
  userEvent.click(newLink);
  const homeLink = await screen.findByText('Home');
  userEvent.click(homeLink);
  expect(homeLink).toBeInTheDocument();
});

test('User should be able to publish a new review and redirected to home page', async () => {
  render(<App />);
  const newLink = await screen.findByText('New');
  userEvent.click(newLink);
  //const titleInput = await screen.findByLabelText('title');

  const titleInput = await screen.findByPlac('title');
  screen.debug();
  userEvent.type(titleInput, 'react testing library');
  const review = await screen.findByLabelText('review-body');
  userEvent.type(review, 'render method is part of the react testing library');
  const rating = await screen.findByText('Select a number between 1 and 5');
  userEvent.selectOptions('5');
  const button = await screen.findByRole('button', { name: 'Publish' });
  userEvent.click(button);
});

test('Publish button should be visible on the page', async () => {
  render(<App />);
  const newLink = await screen.findByRole('link', { name: 'New' });
  userEvent.click(newLink);
  const publishButton = await screen.findByRole('button', { name: 'Publish' });
  expect(publishButton).toBeInTheDocument();
});
