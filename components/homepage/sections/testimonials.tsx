import Link from "next/link";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/testimonials/testimonialCard";
import data from "@/data/testimonials.json";
import { Testimonial } from "@/app/types";

import { ArrowRight } from "lucide-react";

const testimontials: Testimonial[] = data


const Testimonials = () => {
  return (
    <section className="py-8 my-8">
      <div className="mx-auto max-w-3xl text-center mb-12 space-y-4">
        <h2 className="text-5xl font-bold">What People are Saying about Best for Less Mover</h2>
        <p>Our customers are our top priority, and we&apos;re dedicated to providing the best possible service at the most competitive prices. Here&apos;s what a few of our satisfied customers have to say about us.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {testimontials.splice(0, 3).map((testimonial, index) => (
          <TestimonialCard key={index} text={testimonial.text} author={testimonial.author} source={testimonial.source} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/testimonials">
          <Button className="mx-auto bg-slate-800 text-md py-6 mt-6 rounded-full cursor-pointer">Read More Testimonials<ArrowRight className="ml-2 w-4 h-4" /></Button>
        </Link>
      </div>
    </section>
  )
}

export default Testimonials