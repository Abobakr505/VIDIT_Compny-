import React, { useLayoutEffect, useRef } from 'react';
import { Users, Award, Target, Heart, TrendingUp, Shield, CheckCircle, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(contentRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Image animation
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Values animation
      gsap.from(valuesRef.current?.children || [], {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Stats counter animation
      gsap.from(statsRef.current?.children || [], {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        immediateRender: false,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'الإبداع والابتكار',
      description: 'نسعى دائماً لتقديم حلول إبداعية ومبتكرة تتجاوز توقعات عملائنا وتحقق أهدافهم',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'الجودة العالية',
      description: 'نلتزم بأعلى معايير الجودة في جميع مراحل الإنتاج والتنفيذ لضمان التميز',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'العمل الجماعي',
      description: 'فريق متخصص يعمل بتناغم وتعاون لضمان تحقيق أفضل النتائج الممكنة',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Heart,
      title: 'الشغف والالتزام',
      description: 'نحب ما نعمل ونلتزم بتقديم أفضل ما لدينا في كل مشروع نتولاه',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'النمو المستمر',
      description: 'نواكب أحدث التقنيات والاتجاهات في عالم الإنتاج المرئي والتطوير المستمر',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Shield,
      title: 'الثقة والأمان',
      description: 'نحافظ على سرية مشاريع عملائنا ونضمن حقوق الملكية الفكرية بأعلى المعايير',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'مشروع مكتمل', icon: '🎬' },
    { number: '200+', label: 'عميل راضٍ', icon: '😊' },
    { number: '15+', label: 'جائزة دولية', icon: '🏆' },
    { number: '5+', label: 'سنوات خبرة', icon: '⭐' },
    { number: '20+', label: 'خبير متخصص', icon: '👥' },
    { number: '98%', label: 'معدل الرضا', icon: '💯' }
  ];

  const achievements = [
    'حائزون على جائزة أفضل وكالة إنتاج في المنطقة',
    'شراكات استراتيجية مع أكبر الشركات العالمية',
    'فريق من أفضل المبدعين والمتخصصين في المجال',
    'استخدام أحدث التقنيات والمعدات العالمية'
  ];

  return (
    <section ref={sectionRef} className="pt-24  bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Content */}
          <div ref={contentRef}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full px-6 py-3 mb-6">
              <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300 font-arabic">من نحن</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
              فريق من
              <span className="block gradient-text  py-2">المبدعين</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-arabic">
              نحن فريق من المبدعين والمتخصصين في مجال إنتاج المحتوى المرئي والصوتي. 
              نؤمن بقوة الصورة والصوت في إيصال الرسائل وتحقيق التأثير المطلوب بأعلى معايير الجودة.
            </p>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-arabic">
              منذ تأسيسنا، نجحنا في تنفيذ أكثر من 500 مشروع لعملاء من مختلف القطاعات، 
              وحققنا سمعة طيبة في السوق بفضل التزامنا بالجودة والإبداع والمواعيد المحددة.
            </p>

            {/* Achievements list */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-arabic">{achievement}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-arabic">
                تعرف على فريقنا
              </button>
              <button className="glass-effect text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 shadow-lg font-arabic">
                قصة نجاحنا
              </button>
            </div>
          </div>

          {/* Enhanced Image */}
          <div ref={imageRef} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/team.jpeg"
                alt="فريق العمل"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-3xl blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Floating stats */}
            <div className="absolute top-8 left-8 glass-effect rounded-2xl p-4 shadow-xl">
              <div className="text-2xl font-bold gradient-text font-arabic">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-arabic">مشروع</div>
            </div>
            
            <div className="absolute bottom-8 right-8 glass-effect rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-arabic">تقييم العملاء</div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-lg border border-gray-200 dark:border-gray-700/50">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2 font-arabic">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium font-arabic text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Values */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
              قيمنا و
              <span className="gradient-text">مبادئنا</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-arabic">
              المبادئ والقيم التي نؤمن بها ونطبقها في جميع أعمالنا ومشاريعنا
            </p>
          </div>
          
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700/50 shadow-lg hover:shadow-2xl"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-arabic">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-arabic">{value.description}</p>
                
                {/* Progress bar */}
                <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-6 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${value.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;