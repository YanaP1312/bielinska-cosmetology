import { getTranslations } from "next-intl/server";
import ServiceBlock from "./ServiceBlock";
import { ServicesData } from "@/lib/types/servicesBlock";



const ServicesList = async () => {
  const t = await getTranslations(); 
  const services = t.raw("services") as ServicesData;

  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
   <div className="">
     
        <ServiceBlock key={services.face_care.id} title={services.face_care.title} description={services.face_care.description}  items={services.face_care.items} />
        <ServiceBlock key={services.body_care.id} title={services.body_care.title} items={services.body_care.items || []} description={services.body_care.description}/>
        <ServiceBlock key={services.devices.id} title={services.devices.title} items={services.devices.items || []} description={services.devices.description} />
        <ServiceBlock key={services.laser.id} title={services.laser.title} items={services.laser.items || []} description={services.laser.description} />

    
    </div>
  );
};

export default ServicesList;

