import type { Metadata } from 'next';
import ServicePage from '@/components/pages/ServicePage';

export const metadata: Metadata = {
  title: 'Thi Công Nội Thất Trọn Gói | Nội Thất Đức Dương',
  description: 'Dịch vụ thi công nội thất trọn gói từ Nội Thất Đức Dương. 3 nhà máy sản xuất hiện đại, đội ngũ thợ lành nghề, cam kết chất lượng và tiến độ.',
};

const data = {
  title: 'Thi Công Nội Thất',
  subtitle: 'Dịch Vụ',
  heroImage: '/images/service-construction.jpg',
  description: 'Quy trình thi công chuyên nghiệp với 3 nhà máy sản xuất hiện đại, đội ngũ thợ lành nghề, kiểm soát chất lượng nghiêm ngặt từ nguyên liệu đến thành phẩm.',
  features: [
    { title: 'Sản Xuất Tại Nhà Máy', desc: 'Gia công tại 3 nhà máy với hệ thống CNC hiện đại, đảm bảo độ chính xác tuyệt đối.' },
    { title: 'Gỗ Óc Chó Nhập Khẩu', desc: 'Sử dụng 100% gỗ óc chó (walnut) nhập khẩu chính hãng từ Bắc Mỹ.' },
    { title: 'Đội Ngũ Thi Công', desc: 'Hơn 200 thợ lành nghề với nhiều năm kinh nghiệm trong thi công nội thất cao cấp.' },
    { title: 'Bảo Hành 24 Tháng', desc: 'Cam kết bảo hành 24 tháng cho toàn bộ sản phẩm và hạng mục thi công.' },
  ],
  processSteps: [
    'Nhận bàn giao bản vẽ thiết kế',
    'Lập kế hoạch sản xuất & thi công',
    'Gia công tại nhà máy',
    'Kiểm tra chất lượng (QC)',
    'Vận chuyển & lắp đặt tại công trình',
    'Nghiệm thu & bàn giao',
  ],
  projectTypes: ['Thi Công Trọn Gói', 'Thi Công Phần Gỗ', 'Lắp Đặt Nội Thất', 'Sửa Chữa & Nâng Cấp'],
};

export default function Page() {
  return <ServicePage {...data} />;
}
