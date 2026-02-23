import TestimonialCard from "@/components/testimonials/testimonialCard";
import data from "@/data/testimonials.json";
import { Testimonial } from "@/app/types";

const testimonials: Testimonial[] = data

export default function TestimonialsPage() {
  return (
    <div className="relative container py-36 mx-auto justify-center sm:px-12 flex-col flex-1">

      <div className="mx-auto max-w-3xl text-center mb-12 space-y-4">
        <h2 className="text-5xl font-bold">Customer Testimonials</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} text={testimonial.text} author={testimonial.author} source={testimonial.source}/>
        ))}
      </div>
    </div>
  )
}
