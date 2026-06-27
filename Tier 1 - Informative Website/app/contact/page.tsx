import { ContactForm } from "@/components/forms/ContactForm";
import { companyInfo } from "@/content/company";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | ChemCorp Industries",
  description: "Get in touch with ChemCorp Industries. Contact us for product inquiries, technical support, or business partnerships.",
};

export default function ContactPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20ChemCorp%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b-4 border-amber-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-4 animate-slide-up-fade">
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-400">Get In Touch</p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Have questions about our products or services? We're here to help. Reach out to us today and discover how ChemCorp can meet your chemical needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Contact Form & Info Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Left/Top */}
          <div className="lg:col-span-2 animate-slide-up-fade delay-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 sm:p-10 lg:p-12 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-12 bg-amber-500 rounded-full" />
                <h2 className="text-3xl font-bold text-slate-900">Send us a Message</h2>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info - Right/Bottom */}
          <div className="lg:col-span-1 space-y-6 animate-slide-up-fade delay-2">
            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Quick Contact</h3>
              
              {/* Phone */}
              <div className="mb-6">
                <p className="text-xs text-slate-600 uppercase tracking-wide font-semibold mb-2">
                  Phone
                </p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-amber-700 hover:text-amber-800 font-semibold transition-colors text-base"
                >
                  {companyInfo.phone}
                </a>
              </div>

              {/* Email */}
              <div className="mb-6">
                <p className="text-xs text-slate-600 uppercase tracking-wide font-semibold mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-amber-700 hover:text-amber-800 font-semibold transition-colors break-all text-base"
                >
                  {companyInfo.email}
                </a>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-8 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all hover:shadow-lg hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.87 1.246-3.045 3.006-3.045 4.926 0 1.211.23 2.396.743 3.526L2.75 19.793l4.773-1.276c1.447.88 3.104 1.694 4.882 1.694 5.487 0 9.963-4.471 9.963-9.963 0-2.633-.997-5.109-2.813-6.976-1.817-1.868-4.286-2.897-6.904-2.897" />
                </svg>
                Message on WhatsApp
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Our Office</h3>
              
              <div className="text-sm text-slate-700 space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wide font-semibold text-slate-600 mb-2">
                    Address
                  </p>
                  <p className="leading-relaxed">
                    {companyInfo.address.street}
                    <br />
                    {companyInfo.address.city}, {companyInfo.address.state}
                    <br />
                    {companyInfo.address.pincode}
                    <br />
                    {companyInfo.address.country}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs uppercase tracking-wide font-semibold text-slate-600 mb-2">
                    Founded
                  </p>
                  <p className="font-semibold text-slate-900">{companyInfo.foundedYear}</p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs uppercase tracking-wide font-semibold text-slate-600 mb-2">
                    GST Number
                  </p>
                  <p className="font-mono text-amber-700 font-semibold">{companyInfo.gstNumber}</p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Business Hours</h3>
              
              <div className="text-sm text-slate-700 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-amber-700 font-bold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                  <span className="font-medium">Saturday</span>
                  <span className="text-amber-700 font-bold">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                  <span className="font-medium">Sunday</span>
                  <span className="text-slate-500 font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="animate-slide-up-fade delay-3">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-600">Visit Us</p>
            <h2 className="text-4xl font-bold text-slate-900">
              Find Us on the Map
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Visit our state-of-the-art facility in the heart of Mumbai's industrial area
            </p>
          </div>

          {/* Google Maps Embed - Generic Industrial Location */}
          <div className="w-full h-96 rounded-xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8730050419605!2d72.82046!3d19.01441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f6f6f6f6f7%3A0x0!2sIndustrial%20Area%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ChemCorp Industries Location"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 border-t-4 border-amber-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-slide-up-fade delay-4">
            <h2 className="text-4xl font-bold text-white">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Explore our complete product range and discover how ChemCorp can meet your chemical needs with quality and reliability.
            </p>
            <div className="mt-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold rounded-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View Our Products
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
