import { ENDPOINTS } from '@/shared/api/constants';
import { notify } from '@/shared/helpers';

type requestData = {
  email: string;
  subject: string;
  message: string;
};

export const sendEmail = async (data: requestData): Promise<boolean> => {
  try {
    const response = await fetch(ENDPOINTS.sendMessage, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        subject: data.subject,
        message: data.message
      })
    });

    if (response.ok) {
      notify.success({ message: 'Your message has been sent successfully!' });
      return true;
    } else {
      notify.error({ message: 'Failed to send your message. Please try again later.' });
      return false;
    }
  } catch (error) {
    notify.error({ message: 'Something went wrong while sending the email.' });
    return false;
  }
};
