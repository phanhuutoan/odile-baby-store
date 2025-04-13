import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="bg-baby-pink/10 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-baby-pink sm:text-4xl md:text-5xl">
              Join Our Community
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Subscribe to our newsletter for parenting tips, exclusive offers, and new product alerts.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                className="flex-1 border-baby-pink/20 focus-visible:ring-baby-pink"
                placeholder="Enter your email"
                type="email"
                required
              />
              <Button type="submit" className="bg-baby-pink hover:bg-baby-pink/90 text-white">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
