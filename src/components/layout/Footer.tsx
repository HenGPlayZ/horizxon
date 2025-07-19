import React from "react";

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
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.7 2 8.3 2.02 7.1 2.07C5.9 2.12 4.9 2.3 4.2 2.6C3.4 2.9 2.9 3.4 2.6 4.2C2.3 4.9 2.1 5.9 2.07 7.1C2.02 8.3 2 8.7 2 12s.02 3.7.07 4.9c.05 1.2.23 2.2.53 2.9.3.8.8 1.3 1.6 1.6.7.3 1.7.5 2.9.53 1.2.05 1.6.07 4.9.07s3.7-.02 4.9-.07c1.2-.05 2.2-.23 2.9-.53.8-.3 1.3-.8 1.6-1.6.3-.7.5-1.7.53-2.9.05-1.2.07-1.6.07-4.9s-.01-3.7-.07-4.9c-.05-1.2-.23-2.2-.53-2.9-.3-.8-.8-1.3-1.6-1.6-.7-.3-1.7-.5-2.9-.53C13.7 2.02 13.3 2 12 2zm0 4.6c-2.97 0-5.4 2.43-5.4 5.4s2.43 5.4 5.4 5.4 5.4-2.43 5.4-5.4-2.43-5.4-5.4-5.4zm0 8.8c-1.87 0-3.4-1.53-3.4-3.4s1.53-3.4 3.4-3.4 3.4 1.53 3.4 3.4-1.53 3.4-3.4 3.4zm4.8-8.1c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1 1.1-.49 1.1-1.1-.49-1.1-1.1-1.1z" />
        </svg>
      ),
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@horizxon.limited",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.6 5.82s.51-2.91 3.22-2.91v4.34h-2.11c-.01-1.48-1.19-2.65-2.67-2.65-1.48 0-2.67 1.17-2.68 2.62v3.25c0 .03 0 .06 0 .09h2.11v4.34h-2.11v6.5h-4.34v-6.5H6.48v-4.34h2.11V10.5c0-2.52 1.29-4.71 4.34-4.71z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
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
                <div className="w-4 h-4 sm:w-5 sm:h-5">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
