import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { getResourceById, getResourceFileUrl } from '../../utils/resources';
import type { ResourceWithPreview } from '../../types/resources';

export default function ResourceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [resource, setResource] = useState<ResourceWithPreview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadResource = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await getResourceById(id);
        if (!data) {
          setError('Resource not found in database');
          return;
        }

        try {
          const publicUrl = await getResourceFileUrl(data.file_path);
          setResource({ ...data, previewUrl: publicUrl });
        } catch (fileError: any) {
          // Set resource data but mark file as unavailable
          setResource({ ...data, previewUrl: null });
          setError(`File unavailable: ${fileError.message}`);
        }
      } catch (err: any) {
        console.error('Error loading resource:', err);
        setError(`Failed to load resource: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadResource();
  }, [id]);

  if (loading) {
    return (
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-white">Loading resource...</div>
        </div>
      </section>
    );
  }

  if (!resource) {
    return (
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-red-500">{error}</div>
          <button
            onClick={() => navigate('/startups/resources')}
            className="mt-4 text-[#0ea4c4] hover:text-[#0ea4c4]/80 inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate('/startups/resources')}
          className="mb-8 text-[#0ea4c4] hover:text-[#0ea4c4]/80 inline-flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Resources
        </button>

        <div className="bg-gray-800 rounded-xl p-8">
          <h1 className="text-3xl font-bold text-white mb-4">{resource.title}</h1>
          {resource.description && (
            <p className="text-gray-300 mb-8">{resource.description}</p>
          )}

          {error && (
            <div className="mb-8 p-4 bg-red-900/50 border border-red-500 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <div className="text-red-500">{error}</div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">File Information</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <span className="font-medium">Type:</span> {resource.file_type}
              </div>
              <div>
                <span className="font-medium">Size:</span>{' '}
                {(resource.file_size / 1024 / 1024).toFixed(2)} MB
              </div>
            </div>
          </div>

          {/* Preview section based on file type */}
          {!error && resource.previewUrl && resource.file_type.includes('pdf') && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Preview</h2>
              <iframe
                src={resource.previewUrl}
                className="w-full h-[600px] rounded-lg"
                title={resource.title}
              />
            </div>
          )}

          {resource.previewUrl && (
            <a
              href={resource.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#0ea4c4] text-white rounded-md hover:bg-[#0ea4c4]/80 transition-colors"
            >
              View Resource
            </a>
          )}
        </div>
      </div>
    </section>
  );
}