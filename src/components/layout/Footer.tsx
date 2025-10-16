import React from "react";
import { SiInstagram, SiTiktok, SiLinkedin } from "react-icons/si";

const Footer: React.FC = () => {
  const footerLinks = [
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "#" },
  ];

  const socialMediaLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/horizxon.tech/",
      Icon: SiInstagram,
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@horizxon.limited",
      Icon: SiTiktok,
    },
    {
      name: "LinkedIn",
      href: "#",
      Icon: SiLinkedin,
    },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold text-lg md:text-xl mb-1">
              Horizxon
            </h2>
            <p className="text-white/40 text-xs md:text-sm">
              © 2025 All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/40 hover:text-white text-xs md:text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialMediaLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-all duration-200 p-1.5 md:p-2 hover:bg-white/5 rounded-lg"
                aria-label={social.name}
              >
                <social.Icon className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
