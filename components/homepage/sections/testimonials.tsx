import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TestimonialCard= ({ text, author }: { text: string; author: string }) => {
  return (
    <Card className="relative mx-auto max-w-sm py-6 hover:shadow-lg transition-shadow duration-300s hover:opacity-85 ">
      <CardContent className="text-lg max-w-sm space-y-4">
        <CardDescription>{text}</CardDescription>
        <Separator />
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <h2 className="text-lg font-semibold">{author}</h2>
        <div className="flex justify-between w-full mt-2">
          <h3 className="text-sm text-slate-500">Google</h3>
          <h3 className="text-sm text-slate-500">⭐⭐⭐⭐⭐</h3>  
        </div>
       </CardFooter>
    </Card>
  )
}

const Testimonials = () => {
  return (
    <section className="py-8 my-8">
      <div className="mx-auto max-w-3xl text-center mb-12 space-y-4">
        <h2 className="text-5xl font-bold">What People are Saying about Best for Less Mover</h2>
        <p>Our customers are our top priority, and we're dedicated to providing the best possible service at the most competitive prices. Here's what a few of our satisfied customers have to say about us.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <TestimonialCard text="Best for Less has saved me so much money on my shopping! I can't recommend it enough." author="Sarah K." />
        <TestimonialCard text="I love how easy it is to find the best deals with Best for Less. It's my go-to shopping companion." author="John D." />
        <TestimonialCard text="Thanks to Best for Less, I've been able to stick to my budget and still get everything I need." author="Emily R." />
      </div>
    </section>
  )
}

export default Testimonials