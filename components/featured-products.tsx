import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Organic Cotton Onesie",
      price: "$24.99",
      image: "/placeholder.svg?height=200&width=200",
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Wooden Teething Toy",
      price: "$19.99",
      image: "/placeholder.svg?height=200&width=200",
      badge: "Eco-friendly",
    },
    {
      id: 3,
      name: "Baby Sleep Sack",
      price: "$34.99",
      image: "/placeholder.svg?height=200&width=200",
      badge: "New",
    },
    {
      id: 4,
      name: "Silicone Feeding Set",
      price: "$29.99",
      image: "/placeholder.svg?height=200&width=200",
      badge: "Popular",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-coiny font-bold text-baby-pink sm:text-4xl md:text-5xl">
              Sản phẩm bán chạy
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Bạn hãy cùng xem một số sản phẩm thú vị của shop nhé!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    alt={product.name}
                    className="aspect-square w-full object-cover"
                    height="200"
                    src={product.image || "/placeholder.svg"}
                    width="200"
                  />
                  {product.badge && (
                    <Badge className="absolute right-2 top-2 bg-baby-pink text-white">
                      {product.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="line-clamp-1 text-lg">
                  {product.name}
                </CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {product.price}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-baby-pink hover:bg-baby-pink/90 text-white">
                  Thêm vào giỏ hàng
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-baby-pink text-baby-pink hover:bg-baby-pink/10"
          >
            Xem tất cả sản phẩm
          </Button>
        </div>
      </div>
    </section>
  );
}
