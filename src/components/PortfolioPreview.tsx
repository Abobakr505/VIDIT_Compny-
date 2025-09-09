import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Eye, ArrowRight, Award, Calendar, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PortfolioPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states to ensure elements start hidden
      gsap.set(titleRef.current, { y: 50, opacity: 0 });
      gsap.set(projectsRef.current?.children || [], { y: 100, opacity: 0 });

      // Title animation - using .to instead of .from for better React compatibility
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Projects animation - using .to with stagger
      gsap.to(projectsRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

    }, sectionRef);

    // Refresh ScrollTrigger after a short delay
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'حملة إعلانية لشركة تقنية رائدة',
      category: 'إعلان تجاري',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'إنتاج فيديو إعلاني احترافي يعرض منتجات الشركة التقنية بطريقة إبداعية ومؤثرة',
      views: '2.5M',
      duration: '2:30',
      date: '2024',
      awards: ['جائزة أفضل إعلان', 'جائزة الإبداع التقني'],
      client: 'شركة التقنية المتقدمة'
    },
    {
      id: 2,
      title: 'سلسلة محتوى تفاعلي للسوشيال ميديا',
      category: 'محتوى رقمي',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'مجموعة من الفيديوهات القصيرة والتفاعلية المصممة خصيصاً لمنصات التواصل الاجتماعي',
      views: '1.8M',
      duration: '0:45',
      date: '2024',
      awards: ['أفضل محتوى رقمي'],
      client: 'علامة تجارية عالمية'
    },
    {
      id: 3,
      title: 'فيديو تعريفي مؤسسي شامل',
      category: 'فيديو مؤسسي',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فيديو مؤسسي متكامل يعرض رؤية الشركة وخدماتها وإنجازاتها بطريقة احترافية',
      views: '950K',
      duration: '3:15',
      date: '2024',
      awards: ['أفضل فيديو مؤسسي'],
      client: 'مجموعة الأعمال الكبرى'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-40 right-40 w-64 h-64 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-48 h-48 bg-secondary-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300 font-arabic">أعمالنا المميزة</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
            مشاريع حققت
            <span className="block gradient-text  py-8 ">نجاحاً باهراً</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-arabic">
            نماذج من مشاريعنا الناجحة التي حققت نتائج مذهلة لعملائنا وحازت على جوائز دولية
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Enhanced overlay info */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.duration}
                  </span>
                  <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{project.views}</span>
                  </span>
                </div>

                {/* Awards badge */}
                {project.awards.length > 0 && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>{project.awards.length}</span>
                    </div>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium font-arabic">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Enhanced hover overlay */}
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

        <div className="text-center">
          <Link 
            to="/portfolio"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-12 py-5 rounded-2xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25 font-arabic text-lg"
          >
            <span>عرض جميع الأعمال</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;