import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Coverage } from "@/components/Coverage";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const title = "Movara Movers | Professional Movers & Packers in UAE";
const description =
  "Movara Movers offers professional home, office, and international moving services all over UAE — Dubai, Sharjah, Abu Dhabi, Ajman, RAK, Fujairah, Umm Al Quwain. Safe, on-time, and reliable relocation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://movaramovers.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          name: "Movara Movers",
          slogan: "We Move, You Relax!",
          url: "https://movaramovers.com",
          email: "info@movaramovers.com",
          telephone: "+971559057949",
          address: { "@type": "PostalAddress", addressLocality: "Sharjah", addressCountry: "AE" },
          areaServed: [
            "Dubai",
            "Sharjah",
            "Abu Dhabi",
            "Ajman",
            "Ras Al Khaimah",
            "Fujairah",
            "Umm Al Quwain",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Coverage />
        <Process />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
