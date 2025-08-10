import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Vinayak Supermarket Hazira</title>
        <meta name="description" content="Reach Vinayak Supermarket — Hazira, Surat, Gujarat. Phone, email, and map location." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <main className="container py-8">
        <h1 className="text-2xl font-semibold mb-6">Contact</h1>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-4 text-sm">
            <div>
              <h2 className="font-medium mb-1">Address</h2>
              <p className="text-muted-foreground">Hazira, Surat, Gujarat, India</p>
            </div>
            <div>
              <h2 className="font-medium mb-1">Phone</h2>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
            <div>
              <h2 className="font-medium mb-1">Email</h2>
              <p className="text-muted-foreground">hello@vinayaksupermarket.in</p>
            </div>
          </div>
          <div>
            <div className="rounded-md overflow-hidden border">
              <iframe
                title="Google Map - Hazira Gujarat"
                src="https://www.google.com/maps?q=Hazira%2C%20Gujarat&output=embed"
                width="100%"
                height="350"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
