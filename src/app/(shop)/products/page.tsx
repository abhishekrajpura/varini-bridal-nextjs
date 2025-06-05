import { Metadata } from "next";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSort } from "@/components/products/product-sort";

export const metadata: Metadata = {
  title: "All Products",
  description: "Browse our complete collection of bridal jewelry",
};

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
        <p className="text-muted-foreground">Browse our complete collection of bridal jewelry</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <aside className="md:col-span-1">
          <ProductFilters />
        </aside>
        
        <section className="md:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Showing 24 products</p>
            <ProductSort />
          </div>
          
          <ProductGrid />
        </section>
      </div>
    </div>
  );
}