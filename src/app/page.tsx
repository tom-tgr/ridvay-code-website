import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { Features } from "@/components/Features";
import { Privacy } from "@/components/Privacy";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Integrations />
        <Features />
        <Privacy />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
