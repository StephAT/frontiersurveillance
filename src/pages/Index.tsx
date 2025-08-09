import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Activity, Microscope, Hospital, Users } from "lucide-react";

const foundersMessage = `We are thrilled to have you here. At FHS, we are dedicated to strengthening health systems through real-time disease surveillance, data-driven insights, and innovative public health solutions. Guided by the One Health approach, we work to protect communities in South Sudan and beyond from emerging health threats.\n\nHealth challenges do not exist in isolation because of the complex interactions between humans, animals, and our environment. That is why we monitor, respond, and prevent. By harnessing cutting-edge technology, epidemiological research, and strategic partnerships, we turn health data into action, ensuring timely interventions that save lives.\n\nTogether, we can build a healthier, more resilient future. Welcome to FHS!\nCo-founders, FHS`;

const Index = () => {
  

  return (
    <>
      <SEO
        title="FHS | Frontier in Health Surveillance"
        description="FHS strengthens health security in South Sudan through innovative surveillance, data-driven insights, and One Health partnerships."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Frontier in Health Surveillance (FHS)",
          logo: "/lovable-uploads/8bde92d0-f73d-40f7-a296-3c4e08122064.png",
        }}
      />

      <section className="bg-secondary/40 border-y">
        <div className="container mx-auto py-16 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in">
            Drive Health Security Forward with FHS
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            We strengthen health systems through real-time disease surveillance, data-driven insights, and One Health partnerships across South Sudan and beyond.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-3">
            <Link to="/about"><Button variant="hero">Discover More</Button></Link>
            <Link to="/contact"><Button variant="secondary">Contact Us</Button></Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-lg border shadow-elevated">
            <h3 className="text-xl font-semibold">Infectious Diseases Monitoring</h3>
            <p className="mt-2 text-muted-foreground text-sm">Real-time monitoring, reporting, and response to emerging and re-emerging diseases.</p>
          </div>
          <div className="p-6 rounded-lg border shadow-elevated">
            <h3 className="text-xl font-semibold">Global Health Research & Training</h3>
            <p className="mt-2 text-muted-foreground text-sm">Malaria, HIV, and Antimicrobial Resistance (AMR) research with partner capacity building.</p>
          </div>
          <div className="p-6 rounded-lg border shadow-elevated">
            <h3 className="text-xl font-semibold">Nutrition in Emergency</h3>
            <p className="mt-2 text-muted-foreground text-sm">Surveillance and interventions to mitigate nutrition-related crises.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="text-center space-y-2">
          <span className="text-sm font-medium text-primary">Specialized</span>
          <h2 className="text-2xl md:text-3xl font-semibold">Health Sectors We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with public health agencies, providers, NGOs, and researchers to deliver surveillance and research with precision and impact.
          </p>
        </div>
        <div className="mt-8 rounded-lg border bg-background">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
            <article className="p-6 flex items-start gap-4">
              <Activity className="h-8 w-8 text-primary shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Public Health Agencies</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time disease surveillance, outbreak analytics, and early-warning systems.
                </p>
              </div>
            </article>
            <article className="p-6 flex items-start gap-4">
              <Hospital className="h-8 w-8 text-primary shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Hospitals & Clinics</h3>
                <p className="text-sm text-muted-foreground">
                  Facility reporting, case-based tracking, and infection prevention insights.
                </p>
              </div>
            </article>
            <article className="p-6 flex items-start gap-4">
              <Microscope className="h-8 w-8 text-primary shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Academic & Research</h3>
                <p className="text-sm text-muted-foreground">
                  AMR, malaria, and HIV research with training and capacity building.
                </p>
              </div>
            </article>
            <article className="p-6 flex items-start gap-4">
              <Users className="h-8 w-8 text-primary shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">NGOs & Humanitarian Orgs</h3>
                <p className="text-sm text-muted-foreground">
                  Emergency nutrition surveillance and One Health field operations.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="p-6 md:p-8 rounded-lg border bg-secondary/50">
          <h2 className="text-2xl font-semibold">A message from our co-founders</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 items-center">
            <p className="whitespace-pre-line text-muted-foreground leading-relaxed">{foundersMessage}</p>
            <div className="relative">
              <Carousel opts={{ align: "center", loop: true }}>
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src="/lovable-uploads/b6678e28-a42c-4e0a-9b25-f4406ad15d94.png"
                      alt="Co-founder portrait"
                      loading="lazy"
            className="h-96 md:h-[32rem] w-full object-contain rounded-lg border bg-background"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="/lovable-uploads/e8d6d3d4-abb5-4479-94c7-dc5ffcd09ed2.png"
                      alt="Co-founder portrait"
                      loading="lazy"
                      className="h-96 md:h-[32rem] w-full object-contain rounded-lg border bg-background"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
