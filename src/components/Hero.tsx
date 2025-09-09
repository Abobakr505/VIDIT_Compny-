import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Play, ArrowRight, Sparkles, Star, Award, Users, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero entrance animation - استخدم gsap.set لضبط الحالة الأولية صراحةً، ثم gsap.to للتحريك
    gsap.set(titleRef.current, { y: 100, opacity: 0 });
    gsap.set(subtitleRef.current, { y: 50, opacity: 0 });
    gsap.set(buttonsRef.current?.children || [], { y: 30, opacity: 0 });
    gsap.set(statsRef.current?.children || [], { y: 40, opacity: 0, scale: 0.8 });

    const tl = gsap.timeline();
    
    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    })
    .to(subtitleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .to(buttonsRef.current?.children || [], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
      force3D: true
    }, "-=0.6")
    .to(statsRef.current?.children || [], {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      force3D: true
    }, "-=0.4");

    // Floating elements animation
    gsap.to(floatingElementsRef.current?.children || [], {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      stagger: 0.5,
      repeat: -1,
      yoyo: true
    });

    // Parallax effect for background elements
    gsap.to(".hero-bg-1", {
      y: -50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(".hero-bg-2", {
      y: -30,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
      }
    });

    // Refresh ScrollTrigger
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

  }, { scope: heroRef });

  const achievements = [
    { icon: '🏆', title: 'جوائز دولية', count: '15+' },
    { icon: '🎬', title: 'مشروع مكتمل', count: '500+' },
    { icon: '😊', title: 'عميل راضٍ', count: '200+' },
    { icon: '⭐', title: 'تقييم 5 نجوم', count: '98%' }
  ];

  const features = [
    'إنتاج فيديو احترافي ',
    'فريق إبداعي متخصص',
    'تسليم في الوقت المحدد',
    'دعم فني على مدار الساعة'
  ];

  return (
    <section 
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden px-4 py-24"
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10" ref={floatingElementsRef}>
        <div className="hero-bg-1 absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="hero-bg-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary-500 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-secondary-500 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-primary-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-secondary-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Enhanced Badge */}
        <div className="inline-flex items-center space-x-3 glass-effect rounded-full px-8 py-4 mb-8 shadow-xl border border-primary-200 dark:border-primary-800">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium font-arabic">وكالة إنتاج الفيديو الرائدة في المنطقة</span>
          </div>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>
        
        {/* Enhanced Title */}
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight font-arabic">
          نحول أفكارك إلى
          <span className="block bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent animate-gradient-x py-2">
            محتوى مرئي مذهل
          </span>
        </h1>
        
        {/* Enhanced Subtitle */}
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-arabic">
          متخصصون في صناعة المحتوى المرئي وإنتاج الفيديوهات والمونتاج الاحترافي. 
          نساعدك في إيصال رسالتك بطريقة إبداعية ومؤثرة تجذب جمهورك وتحقق أهدافك بأعلى معايير الجودة العالمية.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 glass-effect rounded-xl px-6 py-3 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300 font-medium font-arabic">{feature}</span>
            </div>
          ))}
        </div>

        {/* Enhanced Buttons - أزل opacity-0 و translate-y-8 من CSS، لأن gsap.set يضبطها */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-12 py-5 rounded-2xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-500 transform hover:scale-105 flex items-center space-x-3 text-lg font-semibold shadow-2xl hover:shadow-primary-500/25 font-arabic">
            <span>ابدأ مشروعك الآن</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group glass-effect text-gray-700 dark:text-gray-300 px-12 py-5 rounded-2xl hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-500 flex items-center space-x-3 text-lg shadow-xl border border-white/20 dark:border-gray-700/50 font-arabic">
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>شاهد أعمالنا</span>
          </button>
        </div>

        {/* Enhanced Stats with Achievements - أزل opacity-0 و translate-y-10 scale-0 من CSS */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="group text-center glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-primary-500/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3 font-arabic">{achievement.count}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium font-arabic text-sm">{achievement.title}</div>
              <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center space-x-8 opacity-60 dark:opacity-40">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-5 h-5 text-primary-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-arabic">معتمد دولياً</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <Users className="w-5 h-5 text-secondary-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-arabic">فريق من 20+ خبير</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-arabic">نمو 300% سنوياً</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;