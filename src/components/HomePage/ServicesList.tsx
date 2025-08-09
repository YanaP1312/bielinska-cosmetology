import { getTranslations } from "next-intl/server";
import ServiceBlock from "./ServiceBlock";
import { ServicesData } from "@/lib/types/servicesBlock";
import Image from "next/image";
import PhotoCard from "../PhotoCard";



const ServicesList = async () => {
  const t = await getTranslations(); 
  const services = t.raw("services") as ServicesData;

  return (
    
   <div className="grid gap-6">
     <div className="p-6 bg-white rounded-xl shadow-sm grid md:grid-cols-2 md:gap-5 lg:grid-cols-[1fr_2fr]">
        <ServiceBlock key={services.face_care.id} title={services.face_care.title} description={services.face_care.description}  items={services.face_care.items} />
        <div className="md:grid md:grid-cols-1 md:gap-5 lg:grid-cols-2">
            <div className="md:flex md:flex-col md:gap-5">
<div className="overflow-hidden border border-primary rounded-xl h-[419px] md:h-[438px]">
        <Image src="/images/services/face/face_5.jpeg" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services "/> 
        </div>
        <div className="hidden overflow-hidden border border-primary rounded-xl h-[438px] md:block">
        <Image src="/images/services/face/face_2.jpeg" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services "/> 
        </div>
        </div>
        <div className="flex flex-col gap-5">
        <div className="hidden w-full overflow-hidden border border-primary rounded-xl h-[438px] lg:block">
        <Image src="/images/services/face/face_4.jpeg" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services"/></div>
        <div className="hidden w-full overflow-hidden border border-primary rounded-xl h-[438px] lg:block">
        <Image src="/images/services/face/face_6.jpeg" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services"/></div>
        </div>
        </div>
        </div>


        <div className="p-6 bg-white rounded-xl shadow-sm">
        <ServiceBlock key={services.body_care.id} title={services.body_care.title} items={services.body_care.items || []} description={services.body_care.description}/>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 ">

        <PhotoCard><Image src="/images/services/body/body_2.png" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services"/> </PhotoCard>
        <PhotoCard className="hidden md:block"><Image src="/images/services/body/body_1.png" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services"/> </PhotoCard>
        <PhotoCard className="hidden md:block"><Image src="/images/services/body/body_5.png" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services"/></PhotoCard>
        </div>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm">
        <ServiceBlock key={services.devices.id} title={services.devices.title} items={services.devices.items || []} description={services.devices.description} />
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 ">
            <PhotoCard><Image src="/images/services/device/device_2.png" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services"/></PhotoCard>
            <PhotoCard className="hidden md:block"><Image src="/images/services/device/device_1.png" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services"/> </PhotoCard>
         <PhotoCard className="hidden md:block">
         <Image src="/images/services/device/device_3.png" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services"/>
         </PhotoCard>
        
         
        </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
       
        <ServiceBlock key={services.laser.id} title={services.laser.title} items={services.laser.items || []} description={services.laser.description} />
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 ">
            <PhotoCard><Image src="/images/services/laser/services_2.jpg" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services"/> </PhotoCard>
            <PhotoCard className="hidden md:block"><Image src="/images/services/laser/services_3.jpg" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services"/> </PhotoCard>
            <PhotoCard className="hidden md:block"><Image src="/images/services/laser/services_5.jpg" alt="Tetiana Bielinska foto" width={328} height={491} className="img-services"/> </PhotoCard>
        
        
        
        </div>
       
        </div>

    
    </div>
  );
};

export default ServicesList;

