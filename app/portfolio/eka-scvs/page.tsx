import { VehicleListingPage } from "@/app/components/VehicleListingPage";
export default function Page() {
  return (
    <VehicleListingPage
      title="Small commercial vehicles"
      description="Practical electric vehicles for deliveries, cargo and passenger mobility in busy urban areas."
      ids={["eka-1-5t", "eka-3w-cargo", "eka-6s", "eka-6s", "eka-3s"]}
    />
  );
}
