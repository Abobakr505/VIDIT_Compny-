import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, Eye, Calendar, Award, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'جميع الأعمال', color: 'from-primary-500 to-secondary-500' },
    { id: 'commercial', name: 'إعلانات تجارية', color: 'from-primary-400 to-primary-600' },
    { id: 'social', name: 'محتوى اجتماعي', color: 'from-secondary-400 to-secondary-600' },
    { id: 'motion', name: 'موشن جرافيك', color: 'from-primary-500 to-accent-500' },
  ];

  const projects = [
    {
      id: 1,
      title: 'حملة إعلانية لشركة تقنية رائدة',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'إنتاج فيديو إعلاني احترافي يعرض منتجات الشركة التقنية بطريقة إبداعية ومؤثرة',
      views: '2.5M',
      duration: '2:30',
      date: '2024',
      client: 'شركة التقنية المتقدمة',
      awards: ['جائزة أفضل إعلان', 'جائزة الإبداع التقني']
    },
    {
      id: 2,
      title: 'سلسلة محتوى تفاعلي للسوشيال ميديا',
      category: 'social',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'مجموعة من الفيديوهات القصيرة والتفاعلية المصممة خصيصاً لمنصات التواصل الاجتماعي',
      views: '1.8M',
      duration: '0:45',
      date: '2024',
      client: 'علامة تجارية عالمية',
      awards: ['أفضل محتوى رقمي']
    },
    {
      id: 3,
      title: 'فيديو تعريفي مؤسسي شامل',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فيديو مؤسسي متكامل يعرض رؤية الشركة وخدماتها وإنجازاتها بطريقة احترافية',
      views: '950K',
      duration: '3:15',
      date: '2024',
      client: 'مجموعة الأعمال الكبرى',
      awards: ['أفضل فيديو مؤسسي']
    },
    {
      id: 4,
      title: 'موشن جرافيك تفسيري متقدم',
      category: 'motion',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'رسوم متحركة تفسيرية معقدة تشرح خدمة رقمية بطريقة مبسطة وجذابة',
      views: '1.2M',
      duration: '1:50',
      date: '2024',
      client: 'شركة الحلول الرقمية',
      awards: ['جائزة أفضل انيميشن']
    },
    {
      id: 5,
      title: 'حملة إعلانية متكاملة لمنتج استهلاكي',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'حملة إعلانية شاملة تتضمن فيديوهات متعددة لإطلاق منتج استهلاكي جديد',
      views: '3.1M',
      duration: '1:30',
      date: '2024',
      client: 'شركة المنتجات الاستهلاكية',
      awards: ['حملة العام', 'أفضل إبداع تسويقي']
    },
    {
      id: 6,
      title: 'محتوى تعليمي تفاعلي ومبتكر',
      category: 'social',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'سلسلة فيديوهات تعليمية تفاعلية بأسلوب مبسط وجذاب للجمهور المستهدف',
      views: '2.7M',
      duration: '4:20',
      date: '2024',
      client: 'منصة التعليم الإلكتروني',
      awards: ['أفضل محتوى تعليمي']
    },
    {
      id: 7,
      title: 'جلسة تصوير فوتوغرافي احترافية',
      category: 'photography',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'جلسة تصوير فوتوغرافي احترافية للمنتجات والبورتريه بأعلى جودة',
      views: '800K',
      duration: 'صور',
      date: '2024',
      client: 'علامة تجارية للأزياء',
      awards: ['أفضل تصوير منتجات']
    },
    {
      id: 8,
      title: 'موشن جرافيك ثلاثي الأبعاد',
      category: 'motion',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'رسوم متحركة ثلاثية الأبعاد معقدة لعرض منتج تقني بطريقة مبهرة',
      views: '1.5M',
      duration: '2:45',
      date: '2024',
      client: 'شركة التكنولوجيا المتطورة',
      awards: ['أفضل رسوم ثلاثية الأبعاد']
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary-500 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-arabic flex  justify-center flex-row-reverse">
               معرض
              <span className="block gradient-text  py-2 mr-2">أعمالنا </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 font-arabic">
              استكشف مجموعة من أفضل أعمالنا الإبداعية في مجال إنتاج المحتوى المرئي والتصوير الاحترافي
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900 sticky top-20 z-40 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-primary-500" />
            <span className="text-gray-700 dark:text-gray-300 font-medium font-arabic">تصفية الأعمال:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-full transition-all duration-300 font-medium shadow-lg font-arabic transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105`
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-on-scroll hover-lift group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
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

                  {/* Awards Badge */}
                  {project.awards.length > 0 && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Award className="w-3 h-3" />
                        <span>{project.awards.length}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 font-arabic">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 font-arabic">{project.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs text-gray-400 font-arabic">
                        <div className="flex items-center space-x-1 mb-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.date}</span>
                        </div>
                        <div>العميل: {project.client}</div>
                      </div>
                    </div>
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 font-arabic">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-arabic">
                      {project.client}
                    </div>
                    {project.awards.length > 0 && (
                      <div className="flex items-center space-x-1 text-xs text-yellow-600 dark:text-yellow-400">
                        <Award className="w-3 h-3" />
                        <span className="font-arabic">{project.awards.length} جوائز</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-on-scroll">
            <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-12 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-xl font-arabic text-lg">
              عرض المزيد من الأعمال
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;