import { ServiceBlockProps } from "@/lib/types/servicesBlock";
import Link from "next/link";
import CallToActionBtn from "../CallToActionBtn";


const ServiceBlock = ({ title, description, items = [] }: ServiceBlockProps) => {
  return (<div>
    <ul>
      <Link href="/services"><h3 className="text-2xl font-bold  text-additional mb-4 tracking-wider hover-interaction hover:text-primary">{title}</h3></Link>
      <p className="text-justify mb-6 lg:text-xl">{description}</p>

      {items.map(item => (
        <li key={item.name} className="mb-4">
            <Link href={`/services/${item.id}`}>
          <ul className="text-lg text-additional font-bold tracking-wider hover-interaction hover:text-primary lg:text-xl">{item.name}

          {item.type?.map(type => (
            <li key={type.name} className="ml-4 mt-2 text-text font-normal tracking-normal text-sm lg:text-lg">
              <p className=" italic">{type.name}</p>
            </li>

          ))}
          </ul>
          </Link>

        </li>
      ))}
    </ul>
    <div className="flex justify-center mb-5 md:justify-start">
    <CallToActionBtn/>
    </div>
    </div>
  );
};

export default ServiceBlock;
