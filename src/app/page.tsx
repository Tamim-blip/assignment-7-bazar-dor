import BaseUrl from "@/Api/BaseUrl";
import HeroBanner from "@/components/heroBanner/heroBanner";
import ProductCard from "@/components/ProductCard/productCard";
import TProduct from "@/type/type";


export default async function Home() {
  const res = await fetch(`${BaseUrl}/products`)
  const data : TProduct[] = await res.json()



  const priceIncrease = data.filter(product => product.change.dir === "up")
  const priceDecrease = data.filter(product => product.change.dir === "down")

  return (
   <div className="container mx-auto">
   <HeroBanner></HeroBanner>
   {/* PriceIncrease */}
   <div>
    <p className="font-bold text-2xl my-10"> <span className="text-red-600" >▲</span> আজ দাম বেড়েছে</p>
   <div className="grid grid-cols-3 gap-3 mt-5">
     {
      priceIncrease.slice(1,8).map(product => <ProductCard key={product.id} product = {product}></ProductCard>)
    }
   </div>
   </div>


   {/* Price Decress */}

   <div>
    
    <p className="font-bold text-2xl my-10"> <span className="text-green-600" >▲</span> আজ দাম কমেছে</p>

   <div className="grid grid-cols-3 gap-3 mt-5">
     {
      priceDecrease.slice(1,9).map(product => <ProductCard key={product.id} product = {product}></ProductCard>)
    }
   </div>
   </div>

   {/* All Product */}

   <div>
   <div className="my-10">
     <p className="font-bold text-2xl">সব পণ্য</p>
    <p className="text-sm text-base-content">মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
   </div>

    <div className="grid grid-cols-3 gap-3 mt-5">
     {
      data.map(product => <ProductCard key={product.id} product = {product}></ProductCard>)
    }
   </div>
   </div>
   </div>
  );
}
