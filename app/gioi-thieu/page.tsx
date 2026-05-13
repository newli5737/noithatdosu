import type { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
  title: 'Về Chúng Tôi | Nội Thất Đức Dương - 25+ Năm Kinh Nghiệm',
  description: 'Tìm hiểu về Nội Thất Đức Dương - hơn 25 năm kinh nghiệm thiết kế và thi công nội thất gỗ óc chó cao cấp. 3 nhà máy, 300+ nhân sự, 3000+ dự án hoàn thành.',
  openGraph: {
    title: 'Về Chúng Tôi | Nội Thất Đức Dương',
    description: 'Hơn 25 năm kinh nghiệm thiết kế và thi công nội thất cao cấp.',
  },
};

export default function Page() {
  return <AboutPage />;
}
