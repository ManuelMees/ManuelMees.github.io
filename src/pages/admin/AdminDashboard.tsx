import { useState, useEffect } from 'react';
import ArticleList from '../../components/admin/ArticleList';
import { getArticles } from '../../utils/cms';
import type { Article } from '../../types/cms';

export default function AdminDashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const data = await getArticles();
      setArticles(data);
      setError(null);
    } catch (err) {
      console.error('Error loading articles:', err);
      setError('Failed to load articles');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  if (loading) {
    return <div className="text-white">Loading articles...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <ArticleList articles={articles} onDelete={loadArticles} />
    </div>
  );
}