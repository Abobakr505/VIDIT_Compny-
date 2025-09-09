import React, { useEffect } from 'react';
import { Video, Edit, Camera, Palette, Music, Zap, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Video,
      title: 'إنتاج الفيديو',
      description: 'إنتاج فيديوهات احترافية من الفكرة إلى المنتج النهائي بأعلى جودة وأحدث التقنيات.',
      features: ['تصوير احترافي بدقة 4K', 'إضاءة متقدمة ومعدات حديثة', 'فريق إنتاج متخصص', 'مونتاج وتحرير احترافي'],
      price: 'يبدأ من 5,000 ريال',
      duration: '7-14 يوم',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Edit,
      title: 'المونتاج والتحرير',
      description: 'خدمات مونتاج متقدمة تشمل القص والتركيب والمؤثرات البصرية والصوتية.',
      features: ['مونتاج احترافي متقدم', 'مؤثرات بصرية مذهلة', 'تصحيح الألوان', 'معالجة الصوت'],
      price: 'يبدأ من 2,000 ريال',
      duration: '3-7 أيام',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Palette,
      title: 'الموشن جرافيك',
      description: 'تصميم وإنتاج الرسوم المتحركة والموشن جرافيك لإضافة لمسة إبداعية مميزة.',
      features: ['رسوم متحركة 2D/3D', 'تصميم جرافيكي إبداعي', 'انيميشن متقدم', 'مؤثرات بصرية'],
      price: 'يبدأ من 3,000 ريال',
      duration: '5-10 أيام',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Camera,
      title: 'التصوير الفوتوغرافي',
      description: 'خدمات التصوير الفوتوغرافي الاحترافي للمنتجات والفعاليات والبورتريه.',
      features: ['تصوير المنتجات عالي الجودة', 'تصوير الفعاليات والمؤتمرات', 'البورتريه الاحترافي', 'تحرير ومعالجة الصور'],
      price: 'يبدأ من 1,500 ريال',
      duration: '1-3 أيام',
      color: 'from-primary-400 to-secondary-500'
    },
    {
      icon: Music,
      title: 'الهندسة الصوتية',
      description: 'تسجيل ومعالجة وتحسين الصوت لضمان جودة صوتية عالية في جميع المشاريع.',
      features: ['تسجيل صوتي احترافي', 'معالجة وتحسين الصوت', 'التعليق الصوتي', 'الموسيقى والمؤثرات'],
      price: 'يبدأ من 1,000 ريال',
      duration: '2-5 أيام',
      color: 'from-secondary-400 to-primary-500'
    },
    {
      icon: Zap,
      title: 'المحتوى التفاعلي',
      description: 'إنتاج محتوى تفاعلي ومبتكر يناسب منصات التواصل الاجتماعي المختلفة.',
      features: ['محتوى السوشيال ميديا', 'فيديوهات تفاعلية قصيرة', 'حملات رقمية متكاملة', 'استراتيجية المحتوى'],
      price: 'يبدأ من 2,500 ريال',
      duration: '3-7 أيام',
      color: 'from-accent-400 to-primary-600'
    }
  ];

  const packages = [
    {
      name: 'الباقة الأساسية',
      price: '3,000',
      duration: 'شهرياً',
      features: [
        '10 فيديوهات قصيرة',
        'مونتاج أساسي',
        'تصميم جرافيكي بسيط',
        'دعم فني أساسي'
      ],
      popular: false
    },
    {
      name: 'الباقة المتقدمة',
      price: '6,000',
      duration: 'شهرياً',
      features: [
        '20 فيديو متنوع',
        'مونتاج متقدم',
        'موشن جرافيك',
        'تصوير فوتوغرافي',
        'دعم فني متقدم',
        'استشارة إبداعية'
      ],
      popular: true
    },
    {
      name: 'الباقة الاحترافية',
      price: '12,000',
      duration: 'شهرياً',
      features: [
        'محتوى غير محدود',
        'إنتاج فيديو كامل',
        'فريق مخصص',
        'استراتيجية محتوى',
        'تقارير تحليلية',
        'دعم على مدار الساعة'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-arabic flex  justify-center flex-row-reverse">
              خدماتنا
              <span className="block gradient-text pb-2  mr-2">الإبداعية</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 font-arabic">
              نقدم مجموعة شاملة من الخدمات المتخصصة في إنتاج المحتوى المرئي والصوتي بأعلى معايير الجودة والإبداع
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll hover-lift group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
                  <div>
                    <div className="text-2xl font-bold gradient-text font-arabic">{service.price}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-arabic">مدة التنفيذ: {service.duration}</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-arabic`}>
                  <span>اطلب الخدمة</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
              باقاتنا الشهرية
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-arabic">
              اختر الباقة التي تناسب احتياجاتك واحصل على محتوى مرئي احترافي بشكل منتظم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`animate-on-scroll relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:scale-105 ${
                  pkg.popular 
                    ? 'border-primary-500 shadow-primary-500/20' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-bold font-arabic">
                      الأكثر شعبية
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-arabic">{pkg.name}</h3>
                  <div className="text-4xl font-bold gradient-text mb-2 font-arabic">{pkg.price} ريال</div>
                  <div className="text-gray-500 dark:text-gray-400 font-arabic">{pkg.duration}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300 font-arabic">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl transition-all duration-300 font-arabic ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}>
                  اختر هذه الباقة
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;