import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BlogPostList from './BlogPostList';

test('renders blog post list', async () => {
  render(
    <MemoryRouter>
      <BlogPostList />
    </MemoryRouter>
  );
  expect(screen.getByText(/Blog Posts/i)).toBeInTheDocument();
  // Mock data could be tested here
});
