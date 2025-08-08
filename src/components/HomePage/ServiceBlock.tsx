import { ServiceBlockProps } from "@/lib/types/servicesBlock";


const ServiceBlock = ({ title, description, items = [] }: ServiceBlockProps) => {
  return (
    <ul className="p-6 bg-white rounded-xl shadow-sm">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p>{description}</p>

      {items.map(item => (
        <li key={item.name} className="mb-4">
          <ul className="font-semibold text-lg">{item.name}

          {item.type?.map(type => (
            <li key={type.name} className="ml-4 mt-2">
              <p className="text-sm">{type.name}</p>

              {type.subtypes?.map(sub => (
                <div key={sub.name} className="ml-4 mt-1">
                  <p className="text-sm italic text-gray-600">{sub.name}</p>
                </div>
              ))}
            </li>

          ))}
          </ul>

        </li>
      ))}
    </ul>
  );
};

export default ServiceBlock;
