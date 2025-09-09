import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Video, Edit, Palette, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states to ensure elements start hidden
      gsap.set(titleRef.current, { y: 50, opacity: 0 });
      gsap.set(servicesRef.current?.children || [], { y: 80, opacity: 0 });

      // Title animation - using .to instead of .from for better React compatibility
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Services cards animation - using .to with stagger
      gsap.to(servicesRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.in",
        scrollTrigger: {
          trigger: servicesRef.current,
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

  const services = [
    {
      icon: Video,
      title: 'إنتاج الفيديو',
      description: 'إنتاج فيديوهات احترافية من الفكرة إلى المنتج النهائي بأعلى جودة وأحدث التقنيات المتطورة',
      features: ['تصوير بدقة 4K/8K', 'إضاءة احترافية', 'معدات عالمية'],
      price: 'يبدأ من 5,000 ريال',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20'
    },
    {
      icon: Edit,
      title: 'المونتاج والتحرير',
      description: 'خدمات مونتاج متقدمة تشمل القص والتركيب والمؤثرات البصرية والصوتية الاحترافية',
      features: ['مونتاج متقدم', 'مؤثرات بصرية', 'تصحيح ألوان'],
      price: 'يبدأ من 2,000 ريال',
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20'
    },
    {
      icon: Palette,
      title: 'الموشن جرافيك',
      description: 'تصميم وإنتاج الرسوم المتحركة والموشن جرافيك لإضافة لمسة إبداعية مميزة ومؤثرة',
      features: ['رسوم متحركة 2D/3D', 'تصميم إبداعي', 'انيميشن متقدم'],
      price: 'يبدأ من 3,000 ريال',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300 font-arabic">خدماتنا المتميزة</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
            نحول أفكارك إلى
            <span className="block gradient-text  py-4">واقع مرئي</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-arabic">
            نقدم مجموعة شاملة من الخدمات الإبداعية في مجال إنتاج المحتوى المرئي بأعلى معايير الجودة العالمية
          </p>
        </div>

        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.bgColor} p-8 border border-gray-200 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-arabic">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-arabic">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300 font-arabic">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold gradient-text font-arabic">{service.price}</div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-arabic group-hover:scale-105`}>
                  <span>اطلب الخدمة</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/services"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-12 py-5 rounded-2xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25 font-arabic text-lg"
          >
            <span>عرض جميع الخدمات</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;