import { supabase } from './supabase';
import type { Resource, ResourceCategory } from '../types/resources';

export const getResourceCategories = async (): Promise<ResourceCategory[]> => {
  const { data, error } = await supabase
    .from('resource_categories')
    .select('*')
    .order('created_at');

  if (error) throw error;
  return data || [];
};

export const getResourcesByCategory = async (categoryId: string): Promise<Resource[]> => {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .eq('category_id', categoryId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getResourceById = async (id: string): Promise<Resource | null> => {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const uploadResource = async (
  file: File,
  category: string,
  title: string,
  description?: string
): Promise<Resource> => {
  // Create a clean filename without special characters
  const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  
  // Create the storage path: category/filename
  const storagePath = `${category}/${cleanFileName}`;
  
  // Upload file to Supabase Storage
  const { error: uploadError } = await supabase.storage
    .from('panoramic-insight-startup-playbooks')  // Use the public bucket
    .upload(storagePath, file, {
      cacheControl: '3600',
      upsert: false // Don't overwrite existing files
    });

  if (uploadError) throw uploadError;

  // Create resource record in database
  const { data, error } = await supabase
    .from('resources')
    .insert([
      {
        title,
        description,
        category_id: category,
        file_path: storagePath,
        file_type: file.type,
        file_size: file.size
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getResourceFileUrl = async (filePath: string): Promise<string> => {
  if (!filePath) throw new Error('filePath is missing');

  try {
    // Get the public URL
    const { data } = supabase.storage
      .from('panoramic-insight-startup-playbooks')
      .getPublicUrl(filePath);

    if (!data?.publicUrl) {
      throw new Error('Public URL not available');
    }

    return data.publicUrl;
  } catch (error: any) {
    console.error('Error getting resource URL:', error);
    throw error;
  }
};

export const deleteResource = async (id: string): Promise<void> => {
  const resource = await getResourceById(id);
  if (!resource) throw new Error('Resource not found');

  // Delete file from storage
  const { error: storageError } = await supabase.storage
    .from('panoramic-insight-startup-playbooks')
    .remove([resource.file_path]);

  if (storageError) throw storageError;

  // Delete record from database
  const { error } = await supabase
    .from('resources')
    .delete()
    .eq('id', id);

  if (error) throw error;
};