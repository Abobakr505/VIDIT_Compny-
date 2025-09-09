import React from 'react';
import { Video, Edit, Camera, Palette, Music, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'إنتاج الفيديو',
      description: 'إنتاج فيديوهات احترافية من الفكرة إلى المنتج النهائي بأعلى جودة وأحدث التقنيات.',
      features: ['تصوير احترافي', 'إضاءة متقدمة', 'معدات عالية الجودة'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Edit,
      title: 'المونتاج والتحرير',
      description: 'خدمات مونتاج متقدمة تشمل القص والتركيب والمؤثرات البصرية والصوتية.',
      features: ['مونتاج احترافي', 'مؤثرات بصرية', 'تصحيح الألوان'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'الموشن جرافيك',
      description: 'تصميم وإنتاج الرسوم المتحركة والموشن جرافيك لإضافة لمسة إبداعية مميزة.',
      features: ['رسوم متحركة', 'تصميم جرافيكي', 'انيميشن 2D/3D'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Camera,
      title: 'التصوير الفوتوغرافي',
      description: 'خدمات التصوير الفوتوغرافي الاحترافي للمنتجات والفعاليات والبورتريه.',
      features: ['تصوير المنتجات', 'تصوير الفعاليات', 'البورتريه الاحترافي'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Music,
      title: 'الهندسة الصوتية',
      description: 'تسجيل ومعالجة وتحسين الصوت لضمان جودة صوتية عالية في جميع المشاريع.',
      features: ['تسجيل صوتي', 'معالجة الصوت', 'التعليق الصوتي'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'المحتوى التفاعلي',
      description: 'إنتاج محتوى تفاعلي ومبتكر يناسب منصات التواصل الاجتماعي المختلفة.',
      features: ['محتوى السوشيال ميديا', 'فيديوهات تفاعلية', 'حملات رقمية'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-arabic">
            نقدم مجموعة شاملة من الخدمات الإبداعية في مجال إنتاج المحتوى المرئي والصوتي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-white dark:hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700/50 shadow-lg hover:shadow-2xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-arabic">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-arabic">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300 font-arabic">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;