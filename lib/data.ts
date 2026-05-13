// Static data for Nội Thất Đức Dương website

export const companyInfo = {
  name: "Nội Thất Đức Dương",
  slogan: "Kiến Tạo Không Gian Sống Đẳng Cấp",
  description: "Với hơn 25 năm kinh nghiệm trong thiết kế và thi công nội thất cao cấp, luôn mang đến những không gian sống đẳng cấp, sang trọng và bền vững.",
  hotline: "0906 23 25 28",
  email: "info@noithatducduong.com",
  website: "www.noithatducduong.com",
  founded: 2001,
  experience: 25,
};

export const stats = [
  { value: 25, suffix: "+", label: "Năm Kinh Nghiệm" },
  { value: 300, suffix: "+", label: "Nhân Sự" },
  { value: 3000, suffix: "+", label: "Dự Án Hoàn Thành" },
  { value: 5000, suffix: "+", label: "Sản Phẩm" },
];

export const showrooms = [
  {
    city: "Hà Nội",
    address: "Tầng 3, Tòa CT1 - C14 Bắc Hà, Tố Hữu, Phường Đại Mỗ, Hà Nội",
    note: "Có vị trí đỗ xe ô tô",
  },
  {
    city: "Hải Phòng",
    address: "London House, Phạm Văn Đồng, Dương Kinh, Hải Phòng",
    note: "",
  },
  {
    city: "Australia",
    address: "6 Arvona Avenue, Sunshine, Victoria 3020, Australia",
    phone: "+61 411615089",
  },
];

export const factories = [
  { name: "Nhà máy 1", location: "Yên Bài, Ba Vì, Hà Nội" },
  { name: "Nhà máy 2", location: "Quốc Oai, Hà Nội" },
  { name: "Nhà máy 3", location: "Lương Sơn, Hòa Bình" },
];

export const services = [
  {
    id: "thiet-ke",
    title: "Thiết Kế Nội Thất",
    description: "Đội ngũ kiến trúc sư giàu kinh nghiệm, sáng tạo trong từng bản vẽ, mang đến giải pháp thiết kế tối ưu cho mọi không gian.",
    image: "/images/service-design.jpg",
    href: "/thiet-ke-noi-that",
  },
  {
    id: "thi-cong",
    title: "Thi Công Nội Thất",
    description: "Quy trình thi công chuyên nghiệp, kiểm soát chất lượng nghiêm ngặt, đảm bảo tiến độ và chất lượng vượt trội.",
    image: "/images/service-construction.jpg",
    href: "/thi-cong-noi-that",
  },
];

export const featuredProjects = [
  {
    id: 1,
    title: "Nội Thất Chung Cư BRG 25 Lê Văn Lương",
    category: "Chung Cư",
    image: "/images/project-1.jpg",
    href: "/du-an/chung-cu-brg-25-le-van-luong",
  },
  {
    id: 2,
    title: "Nội Thất Chung Cư BRG Diamond Residence",
    category: "Chung Cư",
    image: "/images/project-2.jpg",
    href: "/du-an/chung-cu-brg-diamond-residence",
  },
  {
    id: 3,
    title: "Biệt Thự Đơn Lập 480m² Vinhomes Ocean Park",
    category: "Biệt Thự",
    image: "/images/project-3.jpg",
    href: "/du-an/biet-thu-480m2-vinhomes",
  },
  {
    id: 4,
    title: "Biệt Thự KĐT Thành Phố Giao Lưu",
    category: "Biệt Thự",
    image: "/images/project-4.jpg",
    href: "/du-an/biet-thu-giao-luu",
  },
  {
    id: 5,
    title: "Căn Hộ Chung Cư Cao Cấp 116m²",
    category: "Chung Cư",
    image: "/images/project-5.jpg",
    href: "/du-an/chung-cu-116m2-vimeco",
  },
  {
    id: 6,
    title: "Biệt Thự 1000m² KĐT Bắc An Khánh",
    category: "Biệt Thự",
    image: "/images/project-6.jpg",
    href: "/du-an/biet-thu-1000m2-bac-an-khanh",
  },
];

export const products = [
  { id: 1, name: "Bàn Phấn D'Elegant 2.5", image: "/images/product-1.jpg", href: "/san-pham/ban-phan-delegant-2-5" },
  { id: 2, name: "Bàn Góc D'Elegant 2.5", image: "/images/product-2.jpg", href: "/san-pham/ban-goc-delegant-2-5" },
  { id: 3, name: "Bàn Console D'Elegant 2.5", image: "/images/product-3.jpg", href: "/san-pham/ban-console-delegant-2-5" },
  { id: 4, name: "Tủ Commost D'Luxury 2.5", image: "/images/product-4.jpg", href: "/san-pham/tu-commost-dluxury-2-5" },
  { id: 5, name: "Kệ TV D'Noble 2.5 V1", image: "/images/product-5.jpg", href: "/san-pham/ke-tv-dnoble-2-5-v1" },
  { id: 6, name: "Kệ TV D'Elegant 2.5", image: "/images/product-6.jpg", href: "/san-pham/ke-tv-delegant-2-5" },
];

export const processSteps = [
  {
    step: 1,
    title: "Tư Vấn",
    description: "Lắng nghe nhu cầu, phân tích không gian và đề xuất giải pháp thiết kế phù hợp nhất.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Thiết Kế",
    description: "Phát triển ý tưởng, tạo bản vẽ 3D chi tiết và lựa chọn vật liệu cao cấp.",
    icon: "PenTool",
  },
  {
    step: 3,
    title: "Sản Xuất",
    description: "Gia công tại nhà máy với quy trình kiểm soát chất lượng nghiêm ngặt.",
    icon: "Factory",
  },
  {
    step: 4,
    title: "Thi Công",
    description: "Đội ngũ thợ lành nghề thi công trực tiếp, đảm bảo đúng tiến độ cam kết.",
    icon: "Hammer",
  },
  {
    step: 5,
    title: "Bàn Giao",
    description: "Nghiệm thu hoàn thiện, bàn giao công trình và bảo hành dài hạn.",
    icon: "CheckCircle",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Anh Nguyễn Văn Hùng",
    title: "Chủ căn hộ Vinhomes Metropolis",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
    content: "Tôi rất hài lòng với thiết kế của Đức Dương – tinh tế, hiện đại nhưng vẫn ấm cúng. Đặc biệt là sự chăm chút đến từng chi tiết nhỏ khiến không gian trở nên thực sự khác biệt.",
  },
  {
    id: 2,
    name: "Chị Hương Giang",
    title: "Doanh nhân",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
    content: "Không chỉ là đồ nội thất, những gì tôi nhận được là một không gian sống có gu, phản ánh đúng cá tính và lối sống của mình. Đức Dương đã vượt kỳ vọng của tôi.",
  },
  {
    id: 3,
    name: "Anh Trần Minh Quân",
    title: "Giám đốc điều hành công ty công nghệ",
    avatar: "/images/avatar-3.jpg",
    rating: 5,
    content: "Tôi đánh giá cao quy trình làm việc chuyên nghiệp của đội ngũ Đức Dương – rõ ràng, đúng tiến độ, sản phẩm khi bàn giao còn đẹp hơn cả bản vẽ 3D.",
  },
  {
    id: 4,
    name: "Chị Thu Hà",
    title: "Chủ biệt thự Ecopark",
    avatar: "/images/avatar-4.jpg",
    rating: 5,
    content: "Từ khâu thiết kế đến thi công đều bài bản và trau chuốt. Chất lượng gỗ óc chó thực sự khác biệt, càng dùng càng thấy giá trị.",
  },
  {
    id: 5,
    name: "Anh Đức Anh",
    title: "Kiến trúc sư",
    avatar: "/images/avatar-5.jpg",
    rating: 5,
    content: "Làm việc với Đức Dương là sự kết hợp lý tưởng giữa nghệ thuật và kỹ thuật. Các chi tiết thi công rất tinh xảo, đúng ý đồ thiết kế ban đầu.",
  },
  {
    id: 6,
    name: "Anh Phạm Hoàng",
    title: "Giám đốc doanh nghiệp",
    avatar: "/images/avatar-6.jpg",
    rating: 5,
    content: "Đội ngũ Đức Dương không chỉ hiểu về nội thất mà còn rất am hiểu cách tối ưu công năng và hình ảnh thương hiệu cho doanh nghiệp. Một đối tác đáng tin cậy.",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Mừng Sinh Nhật 24 Năm – Tặng Bộ Decor Cao Cấp Tới 70 Triệu Đồng",
    excerpt: "Chương trình ưu đãi đặc biệt nhân dịp kỷ niệm 24 năm thành lập Nội Thất Đức Dương...",
    image: "/images/blog-1.jpg",
    category: "Sự Kiện",
    date: "2025-05-01",
    href: "/tin-tuc/mung-sinh-nhat-24-nam",
  },
  {
    id: 2,
    title: "Xu Hướng Thiết Kế Nội Thất 2025 – Sang Trọng & Bền Vững",
    excerpt: "Khám phá những xu hướng thiết kế nội thất mới nhất với sự kết hợp hoàn hảo giữa thẩm mỹ và công năng...",
    image: "/images/blog-2.jpg",
    category: "Xu Hướng",
    date: "2025-04-15",
    href: "/tin-tuc/xu-huong-noi-that-2025",
  },
  {
    id: 3,
    title: "Gỗ Óc Chó – Vật Liệu Hoàn Hảo Cho Nội Thất Cao Cấp",
    excerpt: "Tìm hiểu vì sao gỗ óc chó (walnut) là lựa chọn hàng đầu cho nội thất luxury trên toàn thế giới...",
    image: "/images/blog-3.jpg",
    category: "Vật Liệu",
    date: "2025-03-20",
    href: "/tin-tuc/go-oc-cho-noi-that-cao-cap",
  },
];

export const navigationLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Về Chúng Tôi", href: "/gioi-thieu" },
  {
    label: "Dịch Vụ",
    href: "#",
    children: [
      { label: "Thiết Kế Nội Thất", href: "/thiet-ke-noi-that" },
      { label: "Thi Công Nội Thất", href: "/thi-cong-noi-that" },
    ],
  },
  {
    label: "Sản Phẩm",
    href: "/san-pham",
    children: [
      { label: "Phòng Khách", href: "/phong-khach-go-oc-cho" },
      { label: "Phòng Bếp", href: "/phong-bep-go-oc-cho" },
      { label: "Phòng Ngủ", href: "/phong-ngu-go-oc-cho" },
      { label: "Phòng Thờ", href: "/phong-tho-go-oc-cho" },
      { label: "Phòng Làm Việc", href: "/phong-lam-viec-go-oc-cho" },
      { label: "Sản Phẩm Decor", href: "/do-trang-tri" },
    ],
  },
  { label: "Dự Án", href: "/du-an" },
  { label: "Bộ Sưu Tập", href: "/bo-suu-tap" },
  { label: "Tin Tức", href: "/tin-tuc" },
  { label: "Liên Hệ", href: "/lien-he" },
];

export const socialLinks = [
  { platform: "Facebook", url: "https://www.facebook.com/noithatducduong" },
  { platform: "TikTok", url: "https://www.tiktok.com/@noithatducduong68" },
  { platform: "YouTube", url: "https://www.youtube.com/@noithatducduongvn" },
  { platform: "Instagram", url: "https://www.instagram.com/noithatducduonghn/" },
  { platform: "Zalo", url: "https://zalo.me/0906232528" },
];

export const projectCategories = ["Tất Cả", "Biệt Thự", "Chung Cư", "Penthouse", "Nhà Phố"];
