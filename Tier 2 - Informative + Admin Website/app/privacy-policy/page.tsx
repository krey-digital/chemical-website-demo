import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/content/company";

/**
 * Privacy Policy Page
 * 
 * Displays the company's privacy policy, data collection practices,
 * and user rights in compliance with data protection regulations.
 * 
 * Validates Requirements: Legal compliance, transparency
 */

export const metadata: Metadata = {
  title: "Privacy Policy | ChemCorp Industries",
  description: "Learn how ChemCorp Industries collects, uses, and protects your personal information. Our commitment to data privacy and security.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 14, 2026";

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b-4 border-amber-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-4 animate-slide-up-fade">
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-400">Legal Information</p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-slate-400">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none">
          
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-700 leading-relaxed">
              {companyInfo.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Personal Information</h3>
            <p className="text-slate-700 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li>Fill out our contact form</li>
              <li>Request product information or quotes</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via email or phone</li>
              <li>Interact with us on social media</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              This information may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li>Name and company name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business address</li>
              <li>Product interests and requirements</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-slate-700 leading-relaxed">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-3">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process your requests for product information or quotes</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and enhance security</li>
              <li>Maintain business records</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-slate-700 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Service Providers</h3>
            <p className="text-slate-700 leading-relaxed">
              We may share your information with third-party service providers who perform services on our behalf, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li>Email service providers (Formspree)</li>
              <li>Analytics providers (Google Analytics)</li>
              <li>Hosting providers</li>
              <li>Payment processors (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Legal Requirements</h3>
            <p className="text-slate-700 leading-relaxed">
              We may disclose your information if required by law or in response to valid requests by public authorities.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Business Transfers</h3>
            <p className="text-slate-700 leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
            </p>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-5">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          {/* Cookies and Tracking */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-slate-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Types of Cookies We Use</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            
            <p className="text-slate-700 leading-relaxed mt-4">
              You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-7">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Privacy Rights</h2>
            <p className="text-slate-700 leading-relaxed">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href={`mailto:${companyInfo.email}`} className="text-amber-600 hover:text-amber-700 font-semibold">{companyInfo.email}</a>
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Third-Party Links</h2>
            <p className="text-slate-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              We encourage you to review this privacy policy periodically for any changes.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl border border-amber-200 p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have questions or concerns about this privacy policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-slate-700">
              <p><strong>Company:</strong> {companyInfo.name}</p>
              <p><strong>Email:</strong> <a href={`mailto:${companyInfo.email}`} className="text-amber-700 hover:text-amber-800 font-semibold">{companyInfo.email}</a></p>
              <p><strong>Phone:</strong> <a href={`tel:${companyInfo.phone}`} className="text-amber-700 hover:text-amber-800 font-semibold">{companyInfo.phone}</a></p>
              <p><strong>Address:</strong><br />
                {companyInfo.address.street}<br />
                {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.pincode}<br />
                {companyInfo.address.country}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 border-t-4 border-amber-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Have Questions?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              If you have any questions about our privacy practices, feel free to reach out to us.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold rounded-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
