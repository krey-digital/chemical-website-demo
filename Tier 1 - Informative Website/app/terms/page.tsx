import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/content/company";

/**
 * Terms of Service Page
 * 
 * Displays the terms and conditions for using the website and services.
 * Outlines user responsibilities, limitations, and legal agreements.
 * 
 * Validates Requirements: Legal compliance, user agreements
 */

export const metadata: Metadata = {
  title: "Terms of Service | ChemCorp Industries",
  description: "Read the terms and conditions for using ChemCorp Industries website and services. User agreements, responsibilities, and legal information.",
};

export default function TermsPage() {
  const lastUpdated = "April 14, 2026";

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b-4 border-amber-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-4 animate-slide-up-fade">
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-400">Legal Information</p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Please read these terms carefully before using our website or services.
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
          
          {/* Agreement to Terms */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and {companyInfo.name} ("Company," "we," "us," or "our") concerning your access to and use of our website and services.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our website or use our services.
            </p>
          </div>

          {/* Use of Website */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Use of Website</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Permitted Use</h3>
            <p className="text-slate-700 leading-relaxed">
              You may use our website for lawful purposes only. You agree to use the website in accordance with these Terms and all applicable laws and regulations.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Prohibited Activities</h3>
            <p className="text-slate-700 leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li>Use the website for any illegal purpose or in violation of any laws</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Collect or harvest information from the website using automated means</li>
              <li>Impersonate any person or entity</li>
              <li>Engage in any activity that could damage our reputation</li>
              <li>Use the website to transmit spam or unsolicited communications</li>
            </ul>
          </div>

          {/* Products and Services */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-3">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Products and Services</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Product Information</h3>
            <p className="text-slate-700 leading-relaxed">
              We strive to provide accurate product information on our website. However, we do not warrant that product descriptions, specifications, or other content is accurate, complete, reliable, current, or error-free.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Pricing</h3>
            <p className="text-slate-700 leading-relaxed">
              All prices are subject to change without notice. We reserve the right to modify or discontinue products at any time. Product availability may vary.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Quotations</h3>
            <p className="text-slate-700 leading-relaxed">
              Any quotations provided are valid for the period specified and are subject to our acceptance of your order. We reserve the right to refuse or cancel any order.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Intellectual Property Rights</h2>
            <p className="text-slate-700 leading-relaxed">
              The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by {companyInfo.name}, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
            </p>
          </div>

          {/* User Submissions */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-5">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">User Submissions</h2>
            <p className="text-slate-700 leading-relaxed">
              Any information, feedback, data, questions, comments, suggestions, or other content you submit through our contact forms or other means ("Submissions") will be treated as non-confidential and non-proprietary.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              By submitting content, you grant us a worldwide, perpetual, irrevocable, royalty-free license to use, reproduce, modify, and distribute such content for business purposes.
            </p>
          </div>

          {/* Disclaimer of Warranties */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-slate-700 leading-relaxed">
              THE WEBSITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li>The website will be available at all times or uninterrupted</li>
              <li>The website will be error-free or secure</li>
              <li>The information provided is accurate or reliable</li>
              <li>Defects will be corrected</li>
              <li>The website is free of viruses or harmful components</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-7">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, {companyInfo.name.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              Our total liability to you for any claims arising from your use of the website shall not exceed the amount you paid us, if any, for accessing the website.
            </p>
          </div>

          {/* Indemnification */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8 animate-slide-up-fade delay-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Indemnification</h2>
            <p className="text-slate-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless {companyInfo.name}, its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li>Your use of the website</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </div>

          {/* Chemical Safety */}
          <div className="bg-amber-50 rounded-xl border border-amber-200 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Chemical Safety and Handling</h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>IMPORTANT:</strong> All chemical products require proper handling, storage, and disposal. Users are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-3">
              <li>Obtaining and reviewing Safety Data Sheets (SDS) before use</li>
              <li>Following all safety guidelines and regulations</li>
              <li>Using appropriate personal protective equipment (PPE)</li>
              <li>Ensuring proper training for personnel handling chemicals</li>
              <li>Complying with local, state, and federal regulations</li>
              <li>Proper storage and disposal according to regulations</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              We are not liable for any injuries, damages, or losses resulting from improper handling, storage, or use of chemical products.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Governing Law and Jurisdiction</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts in {companyInfo.address.city}, {companyInfo.address.state}.
            </p>
          </div>

          {/* Dispute Resolution */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dispute Resolution</h2>
            <p className="text-slate-700 leading-relaxed">
              In the event of any dispute, claim, or controversy arising from these Terms, the parties agree to first attempt to resolve the matter through good faith negotiations.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              If the dispute cannot be resolved through negotiation, the parties agree to submit to mediation before pursuing litigation.
            </p>
          </div>

          {/* Severability */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Severability</h2>
            <p className="text-slate-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              Your continued use of the website after any changes constitutes acceptance of the new Terms.
            </p>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Termination</h2>
            <p className="text-slate-700 leading-relaxed">
              We may terminate or suspend your access to the website immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              Upon termination, your right to use the website will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive.
            </p>
          </div>

          {/* Entire Agreement */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Entire Agreement</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and {companyInfo.name} regarding your use of the website and supersede all prior agreements and understandings.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl border border-amber-200 p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Explore our products and discover how we can meet your chemical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold rounded-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
