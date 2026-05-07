import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';
import Logo from '@/assets/codevantalogo.png';
import { Link } from 'react-router-dom';
// You can rename this to 'Footer' when importing it into your main project.
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const serviceLinks = [
    { name: 'Web Development', path: '/services' },
    { name: 'Website Designing', path: '/services' },
    { name: 'AI-Based Solutions', path: '/services' },
    { name: 'ERP & Business Solutions', path: '/services' },
    { name: 'Product Development', path: '/services' }
  ];

  return (
    <footer className="relative bg-white text-gray-600 font-sans pt-16 pb-8 border-t border-gray-100 overflow-hidden">

      {/* Top Gradient Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4250E7] via-[#5a64eb] to-[#807DFE]"></div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4250E7]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Section */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">

            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 mb-6 cursor-pointer group w-max"
            >
              {/* Company Logo */}
              <img
                src={Logo}
                alt="CodevantaTech Logo"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
              />

              {/* Company Name */}
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                Codevanta<span className="text-[#807DFE]">Tech</span>
              </span>
            </a>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Delivering meaningful digital solutions. We are a trusted technology
              partner for businesses in Thailand and beyond, balancing technical
              excellence with real-world business needs.
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-semibold mb-6 uppercase tracking-wider text-sm">
              Company
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                to={link.path}
  className="text-gray-500 hover:text-[#807DFE] text-sm font-medium transition-colors duration-300 flex items-center gap-2 group"
>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#807DFE]" />

                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 font-semibold mb-6 uppercase tracking-wider text-sm">
              Our Services
            </h3>

            <ul className="space-y-4">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-500 hover:text-[#807DFE] text-sm font-medium transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#807DFE]" />

                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 font-semibold mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h3>

            <ul className="space-y-5">

              {/* Address */}
              <li className="flex items-start gap-3 text-sm group">
                <MapPin className="w-5 h-5 text-gray-400 group-hover:text-[#4250E7] transition-colors shrink-0 mt-0.5" />

                <span className="text-gray-500 leading-relaxed">
                  <strong className="text-gray-700 block mb-1">
                    Address
                  </strong>

                  Codevanta Tech
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3 text-sm group">
                <Phone className="w-5 h-5 text-gray-400 group-hover:text-[#807DFE] transition-colors shrink-0" />

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-gray-500 hover:text-[#4250E7] transition-colors"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3 text-sm group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#4250E7] transition-colors shrink-0" />

                <a
                  href="mailto:info@codevantatech.in"
                  className="text-gray-500 hover:text-[#4250E7] transition-colors"
                >
                  info@codevantatech.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} CodevantaTech. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-[#4250E7] transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-and-conditions"
              className="text-gray-400 hover:text-[#4250E7] transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}