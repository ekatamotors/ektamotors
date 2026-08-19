import { Card } from "@/components/ui/card";

const stackItems = [
  {
    title: "ECO\nPlatform",
    description:
      "Redefining mobility with speed, versatility, and sustainability",
    image: "/images/ekastack/ECO-Platform.jpg",
    alt: "EV chassis and battery platform",
  },
  {
    title: "EKA\nIntellify",
    description: "Smart software driving intelligence and adaptability",
    image: "/images/ekastack/EKA-Connect.jpg",
    alt: "Connected vehicle dashboard network",
  },
  {
    title: "EKA\nConnect",
    description: "Data-powered insights for seamless fleet management",
    image: "/images/ekastack/EKA-Intellify.jpg",
    alt: "Fleet management on tablet",
  },
];

export default function EkaStack() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      {/* Section header */}
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">
        EKA Stack
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {stackItems.map((item) => (
          <Card
            key={item.title}
            className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-6 hover:border-neutral-700 transition-colors"
          >
            <div>
              <h3 className="text-3xl font-semibold leading-tight whitespace-pre-line text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-lg text-white leading-relaxed ">
                {item.description}
              </p>
            </div>

            <div className="mt-auto rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
