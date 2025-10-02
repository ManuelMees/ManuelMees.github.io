import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById } from '../utils/cms';
import ArticleView from '../components/ArticleView';
import { ArrowLeft } from 'lucide-react';
import { Article } from '../types/cms';

export default function DocumentationDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await getArticleById(id);
        setArticle(data);
        if (!data) {
          setError('Documentation not found');
        }
      } catch (err) {
        console.error('Error fetching documentation:', err);
        setError('Failed to load documentation');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-white">Loading documentation...</div>
        </div>
      </section>
    );
  }

  if (error || !article) {
    return (
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Documentation not found</h1>
          <button
            onClick={() => navigate('/documentation')}
            className="text-[#0ea4c4] hover:text-[#0ea4c4]/80 inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/documentation')}
          className="flex items-center text-[#0ea4c4] hover:text-[#0ea4c4]/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Documentation
        </button>
        <ArticleView article={article} />
      </div>
    </section>
  );
}