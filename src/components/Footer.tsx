import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const footerContent = {
    el: {
      company: {
        title: "Hydrogenlife",
        description: "Αφοσιωμένοι στην παροχή προϊόντων υδρογονωμένου νερού υψηλής ποιότητας."
      },
      quickLinks: {
        title: "Γρήγοροι Σύνδεσμοι",
        links: [
          { text: "Αρχική", href: "/" },
          { text: "Υδρογονωμένο Νερό", href: "/hydrogen-water" },
          { text: "Προϊόντα", href: "/products" },
          { text: "Επικοινωνία", href: "/contact" }
        ]
      },
      contact: {
        title: "Επικοινωνία",
        phone: "Τηλέφωνο",
        email: "Email"
      },
      newsletter: {
        title: "Newsletter",
        placeholder: "Το email σας"
      }
    },
    en: {
      company: {
        title: "Hydrogenlife",
        description: "Committed to delivering the highest quality hydrogenated water products."
      },
      quickLinks: {
        title: "Quick Links",
        links: [
          { text: "Home", href: "/" },
          { text: "Hydrogen Water", href: "/hydrogen-water" },
          { text: "Products", href: "/products" },
          { text: "Contact", href: "/contact" }
        ]
      },
      contact: {
        title: "Contact",
        phone: "Phone",
        email: "Email"
      },
      newsletter: {
        title: "Newsletter",
        placeholder: "Your email"
      }
    }
  };

  const content = footerContent[currentLang as 'el' | 'en'];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{content.company.title}</h3>
            <p className="text-gray-400">
              {content.company.description}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.quickLinks.title}</h4>
            <ul className="space-y-2">
              {content.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.contact.title}</h4>
            <p className="text-gray-400">
              {content.contact.phone}: 
              <a 
                href="tel:+306980900300" 
                className="ml-1 inline-flex items-center text-sky-500 hover:text-sky-400 transition-colors"
              >
                +30 6980900300
                <button className="ml-2 px-2 py-1 bg-sky-600 hover:bg-sky-700 rounded-md text-xs text-white transition-colors">
                  {currentLang === 'el' ? 'Κάλεσμα' : 'Call'}
                </button>
              </a>
            </p>
            <p className="text-gray-400">{content.contact.email}: info@hydrogenlife.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.newsletter.title}</h4>
            <div className="flex">
              <input
                type="email"
                placeholder={content.newsletter.placeholder}
                className="px-4 py-2 rounded-l-md w-full text-gray-900"
              />
              <button className="bg-sky-600 px-4 py-2 rounded-r-md hover:bg-sky-700">
                <Mail className="h-5 w-5" />
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;