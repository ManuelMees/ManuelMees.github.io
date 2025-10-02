import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Article } from '../types/cms';
import { getArticlesByCategory } from '../utils/cms';

export default function Blog() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const articles = await getArticlesByCategory('blog');
        setPosts(articles);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">Loading posts...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">{t('resources.blog')}</h1>
        
        {posts.length === 0 ? (
          <div className="text-center text-gray-400">No blog posts available.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-3">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-[#0ea4c4] hover:text-[#0ea4c4]/80 transition-colors"
                    >
                      {t('resources.readMore')} →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}