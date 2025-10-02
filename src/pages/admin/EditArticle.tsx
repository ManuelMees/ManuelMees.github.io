import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleForm from '../../components/admin/ArticleForm';
import { getArticleById } from '../../utils/cms';
import type { ArticleFormData } from '../../types/cms';

export default function EditArticle() {
  const { id } = useParams<{ id: string }>();
  const [initialData, setInitialData] = useState<ArticleFormData | undefined>();

  useEffect(() => {
    if (id) {
      const article = getArticleById(id);
      if (article) {
        setInitialData({
          ...article,
          tags: article.tags.join(', '),
        });
      }
    }
  }, [id]);

  if (!initialData) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-8">Edit Article</h2>
      <ArticleForm initialData={initialData} articleId={id} />
    </div>
  );
}