import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Clothing",
      image: "/placeholder.svg?height=150&width=150",
      count: "124 items",
    },
    {
      id: 2,
      name: "Toys",
      image: "/placeholder.svg?height=150&width=150",
      count: "87 items",
    },
    {
      id: 3,
      name: "Feeding",
      image: "/placeholder.svg?height=150&width=150",
      count: "56 items",
    },
    {
      id: 4,
      name: "Nursery",
      image: "/placeholder.svg?height=150&width=150",
      count: "93 items",
    },
    {
      id: 5,
      name: "Bath & Skincare",
      image: "/placeholder.svg?height=150&width=150",
      count: "42 items",
    },
    {
      id: 6,
      name: "Travel",
      image: "/placeholder.svg?height=150&width=150",
      count: "38 items",
    },
  ];

  return (
    <section className="bg-baby-pink/10 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-baby-pink sm:text-4xl md:text-5xl">
              Mua sắm theo danh mục
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Bạn cần tìm kiếm các sản phẩm như sữa, bỉm, đồ ăn dặm?
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group"
            >
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="mb-3 rounded-full bg-baby-pink/10 p-2">
                    <img
                      alt={category.name}
                      className="aspect-square h-16 w-16 object-cover"
                      height="64"
                      src={category.image || "/placeholder.svg"}
                      width="64"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-baby-pink group-hover:underline">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
