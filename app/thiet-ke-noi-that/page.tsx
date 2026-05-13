import type { Metadata } from 'next';
import ServicePage from '@/components/pages/ServicePage';

export const metadata: Metadata = {
  title: 'Thiết Kế Nội Thất Cao Cấp | Nội Thất Đức Dương',
  description: 'Dịch vụ thiết kế nội thất cao cấp từ Nội Thất Đức Dương. Đội ngũ kiến trúc sư giàu kinh nghiệm, bản vẽ 3D chi tiết, giải pháp tối ưu cho biệt thự, chung cư, penthouse.',
};

const data = {
  title: 'Thiết Kế Nội Thất',
  subtitle: 'Dịch Vụ',
  heroImage: '/images/service-design.jpg',
  description: 'Đội ngũ kiến trúc sư giàu kinh nghiệm của Đức Dương luôn sáng tạo trong từng bản vẽ, mang đến giải pháp thiết kế tối ưu cho mọi không gian sống.',
  features: [
    { title: 'Tư Vấn Miễn Phí', desc: 'Lắng nghe nhu cầu và phân tích không gian để đề xuất phương án thiết kế phù hợp nhất.' },
    { title: 'Thiết Kế 3D Chi Tiết', desc: 'Bản vẽ 3D sống động giúp khách hàng hình dung rõ ràng không gian trước khi thi công.' },
    { title: 'Tư Vấn Vật Liệu', desc: 'Hỗ trợ lựa chọn vật liệu cao cấp, phối màu và chất liệu hài hòa.' },
    { title: 'Tối Ưu Công Năng', desc: 'Thiết kế thông minh, tối ưu mọi diện tích sử dụng trong không gian.' },
  ],
  processSteps: [
    'Khảo sát & tư vấn nhu cầu',
    'Lên ý tưởng & concept thiết kế',
    'Phát triển bản vẽ 2D & mặt bằng',
    'Thiết kế 3D chi tiết từng không gian',
    'Lựa chọn vật liệu & phối cảnh',
    'Hoàn thiện hồ sơ thiết kế',
  ],
  projectTypes: ['Biệt Thự', 'Chung Cư Cao Cấp', 'Penthouse', 'Nhà Phố', 'Văn Phòng', 'Showroom'],
};

export default function Page() {
  return <ServicePage {...data} />;
}
