import React, { useState } from 'react';
import { Play, ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع الأعمال', color: 'from-blue-500 to-purple-500' },
    { id: 'commercial', name: 'إعلانات تجارية', color: 'from-green-500 to-teal-500' },
    { id: 'social', name: 'محتوى اجتماعي', color: 'from-pink-500 to-rose-500' },
    { id: 'corporate', name: 'فيديوهات مؤسسية', color: 'from-orange-500 to-red-500' },
    { id: 'motion', name: 'موشن جرافيك', color: 'from-purple-500 to-indigo-500' }
  ];

  const projects = [
    {
      id: 1,
      title: 'حملة إعلانية لمنتج تقني',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'إنتاج فيديو إعلاني احترافي لشركة تقنية رائدة',
      views: '2.5M',
      duration: '2:30'
    },
    {
      id: 2,
      title: 'محتوى تفاعلي للسوشيال ميديا',
      category: 'social',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'سلسلة فيديوهات قصيرة لمنصات التواصل الاجتماعي',
      views: '1.8M',
      duration: '0:45'
    },
    {
      id: 3,
      title: 'فيديو تعريفي لشركة',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فيديو مؤسسي يعرض رؤية وخدمات الشركة',
      views: '950K',
      duration: '3:15'
    },
    {
      id: 4,
      title: 'موشن جرافيك تفسيري',
      category: 'motion',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'رسوم متحركة تفسيرية لخدمة رقمية',
      views: '1.2M',
      duration: '1:50'
    },
    {
      id: 5,
      title: 'إعلان منتج استهلاكي',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'حملة إعلانية شاملة لمنتج استهلاكي جديد',
      views: '3.1M',
      duration: '1:30'
    },
    {
      id: 6,
      title: 'محتوى تعليمي تفاعلي',
      category: 'social',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'سلسلة فيديوهات تعليمية بأسلوب مبسط وجذاب',
      views: '2.7M',
      duration: '4:20'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
            معرض أعمالنا
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 font-arabic">
            استكشف مجموعة من أفضل أعمالنا في مجال إنتاج المحتوى المرئي والإبداعي
          </p>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-full transition-all duration-300 font-medium shadow-lg font-arabic ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white transform scale-105 shadow-xl`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 hover:transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Video Info Overlay */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.duration}
                  </span>
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{project.views}</span>
                  </span>
                </div>
              </div>
              
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-arabic">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 font-arabic">{project.description}</p>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg">
                      <Play className="w-4 h-4" />
                      <span className="font-arabic">مشاهدة</span>
                    </button>
                    <button className="flex items-center space-x-2 glass-effect text-white px-4 py-3 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-arabic">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-arabic">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-10 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-xl font-arabic">
            عرض المزيد من الأعمال
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;