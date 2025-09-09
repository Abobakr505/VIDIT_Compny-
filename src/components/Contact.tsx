import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  // Animation controls and inView hooks
  const infoControls = useAnimation();
  const formControls = useAnimation();

  const infoInView = useInView(infoRef, { triggerOnce: false, threshold: 0.2 });
  const formInView = useInView(formRef, { triggerOnce: false, threshold: 0.2 });

  // Animation variants
  const infoVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  const formVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  const contactItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  // Trigger animations based on inView status
  useEffect(() => {
    if (infoInView) infoControls.start('visible');
    else infoControls.start('hidden');
  }, [infoInView, infoControls]);

  useEffect(() => {
    if (formInView) formControls.start('visible');
    else formControls.start('hidden');
  }, [formInView, formControls]);

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
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full px-6 py-3 mb-6">
            <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300 font-arabic">
                تواصل معنا
            </span>
          </div>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic"
          >
            تواصل <span className="gradient-text">معنا</span>
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-arabic"
          >
            هل لديك مشروع في ذهنك؟ نحن هنا لمساعدتك في تحويل أفكارك إلى واقع مرئي مذهل
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <motion.div
            ref={infoRef}
            variants={infoVariants}
            initial="hidden"
            animate={infoControls}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-arabic">معلومات التواصل</h3>
            
            <div className="space-y-6 mb-12">
              {[
                { icon: Phone, title: 'الهاتف', info: '+966 50 123 4567', color: 'from-green-500 to-emerald-500' },
                { icon: Mail, title: 'البريد الإلكتروني', info: 'info@vidit.creative', color: 'from-blue-500 to-cyan-500' },
                { icon: MapPin, title: 'العنوان', info: 'الرياض، المملكة العربية السعودية', color: 'from-red-500 to-pink-500' },
                { icon: Clock, title: 'ساعات العمل', info: 'الأحد - الخميس: 9:00 - 18:00', color: 'from-purple-500 to-indigo-500' },
                { icon: Globe, title: 'الموقع الإلكتروني', info: 'www.vidit.creative', color: 'from-orange-500 to-yellow-500' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  variants={contactItemVariants}
                  initial="hidden"
                  animate={infoControls}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <contact.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold font-arabic">{contact.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-arabic">{contact.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl p-8 border border-primary-500/30 dark:border-primary-400/30 shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white font-arabic">استشارة مجانية</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-arabic">
                احجز استشارة مجانية مع فريقنا لمناقشة مشروعك والحصول على أفضل الحلول المناسبة لاحتياجاتك.
              </p>
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl shadow-lg font-arabic"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                احجز استشارتك المجانية
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            ref={formRef}
            variants={formVariants}
            initial="hidden"
            animate={formControls}
            className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700/50 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-arabic">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                >
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">الاسم الكامل</label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                >
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">البريد الإلكتروني</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                >
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">رقم الهاتف</label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                >
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">نوع الخدمة</label>
                  <div className="relative">
                    <motion.select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 appearance-none font-arabic"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <option value="" className="font-arabic">اختر الخدمة</option>
                      <option value="video-production" className="font-arabic">إنتاج الفيديو</option>
                      <option value="editing" className="font-arabic">المونتاج والتحرير</option>
                      <option value="motion-graphics" className="font-arabic">الموشن جرافيك</option>
                      <option value="photography" className="font-arabic">التصوير الفوتوغرافي</option>
                      <option value="audio" className="font-arabic">الهندسة الصوتية</option>
                      <option value="interactive" className="font-arabic">المحتوى التفاعلي</option>
                    </motion.select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
              >
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium font-arabic">تفاصيل المشروع</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="أخبرنا عن مشروعك وأهدافك..."
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg font-arabic"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Send className="w-5 h-5" />
                <span>إرسال الرسالة</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;