import { Button } from "@/components/ui/button";
import { Facebook, Phone, MapPin, LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
}

function ContactCard({
  icon: Icon,
  title,
  description,
  buttonText,
}: ContactCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2 p-6 cursor-pointer bg-baby-/10 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
      <Icon className="h-8 w-8 text-baby-pink" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500">{description}</p>
      <Button
        variant="outline"
        className="border-baby-pink text-baby-pink hover:bg-baby-pink/10 transition-colors duration-300"
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default function ContactInfo() {
  const contactCards = [
    {
      icon: Facebook,
      title: "Facebook",
      description: "Odile Baby Store",
      buttonText: "Theo dõi",
    },
    {
      icon: Phone,
      title: "Zalo & Điện thoại",
      description: "0782759831",
      buttonText: "Gọi ngay",
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      description: "100A Bế Văn Đàn, Q. Thanh Khê, Đà Nẵng",
      buttonText: "Chỉ đường",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-baby-pink sm:text-4xl md:text-5xl">
              Liên hệ với chúng tôi
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {contactCards.map((card, index) => (
              <ContactCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
