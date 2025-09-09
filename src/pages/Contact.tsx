import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, CheckCircle, Star, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    { 
      icon: Phone, 
      title: 'الهاتف', 
      info: '+966 50 123 4567', 
      color: 'from-green-500 to-emerald-500',
      description: 'متاح 24/7 للاستفسارات العاجلة'
    },
    { 
      icon: Mail, 
      title: 'البريد الإلكتروني', 
      info: 'info@vidit.creative', 
      color: 'from-primary-500 to-secondary-500',
      description: 'نرد خلال ساعتين في أوقات العمل'
    },
    { 
      icon: MapPin, 
      title: 'العنوان', 
      info: 'الرياض، المملكة العربية السعودية', 
      color: 'from-red-500 to-pink-500',
      description: 'مكتبنا الرئيسي في قلب الرياض'
    },
    { 
      icon: Clock, 
      title: 'ساعات العمل', 
      info: 'الأحد - الخميس: 9:00 - 18:00', 
      color: 'from-purple-500 to-indigo-500',
      description: 'دعم فني متاح خارج أوقات العمل'
    }
  ];

  const testimonials = [
    {
      name: 'أحمد محمد',
      company: 'شركة التقنية المتقدمة',
      text: 'فريق VIDIT قدم لنا خدمة استثنائية وإبداع لا مثيل له. النتائج فاقت توقعاتنا بكثير.',
      rating: 5
    },
    {
      name: 'فاطمة العلي',
      company: 'مؤسسة الإبداع الرقمي',
      text: 'احترافية عالية والتزام بالمواعيد. أنصح بشدة بالتعامل معهم لأي مشروع إنتاج مرئي.',
      rating: 5
    },
    {
      name: 'خالد السعد',
      company: 'شركة التسويق الذكي',
      text: 'تعاملت معهم في عدة مشاريع وكانت النتائج مذهلة في كل مرة. فريق محترف ومبدع.',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-arabic flex  justify-center flex-row-reverse">
              تواصل
              <span className="block gradient-text mr-2">معنا</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 font-arabic">
              هل لديك مشروع في ذهنك؟ نحن هنا لمساعدتك في تحويل أفكارك إلى واقع مرئي مذهل
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-arabic">معلومات التواصل</h2>
              
              <div className="space-y-8 mb-12">
                {contactMethods.map((contact, index) => (
                  <div key={index} className="group ">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">{contact.title}</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-1 font-arabic">{contact.info}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-arabic">{contact.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Free Consultation */}
              <div className="gradient-border rounded-3xl animate-on-scroll">
                <div className="gradient-border-content p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-arabic">استشارة مجانية</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 font-arabic">
                    احجز استشارة مجانية مع فريقنا لمناقشة مشروعك والحصول على أفضل الحلول المناسبة لاحتياجاتك.
                  </p>
                  <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-arabic">
                    احجز استشارتك المجانية
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-arabic">أرسل لنا رسالة</h3>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <span className="text-green-800 dark:text-green-300 font-arabic">تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">الاسم الكامل *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">رقم الهاتف</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">نوع الخدمة *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="" className="font-arabic">اختر الخدمة</option>
                        <option value="video-production" className="font-arabic">إنتاج الفيديو</option>
                        <option value="editing" className="font-arabic">المونتاج والتحرير</option>
                        <option value="motion-graphics" className="font-arabic">الموشن جرافيك</option>
                        <option value="photography" className="font-arabic">التصوير الفوتوغرافي</option>
                        <option value="audio" className="font-arabic">الهندسة الصوتية</option>
                        <option value="interactive" className="font-arabic">المحتوى التفاعلي</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">الميزانية المتوقعة</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="" className="font-arabic">اختر الميزانية</option>
                        <option value="under-5k" className="font-arabic">أقل من 5,000 ريال</option>
                        <option value="5k-10k" className="font-arabic">5,000 - 10,000 ريال</option>
                        <option value="10k-25k" className="font-arabic">10,000 - 25,000 ريال</option>
                        <option value="25k-50k" className="font-arabic">25,000 - 50,000 ريال</option>
                        <option value="over-50k" className="font-arabic">أكثر من 50,000 ريال</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">الإطار الزمني</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="" className="font-arabic">اختر الإطار الزمني</option>
                        <option value="urgent" className="font-arabic">عاجل (أقل من أسبوع)</option>
                        <option value="1-2weeks" className="font-arabic">1-2 أسبوع</option>
                        <option value="2-4weeks" className="font-arabic">2-4 أسابيع</option>
                        <option value="1-2months" className="font-arabic">1-2 شهر</option>
                        <option value="flexible" className="font-arabic">مرن</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">تفاصيل المشروع *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="أخبرنا عن مشروعك وأهدافك بالتفصيل..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg font-arabic text-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span>إرسال الرسالة</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
              ماذا يقول عملاؤنا
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-arabic">
              آراء وتجارب عملائنا الكرام الذين وثقوا بنا في تنفيذ مشاريعهم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-on-scroll hover-lift bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 font-arabic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white font-arabic">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-arabic">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;