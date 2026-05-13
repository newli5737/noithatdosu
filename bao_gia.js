const {
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
    Header, Footer, AlignmentType, BorderStyle, WidthType,
    ShadingType, VerticalAlign, PageNumber, LevelFormat
} = require('docx');
const fs = require('fs');

const BRAND_BLUE = "1F3D7A";
const ACCENT_BLUE = "2E75B6";
const LIGHT_BLUE = "D6E4F0";
const LIGHTER_BLUE = "EBF3FA";
const WHITE = "FFFFFF";
const DARK_TEXT = "1A1A1A";
const MID_TEXT = "444444";

const brd = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: brd, bottom: brd, left: brd, right: brd };
const nb = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: nb, bottom: nb, left: nb, right: nb };

function cell(text, opts = {}) {
    const { bold = false, color = DARK_TEXT, fill = WHITE, colSpan,
        align = AlignmentType.LEFT, width = 2000, fontSize = 20,
        vAlign = VerticalAlign.CENTER, italic = false } = opts;
    return new TableCell({
        columnSpan: colSpan,
        width: { size: width, type: WidthType.DXA },
        borders: opts.borders || borders,
        shading: { fill, type: ShadingType.CLEAR },
        margins: { top: 100, bottom: 100, left: 150, right: 150 },
        verticalAlign: vAlign,
        children: [new Paragraph({
            alignment: align,
            children: [new TextRun({ text, bold, color, size: fontSize, font: "Arial", italics: italic })]
        })]
    });
}

function sectionHeading(text) {
    return new Paragraph({
        spacing: { before: 300, after: 120 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: ACCENT_BLUE, space: 4 } },
        children: [new TextRun({ text, bold: true, color: BRAND_BLUE, size: 28, font: "Arial" })]
    });
}
function subH(text, color = ACCENT_BLUE) {
    return new Paragraph({
        spacing: { before: 180, after: 80 },
        children: [new TextRun({ text, bold: true, color, size: 22, font: "Arial" })]
    });
}
function body(text, opts = {}) {
    return new Paragraph({
        spacing: { before: 60, after: 60 },
        alignment: opts.align || AlignmentType.LEFT,
        children: [new TextRun({ text, size: 20, font: "Arial", color: MID_TEXT, bold: opts.bold || false, italics: opts.italic || false })]
    });
}
function bullet(text, bold = false) {
    return new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text, size: 20, font: "Arial", color: MID_TEXT, bold })]
    });
}
function gap(before = 80, after = 80) {
    return new Paragraph({ spacing: { before, after }, children: [new TextRun({ text: "", size: 20 })] });
}

const doc = new Document({
    numbering: {
        config: [{
            reference: "bullets", levels: [{
                level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 600, hanging: 300 } } }
            }]
        }]
    },
    styles: { default: { document: { run: { font: "Arial", size: 20, color: DARK_TEXT } } } },
    sections: [{
        properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1000, right: 1000, bottom: 1000, left: 1000 } } },

        headers: {
            default: new Header({
                children: [
                    new Table({
                        width: { size: 9906, type: WidthType.DXA }, columnWidths: [6200, 3706],
                        rows: [new TableRow({
                            children: [
                                new TableCell({
                                    borders: noBorders, shading: { fill: BRAND_BLUE, type: ShadingType.CLEAR }, margins: { top: 110, bottom: 110, left: 200, right: 200 },
                                    children: [
                                        new Paragraph({ children: [new TextRun({ text: "CÔNG TY TNHH TM & DV DOSU", bold: true, color: WHITE, size: 22, font: "Arial" })] }),
                                        new Paragraph({ children: [new TextRun({ text: "Website · Thương mại điện tử · Giải pháp số hoá doanh nghiệp", color: "BDD7EE", size: 17, font: "Arial" })] }),
                                    ]
                                }),
                                new TableCell({
                                    borders: noBorders, shading: { fill: BRAND_BLUE, type: ShadingType.CLEAR }, margins: { top: 110, bottom: 110, left: 200, right: 200 }, verticalAlign: VerticalAlign.CENTER,
                                    children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "BÁO GIÁ WEBSITE NỘI THẤT", color: ACCENT_BLUE, bold: true, size: 17, font: "Arial" })] })]
                                })
                            ]
                        })]
                    }),
                    gap(30, 0)
                ]
            })
        },

        footers: {
            default: new Footer({
                children: [new Paragraph({
                    spacing: { before: 80, after: 0 },
                    border: { top: { style: BorderStyle.SINGLE, size: 2, color: ACCENT_BLUE } },
                    children: [
                        new TextRun({ text: "Lại Thế Ngọc  |  0346 437 915  |  support@dosutech.site  |  dosutech.site  |  MST: 0110638839       Trang ", size: 16, color: "888888", font: "Arial" }),
                        new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "888888", font: "Arial" }),
                        new TextRun({ text: " / ", size: 16, color: "888888", font: "Arial" }),
                        new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, color: "888888", font: "Arial" }),
                    ]
                })]
            })
        },

        children: [

            // ── TITLE ──
            new Paragraph({
                alignment: AlignmentType.CENTER, spacing: { before: 160, after: 60 },
                children: [new TextRun({ text: "BÁO GIÁ PHÁT TRIỂN WEBSITE", bold: true, size: 36, color: BRAND_BLUE, font: "Arial" })]
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER, spacing: { before: 0, after: 60 },
                children: [new TextRun({ text: "NỘI THẤT CAO CẤP", bold: true, size: 44, color: ACCENT_BLUE, font: "Arial" })]
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER, spacing: { before: 0, after: 60 },
                children: [new TextRun({ text: "Luxury design · Showcase dự án · Tối ưu chuyển đổi · Next.js", size: 21, color: ACCENT_BLUE, font: "Arial", italics: true })]
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER, spacing: { before: 60, after: 200 },
                border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT_BLUE, space: 1 } },
                children: [new TextRun({ text: "Ngày lập: 13/05/2026   |   Hiệu lực báo giá: 30 ngày", size: 20, color: MID_TEXT, font: "Arial" })]
            }),

            // ── INFO TABLE ──
            new Table({
                width: { size: 9906, type: WidthType.DXA }, columnWidths: [2600, 7306],
                rows: [
                    new TableRow({ children: [cell("Kính gửi", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 2600 }), cell("Thương hiệu Nội Thất Đức Dương", { bold: true, fill: LIGHTER_BLUE, width: 7306, color: BRAND_BLUE })] }),
                    new TableRow({ children: [cell("Dự án", { bold: true, fill: LIGHT_BLUE, width: 2600 }), cell("Website giới thiệu công ty nội thất cao cấp — phong cách sang trọng, luxury", { width: 7306, bold: true, color: BRAND_BLUE })] }),
                    new TableRow({ children: [cell("Tech stack", { bold: true, fill: LIGHTER_BLUE, width: 2600 }), cell("Next.js 15 · TailwindCSS v4 · Framer Motion", { width: 7306, bold: true, color: BRAND_BLUE })] }),
                    new TableRow({ children: [cell("Hình thức", { bold: true, fill: LIGHT_BLUE, width: 2600 }), cell("Hợp đồng theo dự án — hỗ trợ lâu dài, mở rộng linh hoạt", { width: 7306 })] }),
                    new TableRow({ children: [cell("Bảo hành", { bold: true, fill: LIGHTER_BLUE, width: 2600 }), cell("12 tháng — sửa lỗi kỹ thuật miễn phí", { width: 7306, bold: true, color: BRAND_BLUE })] }),
                    new TableRow({ children: [cell("Thanh toán", { bold: true, fill: LIGHT_BLUE, width: 2600 }), cell("Chuyển khoản — xuất hóa đơn VAT điện tử đầy đủ", { width: 7306 })] }),
                ]
            }),

            gap(200, 0),

            // ── SECTION 1 ── Mô tả
            sectionHeading("1. MÔ TẢ DỰ ÁN"),
            body("Website giới thiệu công ty thiết kế và thi công nội thất cao cấp. Lấy cảm hứng từ phong cách sang trọng, tinh tế (luxury / premium), thể hiện đẳng cấp qua màu sắc, typography và hiệu ứng cuộn mượt mà. Đặc biệt tập trung showcase các dự án đã hoàn thành, bộ sưu tập sản phẩm và tối ưu hoá luồng chuyển đổi qua form đặt lịch tư vấn."),
            gap(80, 0),

            new Table({
                width: { size: 9906, type: WidthType.DXA }, columnWidths: [4953, 4953],
                rows: [
                    new TableRow({
                        children: [
                            cell("Yêu cầu thực tế", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 4953 }),
                            cell("Giải pháp triển khai", { bold: true, fill: ACCENT_BLUE, color: WHITE, width: 4953 }),
                        ]
                    }),
                    ...[
                        ["Giao diện sang trọng, đẳng cấp", "Thiết kế tông màu Tối/Vàng/Trắng ấm, font chữ Serif cao cấp"],
                        ["Hiệu ứng mượt mà", "Tích hợp Framer Motion tạo animation cuộn trang, hover effect độc đáo"],
                        ["Trưng bày dự án & sản phẩm", "Trang Dự Án có filter, Trang Sản Phẩm lưới hiện đại, ảnh chất lượng cao"],
                        ["Tương tác khách hàng", "Form liên hệ nổi, nút gọi/zalo động, dễ dàng đặt lịch tư vấn"],
                        ["Tốc độ siêu nhanh, SEO tối đa", "Dùng Next.js App Router (SSR/SSG), tối ưu hình ảnh, meta/sitemap chuẩn"],
                    ].map(([req, sol], i) => new TableRow({
                        children: [
                            cell(req, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 4953, color: MID_TEXT }),
                            cell(sol, { fill: i % 2 === 0 ? LIGHT_BLUE : WHITE, width: 4953, color: BRAND_BLUE, bold: true }),
                        ]
                    }))
                ]
            }),

            gap(200, 0),

            // ── SECTION 2 ── Tính năng
            sectionHeading("2. CẤU TRÚC & TÍNH NĂNG BÀN GIAO"),
            gap(80, 0),

            subH("Trang chủ & Layout chung", ACCENT_BLUE),
            bullet("Header thông minh (trong suốt thành nền màu khi cuộn), Mega Menu."),
            bullet("Hero banner: Video / Ảnh toàn màn hình, typography bay bổng."),
            bullet("Section: Giới thiệu ngắn, Dịch vụ nổi bật, Dự án tiêu biểu, Năng lực sản xuất (nhà máy)."),
            bullet("Footer đa cột đầy đủ thông tin: Showroom, Nhà máy, Links, Form nhận bản tin."),
            bullet("Nút liên hệ nổi (Zalo, Gọi điện, Đặt lịch) hoạt động trơn tru trên Desktop & Mobile."),
            gap(80, 0),

            subH("Các Trang Con (Sub-pages)", ACCENT_BLUE),
            bullet("Trang Về Chúng Tôi: Lịch sử hình thành, tầm nhìn, đội ngũ, hình ảnh nhà máy."),
            bullet("Trang Dịch Vụ (Thiết kế & Thi công): Quy trình thực hiện, cam kết chất lượng."),
            bullet("Trang Dự Án & Bộ Sưu Tập: Lưới hình ảnh, bộ lọc theo loại (Biệt thự, Chung cư...)."),
            bullet("Trang Sản Phẩm: Danh mục sản phẩm gỗ óc chó (Sofa, Giường, Tủ...)."),
            bullet("Trang Tin Tức: Bài viết tư vấn, kiến thức nội thất chuẩn SEO."),
            bullet("Trang Liên Hệ: Form gửi thông tin, Bản đồ Google Maps các showroom."),
            gap(80, 0),

            subH("Hệ thống Quản trị (CMS)", ACCENT_BLUE),
            bullet("Trang tổng quan: Thống kê và theo dõi các yêu cầu liên hệ mới."),
            bullet("Quản lý Dự án & Sản phẩm: Thêm, sửa, xóa dự án/sản phẩm, upload ảnh."),
            bullet("Quản lý Tin tức: Trình soạn thảo văn bản (Rich Text) để đăng bài blog."),
            gap(80, 0),

            subH("Kỹ thuật & Deploy", ACCENT_BLUE),
            bullet("Next.js 15 App Router — Kiến trúc mới nhất, tối ưu Server Components."),
            bullet("TailwindCSS v4 — Giao diện gọn nhẹ, tuỳ chỉnh dễ dàng."),
            bullet("Deploy VPS Linux + Docker + Nginx + SSL (HTTPS) miễn phí.", true),
            bullet("Tích hợp robots.txt, sitemap.xml, Schema.org cấu trúc LocalBusiness."),
            bullet("Bàn giao toàn bộ source code + hướng dẫn vận hành."),

            gap(200, 0),

            // ── SECTION 3 ── Báo giá
            sectionHeading("3. BÁO GIÁ"),
            gap(80, 0),

            new Table({
                width: { size: 9906, type: WidthType.DXA },
                columnWidths: [5006, 2450, 2450],
                rows: [
                    new TableRow({
                        children: [
                            cell("Hạng mục", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 5006 }),
                            cell("Thời gian", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 2450, align: AlignmentType.CENTER }),
                            cell("Ghi chú", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 2450, align: AlignmentType.CENTER }),
                        ]
                    }),
                    ...[
                        ["Thiết kế UI/UX (Concept & Animation)", "1 tuần", "Review & Chỉnh sửa"],
                        ["Phát triển Frontend (Homepage + 8 Trang con)", "1.5 tuần", "Next.js + Tailwind + Framer"],
                        ["Phát triển Backend & CMS Quản trị", "1 tuần", "Quản lý dữ liệu động"],
                        ["Responsive Mobile & Tối ưu SEO (Lighthouse)", "0.5 tuần", "Đảm bảo điểm cao"],
                        ["Deploy lên VPS (Nginx, Domain, SSL)", "2 ngày", "Sẵn sàng go-live"],
                        ["Nghiệm thu, test thực tế & bàn giao", "3 ngày", "UAT với khách hàng"],
                    ].map(([item, time, note], i) => new TableRow({
                        children: [
                            cell(item, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 5006 }),
                            cell(time, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 2450, align: AlignmentType.CENTER, bold: true, color: BRAND_BLUE }),
                            cell(note, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 2450, color: "888888", italic: true }),
                        ]
                    })),
                ]
            }),

            gap(120, 0),

            // Price highlight box
            new Table({
                width: { size: 9906, type: WidthType.DXA },
                columnWidths: [4953, 4953],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                width: { size: 4953, type: WidthType.DXA },
                                borders,
                                shading: { fill: BRAND_BLUE, type: ShadingType.CLEAR },
                                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "GIÁ TRỌN GÓI", bold: true, color: WHITE, size: 22, font: "Arial" })] }),
                                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "(chưa VAT)", color: "BDD7EE", size: 18, font: "Arial", italics: true })] }),
                                ]
                            }),
                            new TableCell({
                                width: { size: 4953, type: WidthType.DXA },
                                borders,
                                shading: { fill: ACCENT_BLUE, type: ShadingType.CLEAR },
                                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "10.000.000 đ", bold: true, color: WHITE, size: 36, font: "Arial" })] }),
                                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Thời gian thực hiện: ~3-4 tuần", bold: true, color: WHITE, size: 20, font: "Arial" })] }),
                                ]
                            }),
                        ]
                    })
                ]
            }),

            gap(100, 0),
            body("★ Giá trên là báo giá trọn gói bao gồm thiết kế, phát triển Frontend và hệ thống CMS Backend.", { italic: true }),
            body("★ Tặng kèm miễn phí dịch vụ VPS 1 năm đầu tiên.", { italic: true }),
            body("★ Hỗ trợ cập nhật và chỉnh sửa nội dung trong thời gian bảo hành.", { italic: true }),

            gap(200, 0),

            // ── SECTION 4 ── Thanh toán & Bảo hành
            sectionHeading("4. ĐIỀU KHOẢN THANH TOÁN & BẢO HÀNH"),

            subH("Thanh toán 2 đợt (30% – 70%)"),
            new Table({
                width: { size: 9906, type: WidthType.DXA },
                columnWidths: [1800, 5706, 2400],
                rows: [
                    new TableRow({
                        children: [
                            cell("Đợt", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 1800, align: AlignmentType.CENTER }),
                            cell("Điều kiện", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 5706 }),
                            cell("Tỷ lệ", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 2400, align: AlignmentType.CENTER }),
                        ]
                    }),
                    new TableRow({
                        children: [
                            cell("Đợt 1", { bold: true, fill: LIGHTER_BLUE, width: 1800, color: BRAND_BLUE, align: AlignmentType.CENTER }),
                            cell("Ngay sau khi xác nhận triển khai dự án", { fill: LIGHTER_BLUE, width: 5706 }),
                            cell("30% giá trị", { bold: true, fill: LIGHTER_BLUE, width: 2400, align: AlignmentType.CENTER, color: BRAND_BLUE }),
                        ]
                    }),
                    new TableRow({
                        children: [
                            cell("Đợt 2", { bold: true, fill: WHITE, width: 1800, color: BRAND_BLUE, align: AlignmentType.CENTER }),
                            cell("Sau khi nghiệm thu và bàn giao hệ thống", { width: 5706 }),
                            cell("70% giá trị", { bold: true, width: 2400, align: AlignmentType.CENTER, color: BRAND_BLUE }),
                        ]
                    }),
                ]
            }),

            gap(120, 0),
            subH("Bảo hành & Hỗ trợ"),
            bullet("Bảo hành 12 tháng đối với lỗi kỹ thuật phần mềm lập trình."),
            bullet("Hỗ trợ kỹ thuật qua Zalo / điện thoại trong giờ hành chính."),
            bullet("Toàn bộ source code thuộc quyền sở hữu của Khách hàng sau khi hoàn tất thanh toán.", true),

            gap(200, 0),

            // ── SECTION 5 ── Liên hệ
            sectionHeading("5. THÔNG TIN LIÊN HỆ"),

            new Table({
                width: { size: 9906, type: WidthType.DXA }, columnWidths: [2500, 7406],
                rows: [
                    new TableRow({ children: [cell("Đơn vị thực hiện", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 2500 }), cell("CÔNG TY TNHH THƯƠNG MẠI & DỊCH VỤ DOSU", { bold: true, width: 7406, color: BRAND_BLUE, fontSize: 22 })] }),
                    new TableRow({ children: [cell("Người phụ trách", { bold: true, fill: LIGHT_BLUE, width: 2500 }), cell("Lại Thế Ngọc", { width: 7406, bold: true })] }),
                    new TableRow({ children: [cell("Điện thoại / Zalo", { bold: true, fill: LIGHTER_BLUE, width: 2500 }), cell("0346 437 915", { width: 7406, bold: true, color: BRAND_BLUE })] }),
                    new TableRow({ children: [cell("Email", { bold: true, fill: LIGHT_BLUE, width: 2500 }), cell("support@dosutech.site", { width: 7406, color: ACCENT_BLUE })] }),
                    new TableRow({ children: [cell("Website", { bold: true, fill: LIGHTER_BLUE, width: 2500 }), cell("https://dosutech.site", { width: 7406, color: ACCENT_BLUE })] }),
                ]
            }),

            gap(200, 0),

            new Paragraph({
                alignment: AlignmentType.CENTER, spacing: { before: 100, after: 60 },
                shading: { fill: BRAND_BLUE, type: ShadingType.CLEAR },
                children: [new TextRun({ text: "  Trân trọng cảm ơn Quý khách hàng và mong được hợp tác!  ", bold: true, size: 24, color: WHITE, font: "Arial" })]
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0 },
                shading: { fill: ACCENT_BLUE, type: ShadingType.CLEAR },
                children: [new TextRun({ text: "  Đẳng Cấp · Tinh Tế · Hiện Đại  ", bold: true, size: 18, color: WHITE, font: "Arial" })]
            }),
        ]
    }]
});

Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync('d:/noithatducduong/website/BaoGia_NoiThatDucDuong_v2.docx', buf);
    console.log('Done! Báo giá đã được tạo tại d:/noithatducduong/website/BaoGia_NoiThatDucDuong_v2.docx');
});