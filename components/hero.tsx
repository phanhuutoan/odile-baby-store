import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-baby-pink/10 h-[calc(100vh-64px)]">
      <div className="container pr-0 mr-0">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl mb-8 font-coiny font-bold text-baby-pink sm:text-5xl xl:text-6xl/none">
                Chào mừng đến với Odile baby store
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Cửa hàng mẹ & bé nơi các anh hùng nhỏ tuổi nạp năng lượng với
                sữa ngon, bỉm êm, và thức ăn dặm bổ dưỡng. Tự hào được đồng
                hành, chăm sóc và tiếp thêm sức mạnh cho các chiến binh nhí.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-baby-pink hover:bg-baby-pink/90 text-white "
              >
                Mua ngay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-baby-pink text-baby-pink hover:bg-baby-pink/10"
              >
                Khám phá danh mục
              </Button>
            </div>
          </div>

          {/* Image Content - 2 columns */}
          <div className="relative md:col-span-1 sm:col-span-2 flex items-center justify-center">
            <div className="relative">
              <img
                src="./hero-img.jpg"
                alt="Hero image"
                className="w-full h-full object-cover [clip-path:polygon(20%_0%,_100%_0,_100%_100%,_0%_100%)] h-[calc(100vh-64px)]"
              />

              {/* Decorative elements */}
              <div className="absolute -right-4 top-1/4 h-72 w-72 rounded-full bg-baby-pink/10 blur-3xl" />
              <div className="absolute -left-4 bottom-1/4 h-72 w-72 rounded-full bg-baby-blue/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
