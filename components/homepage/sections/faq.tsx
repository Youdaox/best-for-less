import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqDropdown = () => {
  return (
    <Accordion type="single" collapsible defaultValue="cost" className="max-w-4xl w-full">
      <AccordionItem value="cost">
        <AccordionTrigger>How much does a household move cost?</AccordionTrigger>
        <AccordionContent>
          Pricing depends on home size, access (stairs/lift), distance, and any packing needs. Request a free quote for accurate pricing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="areas">
        <AccordionTrigger>What areas do you serve?</AccordionTrigger>
        <AccordionContent>
          We serve multiple regions. Please contact us with your location for specific service availability.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="apartments">
        <AccordionTrigger>Can you move apartments?</AccordionTrigger>
        <AccordionContent>
          Yes, we can handle apartment moves. Please provide details about your apartment for an accurate quote.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="packing">
        <AccordionTrigger>Do you offer packing services?</AccordionTrigger>
        <AccordionContent>
          Yes, we offer packing services. Please let us know if you need assistance with packing when requesting your quote.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

const Faq = () => {
  return (
    <section className="py-20 px-4 rounded-lg bg-slate-100">
      <h2 className="text-5xl font-extrabold mb-8 text-slate-800 text-center">Frequently Asked Questions</h2>
      <div className="flex justify-center">
        <FaqDropdown />
      </div>
    </section>
  );
} 

export default Faq;