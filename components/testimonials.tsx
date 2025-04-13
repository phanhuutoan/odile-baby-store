import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent of 2",
      content:
        "The quality of the products is exceptional. My baby loves the wooden toys, and I love that they're eco-friendly!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "First-time parent",
      content:
        "As a new parent, I was overwhelmed with choices. Little Treasures made it easy to find safe, high-quality items for my newborn.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Parent of twins",
      content:
        "Fast shipping and excellent customer service. The sleep sacks have been a game-changer for my twins' sleep routine.",
      rating: 4,
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-baby-pink sm:text-4xl md:text-5xl">
              What Parents Say
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-baby-pink fill-baby-pink" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 text-gray-500 dark:text-gray-400">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-baby-pink/20 flex items-center justify-center text-baby-pink font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
