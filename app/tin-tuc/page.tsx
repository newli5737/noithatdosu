import type { Metadata } from 'next';
import BlogListPage from './BlogListPage';

export const metadata: Metadata = {
  title: 'Tin Tức & Xu Hướng Nội Thất | Nội Thất Đức Dương',
  description: 'Cập nhật xu hướng thiết kế nội thất, kiến thức vật liệu gỗ óc chó, kinh nghiệm thi công và tin tức mới nhất từ Nội Thất Đức Dương.',
};

export default function Page() {
  return <BlogListPage />;
}
