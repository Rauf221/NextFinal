"use client";
import DefaultLayout from "@/layouts/layout";
import "../../styles/globals.css";
import WishlistItem from "@/components/Pages/wishlist";


export default function WishlistPage() {
  return (
    <DefaultLayout>
      <main className="mt-10">
       <WishlistItem wishlistItems={[]} removeFromWishlist={() => {}} />
      </main>
    </DefaultLayout>
  );
}
