import { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Pencil, Trash2 } from 'lucide-react';
import { Article } from '../../types/cms';
import { deleteArticle } from '../../utils/cms';

interface ArticleListProps {
  articles: Article[];
  onDelete: () => void;
}

export default function ArticleList({ articles, onDelete }: ArticleListProps) {
  const [filter, setFilter] = useState<Article['category'] | 'all'>('all');

  const filteredArticles = filter === 'all' 
    ? articles 
    : articles.filter(article => article.category === filter);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        await deleteArticle(id);
        onDelete();
      } catch (error) {
        console.error('Error deleting article:', error);
        alert('Failed to delete article');
      }
    }
  };

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md ${
              filter === 'all' ? 'bg-[#0ea4c4] text-white' : 'bg-gray-800 text-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('blog')}
            className={`px-4 py-2 rounded-md ${
              filter === 'blog' ? 'bg-[#0ea4c4] text-white' : 'bg-gray-800 text-gray-300'
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => setFilter('case-study')}
            className={`px-4 py-2 rounded-md ${
              filter === 'case-study' ? 'bg-[#0ea4c4] text-white' : 'bg-gray-800 text-gray-300'
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setFilter('documentation')}
            className={`px-4 py-2 rounded-md ${
              filter === 'documentation' ? 'bg-[#0ea4c4] text-white' : 'bg-gray-800 text-gray-300'
            }`}
          >
            Documentation
          </button>
        </div>
        <Link
          to="/admin/new"
          className="px-4 py-2 bg-[#0ea4c4] text-white rounded-md hover:bg-[#0ea4c4]/80"
        >
          New Article
        </Link>
      </div>

      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredArticles.map((article) => (
              <tr key={article.id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                  {article.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                  {article.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                  {article.author}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                  {format(new Date(article.date), 'MMM d, yyyy')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                  <div className="flex space-x-4">
                    <Link
                      to={`/admin/edit/${article.id}`}
                      className="text-[#0ea4c4] hover:text-[#0ea4c4]/80"
                    >
                      <Pencil className="h-5 w-5" />
                    </Link>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}