import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-baby-pink/10 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-baby-pink sm:text-5xl xl:text-6xl/none">
                Welcome to Little Treasures
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover our curated collection of premium baby products. Safe, stylish, and sustainable choices for
                your little one.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-baby-pink hover:bg-baby-pink/90 text-white">Shop Now</Button>
              <Button variant="outline" className="border-baby-pink text-baby-pink hover:bg-baby-pink/10">
                Explore Categories
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] rounded-full bg-baby-pink/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  alt="Baby Products"
                  className="aspect-square object-cover"
                  height="400"
                  src="/placeholder.svg?height=400&width=400"
                  width="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
