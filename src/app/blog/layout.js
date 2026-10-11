'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BlogLayout({ children }) {
  const pathname = usePathname();

  // Generate breadcrumb segments dynamically
  const segments = pathname.split('/').filter(Boolean);

  return (
    <section className="bg-dark text-gray-300 min-h-screen py-16 px-6 md:px-10">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-10">
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-green hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>

          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Blog & Publications
          </h1>
        </div>

        {/* Breadcrumbs */}
        <nav className="mt-4 text-sm text-gray-500">
          <ul className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-green">
                Home
              </Link>
            </li>
            {segments.map((segment, index) => {
              const href = '/' + segments.slice(0, index + 1).join('/');
              const isLast = index === segments.length - 1;

              return (
                <li key={href} className="flex items-center gap-2">
                  <span>/</span>
                  {isLast ? (
                    <span className="text-gray-400 capitalize">
                      {segment.replace(/-/g, ' ')}
                    </span>
                  ) : (
                    <Link href={href} className="hover:text-green capitalize">
                      {segment.replace(/-/g, ' ')}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* Main Blog Content */}
      <main className="max-w-5xl mx-auto space-y-8">{children}</main>
    </section>
  );
}
