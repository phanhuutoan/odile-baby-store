import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-baby-pink/10 py-20 md:py-32">
      <div className="container px-4 md:px-6">
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
          <div className="relative md:col-span-2 flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3]">
              {/* Cloud shape mask using SVG */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 150"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1))",
                }}
              >
                <defs>
                  <clipPath id="cloud-mask">
                    <path
                      d="M20,80 
                         Q0,80 0,60 
                         Q0,40 20,40
                         Q20,20 40,20
                         Q60,20 60,40
                         Q80,0 120,0
                         Q160,0 180,40
                         Q200,40 200,60
                         Q200,80 180,80
                         Q180,100 160,100
                         Q140,100 140,80
                         Q120,120 80,120
                         Q40,120 20,80"
                      fill="white"
                    />
                  </clipPath>
                </defs>
                <image
                  href="https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/aisle.jpg?quality=82&strip=1"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#cloud-mask)"
                />
              </svg>

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
