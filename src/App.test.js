import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

xtest('When app loads, user should first see the published page', async () => {
  render(<App />);
  const landingPage = await screen.findByRole('heading', { name: 'Published' });
  expect(landingPage).toBeInTheDocument();
});

xtest('User should be able to navigate from published to new review page', async () => {
  render(<App />);
  const newLink = await screen.findByRole('link', { name: 'New' });
  userEvent.click(newLink);
  const reviewPage = await screen.findByRole('heading', { name: 'New Review' });
  expect(reviewPage).toBeInTheDocument();
});

xtest('User should be able to navigate from new review page to published page', async () => {
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

  const input = await screen.findByRole('textbox', { name: 'Title' });
  userEvent.type(input, 'this should work!');

  const review = await screen.findByRole('textbox', { name: 'Review' });
  userEvent.type(review, 'render method is part of the react testing library');

  const rating = await screen.findByText('Select a number between 1 and 5');
  // warning ..cannot log ...forget to wait fot async
  // why select option does not work?
  //userEvent.selectOptions(rating, { target: { value: '5' } });
  userEvent.click(rating, { target: { value: '5' } });
  screen.debug();

  const button = await screen.findByRole('button', { name: 'Publish' });
  userEvent.click(button);

  // const landingPage = await screen.findByRole('heading', { name: 'Published' });
  //expect(landingPage).toBeInTheDocument();
});

xtest('Publish button should be visible on the page', async () => {
  render(<App />);
  const newLink = await screen.findByRole('link', { name: 'New' });
  userEvent.click(newLink);
  const publishButton = await screen.findByRole('button', { name: 'Publish' });
  expect(publishButton).toBeInTheDocument();
});
