import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TestimonialCard= ({ text, author, source }: { text: string; author: string; source: string }) => {
  return (
    <Card className="relative max-w-sm py-6 hover:shadow-lg transition-shadow duration-300s hover:opacity-85 ">
      <CardContent className="text-lg max-w-sm space-y-4 justify-between flex flex-col h-full">
        <CardDescription>{text}</CardDescription>
        <Separator />
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <h2 className="text-lg font-semibold">{author}</h2>
        <div className="flex justify-between w-full mt-2">
          <h3 className="text-sm text-slate-500">{source}</h3>
          <h3 className="text-sm">⭐⭐⭐⭐⭐</h3>  
        </div>
       </CardFooter>
    </Card>
  )
}

export default TestimonialCard