import React from 'react';
import { Play, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-700 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                <img src="/logo.png" alt="" />
              </div>
              <span className="logo text-2xl font-bold gradient-text font-arabic">VIDIT</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-arabic">
              وكالة متخصصة في صناعة المحتوى المرئي وإنتاج الفيديوهات والمونتاج الاحترافي. 
              نحول أفكارك إلى محتوى مرئي مذهل.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, color: 'hover:bg-pink-500', href: '#' },
                { icon: Twitter, color: 'hover:bg-blue-500', href: '#' },
                { icon: Linkedin, color: 'hover:bg-blue-600', href: '#' },
                { icon: Youtube, color: 'hover:bg-red-500', href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 shadow-lg`}
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 font-arabic">خدماتنا</h3>
            <ul className="space-y-3">
              {[
                'إنتاج الفيديو',
                'المونتاج والتحرير',
                'الموشن جرافيك',
                'التصوير الفوتوغرافي',
                'الهندسة الصوتية',
                'المحتوى التفاعلي'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-arabic">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 font-arabic">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { name: 'الرئيسية', href: '#home' },
                { name: 'خدماتنا', href: '#services' },
                { name: 'أعمالنا', href: '#portfolio' },
                { name: 'من نحن', href: '#about' },
                { name: 'تواصل معنا', href: '#contact' },
                { name: 'سياسة الخصوصية', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-arabic">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 font-arabic">معلومات التواصل</h3>
            <div className="space-y-4">
              {[
                { icon: Phone, text: '+966 50 123 4567', color: 'text-green-500' },
                { icon: Mail, text: 'info@vidit.creative', color: 'text-blue-500' },
                { icon: MapPin, text: 'الرياض، السعودية', color: 'text-red-500' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <contact.icon className={`w-5 h-5 ${contact.color}`} />
                  <span className="text-gray-600 dark:text-gray-400 font-arabic">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center space-x-2 font-arabic">
              <span>© 2024 VIDIT Creative. جميع الحقوق محفوظة.</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center space-x-2 font-arabic flex-row-reverse">
              <span>صُنع بـ</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span> من</span>
              <span className='bracket'>{">"}</span> 
              <a href="https://bakrhasan.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline font-arabic ">  أبوبكر حسن </a>
              <span className='bracket'>{"<"}</span> 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;