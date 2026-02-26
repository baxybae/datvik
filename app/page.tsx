import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Demo from "@/components/demo";
import Integrations from "@/components/integrations";
import UseCases from "@/components/use-cases";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Features />
      <Divider />
      <HowItWorks />
      <Divider />
      <Demo />
      <Divider />
      <Integrations />
      <Divider />
      <UseCases />
      <Divider />
      <Pricing />
      <Divider />
      <Testimonials />
      <Divider />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
