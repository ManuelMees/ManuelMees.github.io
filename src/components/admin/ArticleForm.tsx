import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArticleFormData } from '../../types/cms';
import { saveArticle, updateArticle } from '../../utils/cms';

interface ArticleFormProps {
  initialData?: ArticleFormData;
  articleId?: string;
  onSubmit?: () => void;
}

export default function ArticleForm({ initialData, articleId, onSubmit }: ArticleFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ArticleFormData>(initialData || {
    title: '',
    content: '',
    excerpt: '',
    author: '',
    category: 'blog',
    tags: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (articleId) {
      updateArticle(articleId, formData);
    } else {
      saveArticle(formData);
    }

    if (onSubmit) {
      onSubmit();
    }
    navigate('/admin');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300">
          Excerpt
        </label>
        <textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          rows={3}
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-300">
          Content (Markdown)
        </label>
        <textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          rows={10}
          required
        />
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-300">
          Author
        </label>
        <input
          type="text"
          id="author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-300">
          Category
        </label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as ArticleFormData['category'] })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          required
        >
          <option value="blog">Blog</option>
          <option value="case-study">Case Study</option>
          <option value="documentation">Documentation</option>
        </select>
      </div>

      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-300">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          id="tags"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          placeholder="tag1, tag2, tag3"
          required
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => navigate('/admin')}
          className="px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:border-[#0ea4c4] hover:text-[#0ea4c4]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-[#0ea4c4] text-white rounded-md hover:bg-[#0ea4c4]/80"
        >
          {articleId ? 'Update' : 'Create'} Article
        </button>
      </div>
    </form>
  );
}