export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  category: 'blog' | 'case-study' | 'documentation';
  tags: string[];
}

export interface ArticleFormData {
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: 'blog' | 'case-study' | 'documentation';
  tags: string;
}