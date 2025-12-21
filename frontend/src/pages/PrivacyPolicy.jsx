import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="Privacy Policy | EpoxyArt33"
        description="EpoxyArt33 privacy policy. Learn how we collect, use, and protect your information when you use our epoxy flooring services in Southwest Florida."
        keywords="privacy policy, EpoxyArt33 privacy, data protection, SWFL flooring company"
        url="/privacy"
      />
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: October 30, 2024</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              EpoxyArt33 ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When you request a quote or contact us, we may collect:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Project details and address</li>
              <li>Any other information you voluntarily provide</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
              <li>Device information</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Schedule appointments and consultations</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Send promotional emails (only with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Disclosure of Your Information</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business (e.g., email providers, payment processors)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of business assets</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our website may contain links to third-party websites (e.g., Facebook, Instagram, Google Business). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To exercise these rights, please contact us at <a href="mailto:epoxyfloorsolutions33@gmail.com" className="text-yellow-600 hover:underline">epoxyfloorsolutions33@gmail.com</a> or call (239) 276-1462.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-800 font-bold mb-2">EpoxyArt33</p>
              <p className="text-gray-700">Naples, FL (SWFL)</p>
              <p className="text-gray-700">Phone: <a href="tel:239-276-1462" className="text-yellow-600 hover:underline">(239) 276-1462</a></p>
              <p className="text-gray-700">Email: <a href="mailto:epoxyfloorsolutions33@gmail.com" className="text-yellow-600 hover:underline">epoxyfloorsolutions33@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
