import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Filter, Search, Heart } from "lucide-react";
import { ProductImage } from "@/components/ui/product-image";

const dummyProducts = [
  {
    id: 1,
    name: "Organic Cotton Onesie",
    price: 29.99,
    image: "/placeholder-baby-1.jpg",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Soft Plush Teddy Bear",
    price: 19.99,
    image: "/placeholder-baby-2.jpg",
    category: "Toys",
  },
  {
    id: 3,
    name: "Baby Care Essential Kit",
    price: 49.99,
    image: "/placeholder-baby-3.jpg",
    category: "Care",
  },
  {
    id: 4,
    name: "Wooden Building Blocks",
    price: 34.99,
    image: "/placeholder-baby-4.jpg",
    category: "Toys",
  },
  {
    id: 5,
    name: "Natural Baby Lotion",
    price: 15.99,
    image: "/placeholder-baby-5.jpg",
    category: "Care",
  },
  {
    id: 6,
    name: "Cotton Baby Blanket",
    price: 39.99,
    image: "/placeholder-baby-6.jpg",
    category: "Bedding",
  },
  {
    id: 7,
    name: "Musical Mobile",
    price: 44.99,
    image: "/placeholder-baby-7.jpg",
    category: "Toys",
  },
  {
    id: 8,
    name: "Baby Food Maker",
    price: 79.99,
    image: "/placeholder-baby-8.jpg",
    category: "Feeding",
  },
] as const;

export default function ShopPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Shop</h1>
          <p className="text-muted-foreground">
            Browse our collection of premium baby products
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Select defaultValue="all">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="toys">Toys</SelectItem>
                <SelectItem value="care">Care</SelectItem>
                <SelectItem value="bedding">Bedding</SelectItem>
                <SelectItem value="feeding">Feeding</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-8 w-full md:w-[300px]"
              type="search"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:border-baby-pink"
            >
              <div className="absolute right-4 top-4 z-10">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
                >
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>
              <ProductImage className="aspect-square transition-transform group-hover:scale-105" />
              <div className="p-4">
                <h3 className="font-medium truncate">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-base font-medium">${product.price}</p>
                  <Button
                    size="sm"
                    className="bg-baby-pink hover:bg-baby-pink/90 text-white"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 py-4">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="font-medium">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
