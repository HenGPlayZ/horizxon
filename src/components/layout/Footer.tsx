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
      name: "X (Twitter)",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
