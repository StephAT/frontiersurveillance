import SEO from "@/components/seo/SEO";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import heroImage from "@/assets/hero-fhs.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Target, ShieldCheck, Activity, Users, Microscope, Database, HeartPulse, Lightbulb, Handshake } from "lucide-react";

const About = () => {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Frontier in Health Surveillance (FHS)",
    url: typeof window !== 'undefined' ? window.location.origin : '',
    logo: "/lovable-uploads/8bde92d0-f73d-40f7-a296-3c4e08122064.png",
    areaServed: "South Sudan",
    slogan: "A Continent Protected from Health Threats",
  };

  return (
    <>
      <SEO
        title="About FHS | Frontier in Health Surveillance"
        description="Learn about FHS: mission, vision, goals, core values, thematic areas, and founders working to protect East Africa from health threats."
        path="/about"
        structuredData={orgLd}
      />
      <section className="container mx-auto py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">About Frontier in Health Surveillance (FHS)</h1>
          <p className="text-muted-foreground mt-2 max-w-3xl">Independent, non-governmental health consultancy established in September 2024, partnering to deliver effective health surveillance within the One Health framework across South Sudan.</p>
        </header>

        {/* Mission & Vision - alternating layout */}
        <div className="grid gap-10">
          {/* Row 1: Mission (text) + Image */}
          <section className="grid gap-6 md:grid-cols-2">
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-3 text-muted-foreground">
                To enhance regional and global health security through innovative surveillance and data-driven
                insights. We empower public health agencies, hospitals, and research partners with timely,
                actionable intelligence to prevent, detect, and respond to health threats.
              </p>
            </article>
            <figure className="rounded-xl overflow-hidden border shadow-elevated">
              <AspectRatio ratio={4/3}>
                <img
                  src={heroImage}
                  alt="FHS mission – data-driven public health surveillance across Africa"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </figure>
          </section>

          {/* Row 2: Image + Vision (text) */}
          <section className="grid gap-6 md:grid-cols-2">
            <figure className="rounded-xl overflow-hidden border shadow-elevated">
              <AspectRatio ratio={4/3}>
                <img
                  src="/lovable-uploads/global business leadership.jpg"
                  alt="Health research and innovation powering FHS vision"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </figure>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="mt-3 text-muted-foreground">
                A continent protected from health threats — where robust surveillance systems, collaborative
                research, and rapid response save lives and strengthen resilient health systems.
              </p>
            </article>
          </section>
        </div>

        {/* Leadership Section */}
        <section className="mt-16 rounded-xl border bg-muted/40 p-8">
          <header className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Meet Our Leadership Team</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Seasoned experts united by a shared passion for advancing health security through surveillance,
              research, and capacity building.
            </p>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="p-6 rounded-xl border bg-background shadow-elevated flex items-center gap-4">
              <Avatar className="h-16 w-16 ring-2 ring-primary/30">
                <AvatarImage
                  src="/lovable-uploads/b6678e28-a42c-4e0a-9b25-f4406ad15d94.png"
                  alt="Portrait of Mr. Hassan Ramadan Rajab, Co-Founder of FHS"
                />
                <AvatarFallback>HR</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Mr. Hassan Ramadan Rajab</p>
                <p className="text-sm text-muted-foreground">Co-Founder</p>
              </div>
            </article>

            <article className="p-6 rounded-xl border bg-background shadow-elevated flex items-center gap-4">
              <Avatar className="h-16 w-16 ring-2 ring-primary/30">
                <AvatarImage
                  src="/lovable-uploads/e8d6d3d4-abb5-4479-94c7-dc5ffcd09ed2.png"
                  alt="Portrait of Mr. David Adeoye Adedokun, Co-Founder of FHS"
                />
                <AvatarFallback>DA</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Mr. David Adeoye Adedokun</p>
                <p className="text-sm text-muted-foreground">Co-Founder</p>
              </div>
            </article>
          </div>
        </section>

        {/* Goals & Objectives */}
        <section className="mt-16">
          <header className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Goals & Objectives</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl">
              We exist to strengthen resilient health systems through timely surveillance, evidence, and rapid response.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2">
                <Target className="text-primary" aria-hidden />
                <h3 className="text-xl font-semibold">Our Goals</h3>
              </div>
              <p className="mt-3 text-muted-foreground">
                Build sustainable, interoperable, and people-centered surveillance systems that protect lives.
              </p>
            </article>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" aria-hidden />
                <h3 className="text-xl font-semibold">Key Objectives</h3>
              </div>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 text-primary" aria-hidden /><span>Strengthen early warning and event-based surveillance across human, animal, and environmental health.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 text-primary" aria-hidden /><span>Improve data quality, analysis, and visualization for faster decision-making.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 text-primary" aria-hidden /><span>Support outbreak preparedness, detection, and rapid response at national and subnational levels.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 text-primary" aria-hidden /><span>Build local capacity through training, mentorship, and implementation support.</span></li>
              </ul>
            </article>
          </div>
        </section>

        {/* Core Values */}
        <section className="mt-16">
          <header className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Core Values</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl">Principles that guide how we work with governments, partners, and communities.</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><ShieldCheck className="text-primary" aria-hidden /><h3 className="font-semibold">Integrity</h3></div>
              <p className="mt-2 text-muted-foreground">We uphold the highest ethical standards and stewardship of public resources.</p>
            </article>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><Handshake className="text-primary" aria-hidden /><h3 className="font-semibold">Collaboration</h3></div>
              <p className="mt-2 text-muted-foreground">We co-create with ministries, agencies, NGOs, and communities for sustainable impact.</p>
            </article>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><Lightbulb className="text-primary" aria-hidden /><h3 className="font-semibold">Innovation</h3></div>
              <p className="mt-2 text-muted-foreground">We apply practical, context-aware solutions and modern data tools.</p>
            </article>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><Microscope className="text-primary" aria-hidden /><h3 className="font-semibold">Evidence</h3></div>
              <p className="mt-2 text-muted-foreground">We are driven by data, research, and proven best practices.</p>
            </article>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><Users className="text-primary" aria-hidden /><h3 className="font-semibold">Equity</h3></div>
              <p className="mt-2 text-muted-foreground">We prioritize vulnerable populations and inclusive approaches.</p>
            </article>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><HeartPulse className="text-primary" aria-hidden /><h3 className="font-semibold">Accountability</h3></div>
              <p className="mt-2 text-muted-foreground">We commit to measurable results and transparent delivery.</p>
            </article>
          </div>
        </section>

        {/* Thematic Areas / Focus Areas */}
        <section className="mt-16">
          <header className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Thematic Areas / Focus Areas</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl">Our work spans the full public health surveillance lifecycle.</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><Activity className="text-primary" aria-hidden /><h3 className="font-semibold">Surveillance & Early Warning</h3></div>
              <p className="mt-2 text-muted-foreground">Event-based, indicator-based, and community surveillance for timely alerts.</p>
            </article>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><ShieldCheck className="text-primary" aria-hidden /><h3 className="font-semibold">Outbreak Preparedness & Response</h3></div>
              <p className="mt-2 text-muted-foreground">Rapid detection, investigation, and response with national and subnational EOCs.</p>
            </article>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><Users className="text-primary" aria-hidden /><h3 className="font-semibold">Capacity Building</h3></div>
              <p className="mt-2 text-muted-foreground">Training, mentorship, and workforce development for frontline teams.</p>
            </article>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><Database className="text-primary" aria-hidden /><h3 className="font-semibold">Data Systems & Analytics</h3></div>
              <p className="mt-2 text-muted-foreground">Data architecture, quality assurance, dashboards, and decision support.</p>
            </article>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><Microscope className="text-primary" aria-hidden /><h3 className="font-semibold">Operational Research</h3></div>
              <p className="mt-2 text-muted-foreground">Implementation research to inform policy and scale effective models.</p>
            </article>
            <article className="p-6 rounded-xl border bg-background shadow-elevated">
              <div className="flex items-center gap-2"><HeartPulse className="text-primary" aria-hidden /><h3 className="font-semibold">One Health & Zoonoses</h3></div>
              <p className="mt-2 text-muted-foreground">Integrating human, animal, and environmental health for holistic security.</p>
            </article>
          </div>
        </section>

        {/* Partners & Contact */}
        <section className="mt-16 rounded-xl border bg-muted/40 p-8">
          <header className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Partners & Contact</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We collaborate with ministries of health, hospitals, laboratories, universities, and NGOs.</p>
          </header>


          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link to="/contact">Become a Partner</Link>
            </Button>
            <Button variant="secondary" asChild>
              <a href="mailto:hello@fhs.org" aria-label="Email FHS">Email us</a>
            </Button>
          </div>
        </section>

      </section>
    </>
  );
};

export default About;
