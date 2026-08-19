import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  CareerCta,
  Education,
  Experience,
  Projects,
  Skills,
  Strengths,
} from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Vishal Chauhan | Aspiring Web Developer & Python Learner";
const description =
  "Portfolio of Vishal Chauhan, an aspiring web developer and Python learner from Thane, Maharashtra, seeking internship and entry-level opportunities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Vishal Chauhan",
          jobTitle: "Aspiring Web Developer",
          email: "mailto:vishalkrishnachauhan@email.com",
          telephone: "+91 8369603220",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Thane (West)",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          knowsLanguage: ["English", "Hindi", "Marathi"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Strengths />
        <CareerCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
