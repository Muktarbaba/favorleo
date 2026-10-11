'use client';

import Image from 'next/image';
import Link from 'next/link';
import blog1 from '../assets/coverb.jpg';
import blog2 from '../assets/blog3.jpg';
import blog3 from '../assets/dreams.jpg';

const blogs = [
  {
    title: '2022: An Art Journey',
    excerpt: 'Just like lighting up candles in a dark room, I find myself here in this very moment. Bringing light back into the darkness with charcoal and mind-altering sorcery of dark art.',
    image: blog1,
    link: '/blog/afro-surrealism',
    date: 'June 10, 2025',
  },
  {
    title: 'Dark Surrealism: A Solo Exhibition',
    excerpt: 'Dark Surrealism, a subgenre of surrealism, challenges conventional perceptions by exploring themes of mortality, fear, and the unconscious mind. ',
    image: blog2,
    link: '/blog/creative-process',
    date: 'June 10, 2025',
  },
  {
    title: 'Dreams in Analog',
    excerpt: 'Dreams in analog is a growing collection of charcoal drawings which are inspired by Christopher Nolans "Inception." ',
    image: blog3,
    link: '/blog/exhibitions',
    date: 'June 10, 2025',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-dark px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-green mb-12">
          Latest <span className="text-white">Blog Posts</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <Link href={blog.link} key={index}>
              <div className="bg-lightd rounded-xl overflow-hidden shadow-lg group cursor-pointer transition transform hover:-translate-y-1">
                <div className="relative w-full h-70">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-left">
                
                  <h3 className="text-xl font-semibold text-neutral-500 mb-2 group-hover:text-green transition">
                    {blog.title}
                  </h3>
                  <p className="text-neutral-500 text-sm mb-2">{blog.excerpt}</p>
                  <p className="text-xs text-gray-400 mb-2">{blog.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
