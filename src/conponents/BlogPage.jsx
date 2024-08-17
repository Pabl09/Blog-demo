import React, { useState } from 'react';
import Categories from '../conponents/Categories'
import Pagination from '../conponents/Pagination'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', 'Technology', 'Health', 'Travel', 'Education'];

  const allPosts = [
    { id: 1, title: 'First Demo Post', category: 'Technology', author: 'Admin', date: 'August 17, 2024', content: 'This is a demo content for the first blog post.' },
    { id: 2, title: 'Second Demo Post', category: 'Health', author: 'Admin', date: 'August 17, 2024', content: 'This is a demo content for the second blog post.' },
    { id: 3, title: 'Third Demo Post', category: 'Travel', author: 'Admin', date: 'August 17, 2024', content: 'This is a demo content for the third blog post.' },
    // Añadir más publicaciones si es necesario
  ];

  const filteredPosts = selectedCategory === 'All' ? allPosts : allPosts.filter(post => post.category === selectedCategory);

  const postsPerPage = 2;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);


  return (
    <div className="container mx-auto my-8 px-4 pt-20 z-10 relative">
      {/*<h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Blog Posts</h1>*/}

      <Categories categories={categories} onSelectCategory={setSelectedCategory} />

      <div className="grid md:grid-cols-2 gap-8">
        {currentPosts.map((post) => (
          <div key={post.id} className="p-6 rounded-lg shadow-lg bg-white transition-shadow hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{post.title}</h2>
            <p className="text-gray-500 mb-4">By {post.author} on {post.date}</p>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Read More</button>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default BlogPage