"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Menu, Search, X, Heart, User } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SiteHeader() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium hover:text-baby-pink transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-lg font-medium hover:text-baby-pink transition-colors">
                Shop
              </Link>
              <Link href="/categories" className="text-lg font-medium hover:text-baby-pink transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-baby-pink transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-baby-pink transition-colors">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold text-baby-pink">Little Treasures</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-baby-pink transition-colors">
            Home
          </Link>
          <Link href="/shop" className="hover:text-baby-pink transition-colors">
            Shop
          </Link>
          <Link href="/categories" className="hover:text-baby-pink transition-colors">
            Categories
          </Link>
          <Link href="/about" className="hover:text-baby-pink transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-baby-pink transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-1 ml-auto">
          {showSearch ? (
            <div className="flex items-center">
              <Input
                className="w-[200px] md:w-[300px] border-baby-pink/20 focus-visible:ring-baby-pink"
                placeholder="Search products..."
                type="search"
              />
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
