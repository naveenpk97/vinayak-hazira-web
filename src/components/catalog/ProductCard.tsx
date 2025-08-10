import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  imageSrc: string;
}

const ProductCard = ({ product, imageSrc }: ProductCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-base leading-tight">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <img
          src={imageSrc}
          alt={product.alt}
          loading="lazy"
          className="w-full h-40 object-contain rounded-md bg-muted"
        />
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto flex items-center justify-between">
        <span className="font-semibold">₹{product.price.toFixed(0)}</span>
        <Button size="sm" variant="secondary">Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
