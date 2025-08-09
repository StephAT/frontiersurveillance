import { useState } from "react";
import SEO from "@/components/seo/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent",
        description: "Thank you for contacting FHS. We'll get back to you shortly.",
      });
      (e.currentTarget as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <SEO
        title="Contact FHS | Frontier in Health Surveillance"
        description="Contact FHS for partnerships, training, or research collaborations in health surveillance across South Sudan."
        path="/contact"
      />
      <section className="container mx-auto py-12">
        <header className="mb-8 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold">Contact us</h1>
          <p className="text-muted-foreground mt-2">Partner with us on surveillance, training, and research. We operate across Equatoria, Upper Nile, and Bahr el Ghazal.</p>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          <form onSubmit={onSubmit} className="p-6 rounded-lg border shadow-elevated space-y-4">
            <div>
              <label className="text-sm font-medium">Full name</label>
              <Input required name="name" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input required type="email" name="email" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Organization</label>
              <Input name="org" placeholder="Organization (optional)" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea required name="message" placeholder="How can we help?" rows={6} />
            </div>
            <Button type="submit" variant="hero" disabled={loading} className="w-full md:w-auto">
              {loading ? "Sending..." : "Send message"}
            </Button>
          </form>

          <div className="p-6 rounded-lg border">
            <h2 className="text-xl font-semibold">General inquiries</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              We collaborate with national and international health partners, government institutions, and companies.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p><span className="font-medium">Regions:</span> Equatoria, Upper Nile, and Bahr el Ghazal, South Sudan</p>
              <p><span className="font-medium">Approach:</span> One Health program framework</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
