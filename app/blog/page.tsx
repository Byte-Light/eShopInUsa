import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Top 5 Gadgets to Watch in 2025",
      description: "Discover the latest gadgets that are set to revolutionize the tech industry in 2025.",
      date: "January 1, 2025",
      link: "/blog/top-5-gadgets-2025",
    },
    {
      id: 2,
      title: "The Future of AI in Everyday Tech",
      description: "Explore how AI is shaping the devices we use daily, from smart homes to wearables.",
      date: "December 20, 2024",
      link: "/blog/ai-future-tech",
    },
    {
      id: 3,
      title: "EshopInUSA’s Top Picks for Laptops",
      description: "Our curated list of the best laptops for work, gaming, and everything in between.",
      date: "November 15, 2024",
      link: "/blog/top-laptops",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <a
                href={post.link}
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
