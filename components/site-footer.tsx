import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-baby-pink/5 border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-baby-pink">Little Treasures</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Premium baby products for your little one. Safe, stylish, and sustainable choices.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-baby-pink dark:text-gray-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-baby-pink dark:text-gray-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-baby-pink dark:text-gray-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Help</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">About</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-baby-pink">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Little Treasures. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="#" className="hover:text-baby-pink">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-baby-pink">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-baby-pink">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
