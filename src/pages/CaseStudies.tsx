import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, isValid, parseISO } from 'date-fns';
import { getArticlesByCategory } from '../utils/cms';
import { Article } from '../types/cms';

export default function CaseStudies() {
  const [cases, setCases] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        setLoading(true);
        const articles = await getArticlesByCategory('case-study');
        setCases(articles);
      } catch (err) {
        console.error('Error fetching case studies:', err);
        setError('Failed to load case studies');
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
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
          <div className="text-center text-white">Loading case studies...</div>
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
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Case Studies</h1>
        
        {cases.length === 0 ? (
          <div className="text-center text-gray-400">No case studies available.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((case_) => (
              <div key={case_.id} className="bg-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">{case_.title}</h2>
                <p className="text-gray-300 mb-6">{case_.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    {formatDate(case_.date)}
                  </span>
                  <Link
                    to={`/case-studies/${case_.id}`}
                    className="inline-flex items-center text-[#0ea4c4] hover:text-[#0ea4c4]/80 transition-colors"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}