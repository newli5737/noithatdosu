import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";

export const metadata: Metadata = {
  title: "Nội Thất Đức Dương | Thiết Kế & Thi Công Nội Thất Gỗ Óc Chó Cao Cấp",
  description:
    "Nội Thất Đức Dương - Hơn 25 năm kinh nghiệm thiết kế và thi công nội thất gỗ óc chó cao cấp. Biệt thự, chung cư, penthouse. Hotline: 0906 23 25 28",
  keywords: [
    "nội thất đức dương",
    "nội thất cao cấp",
    "nội thất gỗ óc chó",
    "thiết kế nội thất",
    "thi công nội thất",
    "nội thất biệt thự",
    "nội thất chung cư cao cấp",
  ],
  openGraph: {
    title: "Nội Thất Đức Dương | Nội Thất Gỗ Óc Chó Cao Cấp",
    description: "Hơn 25 năm kinh nghiệm thiết kế và thi công nội thất cao cấp. 3000+ dự án hoàn thành.",
    url: "https://noithatducduong.com",
    siteName: "Nội Thất Đức Dương",
    locale: "vi_VN",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://noithatducduong.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nội Thất Đức Dương",
              description: "Thiết kế và thi công nội thất gỗ óc chó cao cấp",
              url: "https://noithatducduong.com",
              telephone: "+84906232528",
              email: "info@noithatducduong.com",
              foundingDate: "2001",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tầng 3, Tòa CT1 - C14 Bắc Hà, Tố Hữu",
                addressLocality: "Nam Từ Liêm",
                addressRegion: "Hà Nội",
                addressCountry: "VN",
              },
              openingHours: "Mo-Su 08:00-19:00",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
