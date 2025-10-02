import { Article, ArticleFormData } from '../types/cms';
import { supabase } from './supabase';

export const getArticles = async (): Promise<Article[]> => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching articles:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

export const getArticlesByCategory = async (category: Article['category']): Promise<Article[]> => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('category', category)
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching articles by category:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching articles by category:', error);
    return [];
  }
};

export const getArticleById = async (id: string): Promise<Article | null> => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching article by id:', error);
      return null;
    }

    // Ensure date is in ISO format
    if (data) {
      data.date = new Date(data.date).toISOString();
    }

    return data;
  } catch (error) {
    console.error('Error fetching article by id:', error);
    return null;
  }
};

export const saveArticle = async (formData: ArticleFormData): Promise<Article> => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error('User not authenticated');

  const article = {
    ...formData,
    tags: formData.tags.split(',').map(tag => tag.trim()),
    user_id: userData.user.id,
    date: new Date().toISOString()
  };

  const { data, error } = await supabase
    .from('articles')
    .insert([article])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateArticle = async (id: string, formData: ArticleFormData): Promise<Article> => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error('User not authenticated');

  const article = {
    ...formData,
    tags: formData.tags.split(',').map(tag => tag.trim()),
    updated_at: new Date().toISOString()
  };

  const { data, error } = await supabase
    .from('articles')
    .update(article)
    .eq('id', id)
    .eq('user_id', userData.user.id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteArticle = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id);

  if (error) throw error;
};