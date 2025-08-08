export interface BookingFormData {
    name: string;
    phone: string;
    email?: string;
    services: string[];
    message?: string;
    date: string,
  }

export interface AppointmentFormProps {
    onSuccess?: () => void;
    showSuccessModal?: boolean;
  }