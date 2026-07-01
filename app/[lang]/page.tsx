import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyMediseo from "@/components/WhyMediseo";
import AiSection from "@/components/AiSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Reveal />
      <Nav dict={dict} lang={lang} />
      <Hero dict={dict} />
      <HowItWorks dict={dict} />
      <WhyMediseo dict={dict} />
      <AiSection dict={dict} />
      <Pricing dict={dict} />
      <Testimonials dict={dict} />
      <Faq dict={dict} />
      <FinalCta dict={dict} lang={lang} />
      <Footer dict={dict} />
    </>
  );
}
