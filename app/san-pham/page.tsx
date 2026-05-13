import type { Metadata } from 'next';
import ProductsPage from './ProductsPage';

export const metadata: Metadata = {
  title: 'Sản Phẩm Nội Thất Gỗ Óc Chó | Nội Thất Đức Dương',
  description: 'Bộ sưu tập sản phẩm nội thất gỗ óc chó cao cấp: sofa, bàn trà, kệ tivi, giường, tủ, bàn thờ. Thiết kế sang trọng, chất liệu nhập khẩu.',
};

export default function Page() {
  return <ProductsPage />;
}
