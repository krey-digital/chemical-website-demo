import { ContactForm } from "@/components/forms/ContactForm";

/**
 * Test page for ContactForm component
 * 
 * This page demonstrates the ContactForm component with client-side state
 * and Formspree integration.
 */
export default function TestContactFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Contact Form Test
          </h1>
          <p className="mt-2 text-gray-600">
            Testing the ContactForm component with Formspree integration
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <ContactForm />
        </div>

        <div className="mt-8 rounded-lg bg-blue-50 p-4">
          <h2 className="mb-2 text-lg font-semibold text-blue-900">
            Test Instructions:
          </h2>
          <ul className="list-inside list-disc space-y-1 text-sm text-blue-800">
            <li>All fields except "Message" are required</li>
            <li>Email must be in valid format (e.g., user@example.com)</li>
            <li>Phone must be at least 10 digits (accepts +, -, spaces, parentheses)</li>
            <li>Product Interest dropdown is populated from product categories</li>
            <li>Form submits to Formspree endpoint (requires valid NEXT_PUBLIC_FORMSPREE_ID)</li>
            <li>Success message displays after successful submission</li>
            <li>Error messages display for validation failures and network errors</li>
            <li>Form data is preserved on errors but cleared on success</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
