export interface ResourceCategory {
  id: string;
  name: string;
  icon: string;
  created_at: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string | null;
  category_id: string;
  file_path: string;
  file_type: string;
  file_size: number;
  created_at: string;
  updated_at: string;
}

export interface ResourceWithPreview extends Resource {
  previewUrl?: string;
}