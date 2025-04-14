import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import Categories from "@/components/categories";
import ContactInfo from "@/components/contact-info";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <ContactInfo />
    </main>
  );
}
