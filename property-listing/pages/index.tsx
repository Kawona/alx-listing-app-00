import Header from "../components/layout/Header";
import Pill from "../components/Pill";
import PropertyCard from "../components/PropertyCard";
import { HERO_IMAGE, PROPERTYLISTINGSAMPLE } from "../constants";

export default function HomePage() {
  const filters = ["Top Villa", "Self Checkin", "Beachfront", "Mountain View"];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-64 flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: "cover" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          Find your favorite place here!
        </h1>
        <p className="text-lg mt-2">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters */}
      <section className="p-6 flex gap-3 flex-wrap justify-center">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Property Listings */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </section>
    </div>
  );
}