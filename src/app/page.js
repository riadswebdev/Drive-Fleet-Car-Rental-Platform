import AvailableCarsSection from "@/components/Home/AvailableCarsSection";
import Banner from "@/components/Home/Banner";
import PremiumBrands from "@/components/Home/PremiumBrands";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Footer from "@/components/shared/footer/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <PremiumBrands/>
      <AvailableCarsSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
