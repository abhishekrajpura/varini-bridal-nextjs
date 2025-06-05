import { Metadata } from "next";
import { CartItems } from "@/components/cart/cart-items";
import { CartSummary } from "@/components/cart/cart-summary";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review and checkout your selected items",
};

export default function CartPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Shopping Cart</h1>
      
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CartItems />
        </div>
        
        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}