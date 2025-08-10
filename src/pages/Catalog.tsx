import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products, categories } from "@/data/products";
import apples from "@/assets/products/apples.jpg";
import bananas from "@/assets/products/bananas.jpg";
import bread from "@/assets/products/bread.jpg";
import milk from "@/assets/products/milk.jpg";
import oj from "@/assets/products/orange-juice.jpg";
import rice from "@/assets/products/rice.jpg";
import ProductCard from "@/components/catalog/ProductCard";

const Catalog = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | "all">("all");

  const imageMap: Record<string, string> = {
    apples,
    bananas,
    bread,
    milk,
    "orange-juice": oj,
    "basmati-rice": rice,
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = (p.name + p.description)
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = category === "all" ? true : p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <>
      <Helmet>
        <title>Catalog | Vinayak Supermarket Hazira</title>
        <meta name="description" content="Browse Vinayak Supermarket's catalog — fresh produce, dairy, bakery, beverages, and more." />
        <link rel="canonical" href="/catalog" />
      </Helmet>

      <main className="container py-8">
        <h1 className="text-2xl font-semibold mb-6">Catalog</h1>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <div className="md:col-span-2">
            <Label htmlFor="search" className="sr-only">Search</Label>
            <Input
              id="search"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div>
            <Label className="sr-only">Category</Label>
            <Select value={category} onValueChange={(v) => setCategory(v as any)}>
              <SelectTrigger>
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} imageSrc={imageMap[p.id]} />
          ))}
          {filtered.length === 0 && (
            <p className="text-muted-foreground">No products found. Try a different search.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Catalog;
