import type { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: 'Liên Hệ | Nội Thất Đức Dương - Hotline 0906 23 25 28',
  description: 'Liên hệ Nội Thất Đức Dương để được tư vấn thiết kế và thi công nội thất. Showroom Hà Nội, Hải Phòng. Hotline: 0906 23 25 28.',
};

export default function Page() {
  return <ContactPage />;
}
