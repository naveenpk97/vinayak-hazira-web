import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import apples from "@/assets/products/apples.jpg";
import bananas from "@/assets/products/bananas.jpg";
import bread from "@/assets/products/bread.jpg";
import milk from "@/assets/products/milk.jpg";
import oj from "@/assets/products/orange-juice.jpg";
import rice from "@/assets/products/rice.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/catalog/ProductCard";

const Index = () => {
  const imageMap: Record<string, string> = {
    apples,
    bananas,
    bread,
    milk,
    "orange-juice": oj,
    "basmati-rice": rice,
  };

  const featured = products.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Vinayak Supermarket Hazira | Since 1997</title>
        <meta name="description" content="Welcome to Vinayak Supermarket in Hazira — your neighborhood store for fresh groceries since 1997." />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Vinayak Supermarket',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hazira',
            addressRegion: 'Gujarat',
            addressCountry: 'IN',
          },
          telephone: '+91-9876543210',
          url: '/',
        })}</script>
      </Helmet>

      <header className="container py-14 md:py-20 text-center">
        <p className="text-sm text-muted-foreground">Since 1997</p>
        <h1 className="text-4xl md:text-5xl font-semibold mt-2">Vinayak Supermarket</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Fresh groceries, daily essentials, and friendly service for the Hazira community.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild>
            <Link to="/catalog">Shop Catalog</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/gift-cards">Buy Gift Card</Link>
          </Button>
        </div>
      </header>

      <main>
        <section className="container py-8">
          <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} imageSrc={imageMap[p.id]} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
