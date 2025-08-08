type Subtype = { id: string; name: string };
type Type = { id: string; name: string; subtypes?: Subtype[] };
type Item = {
  id: string;
  name: string;
  type?: Type[];
  description?: string;
};
export type ServiceBlockProps = {
  title: string;
  description?: string;
  items?: Item[];
};

export interface ServicesData {
    [key: string]: {
      id: string;
      title: string;
      description?: string;
      items?: {
        id: string;
        name: string;
        type?: {
          id: string;
          name: string;
          subtypes?: {
            id: string;
            name: string;
          }[];
        }[];
        description?: string;
      }[];
    };
  }