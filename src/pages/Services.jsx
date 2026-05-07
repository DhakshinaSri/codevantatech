import ServicesList from "@/components/service-components/ServicesList";
import Process from "@/components/service-components/Process";
import Commitment from "@/components/service-components/Commitment";
import OurWork from "@/components/service-components/OurWork";
import HowWeWork from "@/components/service-components/HowWeWork";

export default function Services() {
  return (
    <div className="pt-20">
      <ServicesList />
      <Process />
      <Commitment />
      <OurWork />
      <HowWeWork />
    </div>
  );
}