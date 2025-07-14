"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phoneNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Website quote request submitted:", formData);
    alert(
      "Quote request submitted successfully! We will contact you soon with a custom proposal."
    );

    setIsSubmitting(false);
    onClose();

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      phoneNumber: "",
      message: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-black border border-gray-800 rounded-lg w-full max-w-md p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#8F8F8F] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal content */}
          <div className="mb-6">
            {/* H2 heading - following design.json text.headings.h2 */}
            <h2 className="text-white font-semibold text-2xl mb-2">
              Get Your Quote
            </h2>
            {/* Body text - following design.json text.body.default */}
            <p className="text-[#C2C2C2] text-sm">
              Ready to bring your website vision to life? Fill out the form
              below and our team will get in touch with a custom quote.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-white text-sm font-medium mb-1"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#201A25] border border-[#40324F] rounded-lg text-white placeholder-[#8F8F8F] focus:outline-none focus:border-white transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-white text-sm font-medium mb-1"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#201A25] border border-[#40324F] rounded-lg text-white placeholder-[#8F8F8F] focus:outline-none focus:border-white transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-[#201A25] border border-[#40324F] rounded-lg text-white placeholder-[#8F8F8F] focus:outline-none focus:border-white transition-colors"
                placeholder="john.doe@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-white text-sm font-medium mb-1"
              >
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-[#201A25] border border-[#40324F] rounded-lg text-white placeholder-[#8F8F8F] focus:outline-none focus:border-white transition-colors"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label
                htmlFor="jobTitle"
                className="block text-white text-sm font-medium mb-1"
              >
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-[#201A25] border border-[#40324F] rounded-lg text-white placeholder-[#8F8F8F] focus:outline-none focus:border-white transition-colors"
                placeholder="Chief Technology Officer"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-white text-sm font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-[#201A25] border border-[#40324F] rounded-lg text-white placeholder-[#8F8F8F] focus:outline-none focus:border-white transition-colors"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-white text-sm font-medium mb-1"
              >
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-[#201A25] border border-[#40324F] rounded-lg text-white placeholder-[#8F8F8F] focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Describe your website project, features needed, budget, timeline..."
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Quote"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDemoModal;
