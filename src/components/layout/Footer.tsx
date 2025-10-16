import React from "react";
import { SiInstagram, SiTiktok, SiLinkedin } from "react-icons/si";

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "SERVICES",
      links: [
        { label: "Frontend Development", href: "#" },
        { label: "Backend Development", href: "#" },
        { label: "Full-Stack Solutions", href: "#" },
        { label: "E-commerce", href: "#" },
      ],
    },
    {
      title: "TECHNOLOGIES",
      links: [
        { label: "React & Next.js", href: "#" },
        { label: "Node.js", href: "#" },
        { label: "WordPress", href: "#" },
        { label: "Progressive Web Apps", href: "#" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Portfolio", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
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
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              {/* Footer headings - following design.json text.headings.footerHeadings */}
              <h3 className="text-[#A1A1A1] font-bold text-xs sm:text-sm uppercase mb-3 sm:mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {/* Footer links - following design.json text.body.footerLinks */}
                    <a
                      href={link.href}
                      className="text-[#8F8F8F] hover:text-white transition-colors duration-200 text-xs sm:text-sm block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with social media */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#8F8F8F] text-xs sm:text-sm text-center md:text-left">
            © 2025 Horizxon. All rights reserved. Made with{" "}
            <span className="text-red-500">❤️</span> for innovators
          </div>

          {/* Social media icons - following design.json icons.socialMedia */}
          <div className="flex space-x-4 sm:space-x-6 mt-3 md:mt-0">
            {socialMediaLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-[#8F8F8F] hover:text-white transition-colors duration-200"
                aria-label={social.name}
              >
                <social.Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
