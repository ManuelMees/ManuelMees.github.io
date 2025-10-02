import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, isValid, parseISO } from 'date-fns';
import { getArticlesByCategory } from '../utils/cms';
import { Article } from '../types/cms';

export default function Documentation() {
  const [docs, setDocs] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        setLoading(true);
        const articles = await getArticlesByCategory('documentation');
        setDocs(articles);
      } catch (err) {
        console.error('Error fetching documentation:', err);
        setError('Failed to load documentation');
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, []);

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return isValid(date) 
      ? format(date, 'MMMM d, yyyy')
      : 'Date unavailable';
  };

  if (loading) {
    return (
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">Loading documentation...</div>
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Documentation</h1>
          
          <div className="space-y-6">
            {docs.map((doc) => (
              <div key={doc.id} className="bg-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-3">{doc.title}</h2>
                <p className="text-gray-300 mb-4">{doc.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    Last updated: {formatDate(doc.date)}
                  </span>
                  <Link
                    to={`/documentation/${doc.id}`}
                    className="inline-flex items-center text-[#0ea4c4] hover:text-[#0ea4c4]/80 transition-colors"
                  >
                    Read Documentation →
                  </Link>
                </div>
              </div>
            ))}

            {docs.length === 0 && (
              <div className="text-center text-gray-400 py-8">
                No documentation available yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}