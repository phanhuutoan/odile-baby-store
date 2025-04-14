import Link from "next/link";
import { Facebook, Phone, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-baby-pink/5 border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-baby-pink">
              Odile Baby Store
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Chuyên cung cấp đồ dùng cho bé chất lượng cao
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61574859463334"
                className="text-gray-500 hover:text-baby-pink dark:text-gray-400 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://zalo.me/0942119612"
                className="text-gray-500 hover:text-baby-pink dark:text-gray-400 transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Zalo</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Liên hệ</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>0942119612</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>100A Bế Văn Đàn, Q. Thanh Khê, Đà Nẵng</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Giờ mở cửa</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>Thứ 2 - Thứ 7: 8:00 - 20:00</li>
              <li>Chủ nhật: 9:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Odile Baby Store. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
