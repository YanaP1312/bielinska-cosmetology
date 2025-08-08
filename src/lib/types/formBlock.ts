export interface BookingFormData {
    name: string;
    phone: string;
    email?: string;
    services: string[];
    message?: string;
  }

export interface AppointmentFormProps {
    onSuccess?: () => void;
    showSuccessModal?: boolean;
  }