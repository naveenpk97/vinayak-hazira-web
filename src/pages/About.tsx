import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Vinayak Supermarket Hazira</title>
        <meta name="description" content="Vinayak Supermarket has been serving Hazira since 1997 with quality products and warm service." />
        <link rel="canonical" href="/about" />
      </Helmet>

      <main className="container py-8">
        <h1 className="text-2xl font-semibold mb-6">About Us</h1>
        <article className="prose prose-neutral max-w-none">
          <p>
            Established in 1997, Vinayak Supermarket has proudly served the
            Hazira community in Surat, Gujarat for over two decades. We believe
            in providing fresh produce, daily essentials, and household needs at
            fair prices — always with a friendly smile.
          </p>
          <p>
            Our store is a neighborhood hub where families shop with confidence.
            We support local suppliers and aim to build long-term relationships
            with our customers by focusing on quality, convenience, and trust.
          </p>
          <p>
            Thank you for making us a part of your everyday life.
          </p>
        </article>
      </main>
    </>
  );
};

export default About;
