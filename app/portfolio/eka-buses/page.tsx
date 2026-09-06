import { VehicleListingPage } from "@/app/components/VehicleListingPage";
export default function Page() {
  return (
    <VehicleListingPage
      title="Electric buses"
      description="Passenger vehicles for city routes, staff transport, shuttle services and longer-distance operations."
      ids={["eka-coach", "eka-lf", "eka-12m", "eka-9m", "eka-7m"]}
    />
  );
}
