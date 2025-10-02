import { format, isValid, parseISO } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { Article } from '../types/cms';

interface ArticleViewProps {
  article: Article;
}

export default function ArticleView({ article }: ArticleViewProps) {
  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return isValid(date) 
      ? format(date, 'MMMM d, yyyy')
      : 'Date unavailable';
  };

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">{article.title}</h1>
      
      <div className="flex items-center space-x-4 text-gray-400 mb-8">
        <span>{article.author}</span>
        <span>•</span>
        <span>{formatDate(article.date)}</span>
      </div>

      <div className="mb-8">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm mr-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="text-gray-300">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </article>
  );
}