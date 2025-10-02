import { BookOpen, FileText, Video, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { getResourceCategories, getResourcesByCategory } from '../../utils/resources';
import type { ResourceCategory, Resource } from '../../types/resources';

export default function StartupResources() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<ResourceCategory[]>([]);
  const [resources, setResources] = useState<Record<string, Resource[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResources = async () => {
      try {
        const categoriesData = await getResourceCategories();
        setCategories(categoriesData);

        const resourcesData: Record<string, Resource[]> = {};
        for (const category of categoriesData) {
          const categoryResources = await getResourcesByCategory(category.id);
          resourcesData[category.id] = categoryResources;
        }
        setResources(resourcesData);
      } catch (error) {
        console.error('Error loading resources:', error);
      } finally {
        setLoading(false);
      }
    };

    loadResources();
  }, []);

  const getIconComponent = (iconName: string) => {
    const icons = {
      'book-open': BookOpen,
      'file-text': FileText,
      'video': Video,
      'download': Download
    };
    return icons[iconName as keyof typeof icons] || BookOpen;
  };

  if (loading) {
    return (
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white text-center">Loading resources...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">{t('startups.resources')}</h1>
          <p className="text-xl text-gray-300">
            Essential tools and resources to help you build and scale your startup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const IconComponent = getIconComponent(category.icon);
            const categoryResources = resources[category.id] || [];

            return (
              <div key={category.id} className="bg-gray-800 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <IconComponent className="h-8 w-8 text-[#0ea4c4] mr-3" />
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                <ul className="space-y-3">
                  {categoryResources.map((resource) => (
                    <li key={resource.id}>
                      <Link
                        to={`/startups/resources/${resource.id}`}
                        className="flex items-center text-gray-300 hover:text-[#0ea4c4] transition-colors"
                      >
                        <span className="mr-2">•</span>
                        {resource.title}
                      </Link>
                    </li>
                  ))}
                  {categoryResources.length === 0 && (
                    <li className="text-gray-500 italic">No resources available</li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-3 bg-[#0ea4c4] text-white rounded-md hover:bg-[#0ea4c4]/80 transition-colors"
          >
            {t('nav.getStarted')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}