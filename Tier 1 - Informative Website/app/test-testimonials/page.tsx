import { Testimonials } from "@/components/home/Testimonials";
import { testimonials } from "@/content/testimonials";

/**
 * Test page for Testimonials component
 * This page can be accessed at /test-testimonials during development
 */
export default function TestTestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            Testimonials Component Test
          </h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-700">
                With All Testimonials
              </h2>
              <Testimonials testimonials={testimonials} />
            </div>
            
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-700">
                With Limited Testimonials (2)
              </h2>
              <Testimonials testimonials={testimonials.slice(0, 2)} />
            </div>
            
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-700">
                With Single Testimonial
              </h2>
              <Testimonials testimonials={testimonials.slice(0, 1)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
