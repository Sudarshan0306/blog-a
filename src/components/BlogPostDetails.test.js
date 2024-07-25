import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlogPostDetails from './BlogPostDetails';

const mockPost = {
  title: 'Test Title',
  publishedAt: '2022-07-25T10:00:00Z',
  content: 'Test Content',
  urlToImage: 'https://example.com/image.jpg',
};

test('renders blog post details', async () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/post/0', state: { post: mockPost } }]}>
      <Routes>
        <Route path="/post/:id" element={<BlogPostDetails />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Content/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Test Title/i)).toBeInTheDocument();
});
