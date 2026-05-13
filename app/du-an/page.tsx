import type { Metadata } from 'next';
import ProjectsPage from './ProjectsPage';

export const metadata: Metadata = {
  title: 'Dự Án Nội Thất Cao Cấp | Nội Thất Đức Dương',
  description: 'Khám phá hơn 3000+ dự án thiết kế và thi công nội thất cao cấp từ Đức Dương. Biệt thự, chung cư, penthouse, nhà phố với chất liệu gỗ óc chó.',
};

export default function Page() {
  return <ProjectsPage />;
}
