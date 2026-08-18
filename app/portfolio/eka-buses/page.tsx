import { ProductCardNew } from "@/app/components/ProductCardNew";
import { PRODUCTS_DATA } from "@/data/products";

const page = () => {
  const slugFilter = ["eka-coach", "eka-lf", "eka-12m", "eka-9m", "eka-7m"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold text-center">EKA Buses</h1>
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS_DATA.filter((vehicle) =>
            slugFilter.includes(vehicle.id),
          ).map((vehicle) => (
            <ProductCardNew key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
