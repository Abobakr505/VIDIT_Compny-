import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-arabic">
            هل لديك مشروع في ذهنك؟ نحن هنا لمساعدتك في تحويل أفكارك إلى واقع مرئي مذهل
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-arabic">معلومات التواصل</h3>
            
            <div className="space-y-6 mb-12">
              {[
                { icon: Phone, title: 'الهاتف', info: '+966 50 123 4567', color: 'from-green-500 to-emerald-500' },
                { icon: Mail, title: 'البريد الإلكتروني', info: 'info@vidit.creative', color: 'from-blue-500 to-cyan-500' },
                { icon: MapPin, title: 'العنوان', info: 'الرياض، المملكة العربية السعودية', color: 'from-red-500 to-pink-500' },
                { icon: Clock, title: 'ساعات العمل', info: 'الأحد - الخميس: 9:00 - 18:00', color: 'from-purple-500 to-indigo-500' },
                { icon: Globe, title: 'الموقع الإلكتروني', info: 'www.vidit.creative', color: 'from-orange-500 to-yellow-500' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-`}>
                    <contact.icon className="w-6 h-6 text-white hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold font-arabic">{contact.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-arabic">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl p-8 border border-primary-500/30 dark:border-primary-400/30 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white font-arabic">استشارة مجانية</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-arabic">
                احجز استشارة مجانية مع فريقنا لمناقشة مشروعك والحصول على أفضل الحلول المناسبة لاحتياجاتك.
              </p>
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-arabic">
                احجز استشارتك المجانية
              </button>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700/50 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-arabic">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">الاسم الكامل</label>
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
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">البريد الإلكتروني</label>
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
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">نوع الخدمة</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
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

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">تفاصيل المشروع</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="أخبرنا عن مشروعك وأهدافك..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg font-arabic"
              >
                <Send className="w-5 h-5" />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;