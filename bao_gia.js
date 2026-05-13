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
const GOLD = "C9A84C";
const GREEN = "1E7D4B";
const TEAL = "0E7C7B";
const LIGHT_TEAL = "E0F4F4";
const PURPLE = "6B3FA0";
const LIGHT_PURPLE = "F0E8FA";
const ROSE = "9B2335";
const LIGHT_ROSE = "FAEAEC";

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
                                    children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "BÁO GIÁ WEBSITE THỜI TRANG / PHỤ KIỆN", color: GOLD, bold: true, size: 17, font: "Arial" })] })]
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
                children: [new TextRun({ text: "THỜI TRANG & PHỤ KIỆN", bold: true, size: 44, color: ACCENT_BLUE, font: "Arial" })]
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER, spacing: { before: 0, after: 60 },
                children: [new TextRun({ text: "Minimal design · Cửa hàng online · Mobile-first · Next.js", size: 21, color: GOLD, font: "Arial", italics: true })]
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER, spacing: { before: 60, after: 200 },
                border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: GOLD, space: 1 } },
                children: [new TextRun({ text: "Ngày lập: 09/05/2026   |   Hiệu lực báo giá: 30 ngày", size: 20, color: MID_TEXT, font: "Arial" })]
            }),

            // ── INFO TABLE ──
            new Table({
                width: { size: 9906, type: WidthType.DXA }, columnWidths: [2600, 7306],
                rows: [
                    new TableRow({ children: [cell("Kính gửi", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 2600 }), cell("Quý khách hàng — Thương hiệu thời trang / phụ kiện", { bold: true, fill: LIGHTER_BLUE, width: 7306, color: BRAND_BLUE })] }),
                    new TableRow({ children: [cell("Dự án", { bold: true, fill: LIGHT_BLUE, width: 2600 }), cell("Website bán hàng thời trang / phụ kiện — phong cách minimal, chuẩn brand", { width: 7306, bold: true, color: BRAND_BLUE })] }),
                    new TableRow({ children: [cell("Tech stack", { bold: true, fill: LIGHTER_BLUE, width: 2600 }), cell("Next.js · React.js · TailwindCSS · Node.js · PostgreSQL", { width: 7306, bold: true, color: TEAL })] }),
                    new TableRow({ children: [cell("Hình thức", { bold: true, fill: LIGHT_BLUE, width: 2600 }), cell("Hợp đồng theo dự án — hỗ trợ lâu dài, mở rộng linh hoạt", { width: 7306 })] }),
                    new TableRow({ children: [cell("Bảo hành", { bold: true, fill: LIGHTER_BLUE, width: 2600 }), cell("12 tháng — sửa lỗi kỹ thuật miễn phí", { width: 7306, bold: true, color: GREEN })] }),
                    new TableRow({ children: [cell("Thanh toán", { bold: true, fill: LIGHT_BLUE, width: 2600 }), cell("Chuyển khoản — xuất hóa đơn VAT điện tử đầy đủ", { width: 7306 })] }),
                ]
            }),

            gap(200, 0),

            // ── SECTION 1 ── Mô tả
            sectionHeading("1. MÔ TẢ DỰ ÁN"),
            body("Website thương mại điện tử dành cho thương hiệu thời trang / phụ kiện, lấy cảm hứng từ phong cách minimal, tinh tế — tương tự waa. studios. Tập trung vào trải nghiệm người dùng mượt mà, hình ảnh sản phẩm nổi bật, tốc độ tải trang nhanh và chuẩn SEO."),
            gap(80, 0),

            new Table({
                width: { size: 9906, type: WidthType.DXA }, columnWidths: [4953, 4953],
                rows: [
                    new TableRow({
                        children: [
                            cell("🎯  Yêu cầu thực tế", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 4953 }),
                            cell("✅  Giải pháp triển khai", { bold: true, fill: TEAL, color: WHITE, width: 4953 }),
                        ]
                    }),
                    ...[
                        ["Giao diện sang, minimal, đúng chất brand", "Custom design theo brand identity, không dùng template có sẵn"],
                        ["Hiển thị sản phẩm theo danh mục, bộ sưu tập", "Trang collection, trang sản phẩm chi tiết, ảnh zoom, chọn biến thể"],
                        ["Giỏ hàng, đặt hàng, quản lý đơn", "Giỏ hàng realtime, checkout form, quản lý đơn qua admin"],
                        ["Dùng mượt trên điện thoại", "Mobile-first, responsive hoàn toàn, thao tác 1 tay"],
                        ["Tốc độ nhanh, SEO tốt", "Next.js SSG/SSR — điểm Lighthouse 90+, meta OG đầy đủ"],
                    ].map(([req, sol], i) => new TableRow({
                        children: [
                            cell(req, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 4953, color: MID_TEXT }),
                            cell(sol, { fill: i % 2 === 0 ? LIGHT_TEAL : WHITE, width: 4953, color: TEAL, bold: true }),
                        ]
                    }))
                ]
            }),

            gap(200, 0),

            // ── SECTION 2 ── Tính năng
            sectionHeading("2. TÍNH NĂNG BÀN GIAO"),
            gap(80, 0),

            subH("Giao diện & Trải nghiệm người dùng", ACCENT_BLUE),
            bullet("Trang chủ: hero banner full-screen, featured collection, new arrivals, lookbook section"),
            bullet("Trang danh mục (Collection): lưới sản phẩm, hover effect, lazy load ảnh"),
            bullet("Trang chi tiết sản phẩm: ảnh zoom, chọn màu/size, mô tả, nút thêm giỏ hàng", true),
            bullet("Trang About / Journal (blog): giới thiệu thương hiệu, bài viết câu chuyện sản phẩm"),
            bullet("Đa ngôn ngữ Tiếng Việt / English (toggle)"),
            bullet("Animation mượt khi scroll, chuyển trang — đúng cảm giác brand cao cấp"),
            gap(80, 0),

            subH("Mua hàng & Quản lý đơn", TEAL),
            bullet("Giỏ hàng (drawer/slide-over): thêm, xoá, cập nhật số lượng tức thì", true),
            bullet("Trang checkout: form thông tin giao hàng, chọn phương thức thanh toán"),
            bullet("Tích hợp thanh toán: chuyển khoản ngân hàng (có sẵn) — COD (tuỳ chọn)"),
            bullet("Email xác nhận đơn hàng tự động gửi cho khách"),
            bullet("Trang tra cứu đơn hàng theo mã đơn / email"),
            gap(80, 0),

            subH("Admin Dashboard", PURPLE),
            bullet("Quản lý sản phẩm: thêm/sửa/xoá, upload ảnh, biến thể (màu, size)", true),
            bullet("Quản lý đơn hàng: xem danh sách, cập nhật trạng thái (chờ xử lý / đang giao / hoàn thành)"),
            bullet("Quản lý danh mục / bộ sưu tập"),
            bullet("Xem thống kê đơn giản: tổng đơn, doanh thu theo ngày"),
            gap(80, 0),

            subH("Kỹ thuật & Deploy", GREEN),
            bullet("Next.js 14 App Router — SSG/SSR tối ưu tốc độ, SEO"),
            bullet("TailwindCSS — giao diện gọn nhẹ, không bloat CSS"),
            bullet("PostgreSQL + Prisma ORM — database ổn định, dễ mở rộng"),
            bullet("Deploy VPS Linux + Docker + Nginx + SSL (HTTPS)", true),
            bullet("Bàn giao toàn bộ source code + tài liệu kỹ thuật + hướng dẫn vận hành"),

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
                        ["Thiết kế UI/UX (Figma mockup, xác nhận trước khi code)", "1 tuần", "Theo brief / tham khảo"],
                        ["Frontend — Next.js + TailwindCSS (toàn bộ giao diện)", "1.5 tuần", "Mobile-first, animation"],
                        ["Backend + API (Node.js, quản lý sản phẩm, đơn hàng)", "1 tuần", "REST API + Admin"],
                        ["Database PostgreSQL + Prisma ORM", "Trong backend", "Schema thiết kế chuẩn"],
                        ["Admin Dashboard (quản lý sản phẩm, đơn hàng)", "0.5 tuần", "Giao diện đơn giản, dễ dùng"],
                        ["Đa ngôn ngữ VI/EN", "Trong frontend", "i18n tích hợp sẵn"],
                        ["Deploy VPS + SSL + domain + cấu hình Nginx", "2 – 3 ngày", "Sẵn sàng go-live"],
                        ["Test, fix bug, bàn giao + hướng dẫn vận hành", "2 – 3 ngày", "UAT cùng khách hàng"],
                    ].map(([item, time, note], i) => new TableRow({
                        children: [
                            cell(item, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 5006 }),
                            cell(time, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 2450, align: AlignmentType.CENTER, bold: true, color: TEAL }),
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
                                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "💰  GIÁ TRỌN GÓI", bold: true, color: WHITE, size: 22, font: "Arial" })] }),
                                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "(chưa VAT)", color: "BDD7EE", size: 18, font: "Arial", italics: true })] }),
                                ]
                            }),
                            new TableCell({
                                width: { size: 4953, type: WidthType.DXA },
                                borders,
                                shading: { fill: GOLD, type: ShadingType.CLEAR },
                                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "6.000.000 – 9.000.000 đ", bold: true, color: BRAND_BLUE, size: 36, font: "Arial" })] }),
                                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Thời gian thực hiện: 4 – 5 tuần", bold: true, color: BRAND_BLUE, size: 20, font: "Arial" })] }),
                                ]
                            }),
                        ]
                    })
                ]
            }),

            gap(100, 0),
            body("★  Giá trên là khoảng tham khảo, chưa bao gồm VAT 10%. Mức chính xác xác nhận sau khi trao đổi yêu cầu chi tiết.", { italic: true }),
            body("★  Chi phí server/VPS, tên miền, dịch vụ email (nếu có) do Khách hàng tự chịu (khoảng 1–2 triệu/năm).", { italic: true }),
            body("★  Tính năng thanh toán online (MoMo, VNPay, Stripe...) có thể tích hợp thêm, báo giá riêng nếu cần.", { italic: true }),

            gap(200, 0),

            // ── SECTION 4 ── Tech Stack
            sectionHeading("4. KIẾN TRÚC & CÔNG NGHỆ"),

            new Table({
                width: { size: 9906, type: WidthType.DXA },
                columnWidths: [2000, 3506, 4400],
                rows: [
                    new TableRow({
                        children: [
                            cell("Layer", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 2000 }),
                            cell("Công nghệ", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 3506 }),
                            cell("Vai trò", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 4400 }),
                        ]
                    }),
                    ...[
                        ["Frontend", "Next.js 14 + React.js", "App Router, SSG/SSR, SEO tốt, tốc độ cao"],
                        ["UI / Styling", "TailwindCSS + Framer Motion", "Minimal design, animation mượt, mobile-first"],
                        ["Backend / API", "Node.js (Next.js API Routes)", "REST API, xử lý đơn hàng, auth admin"],
                        ["Database", "PostgreSQL + Prisma ORM", "Lưu sản phẩm, đơn hàng, danh mục"],
                        ["Auth Admin", "NextAuth.js + JWT", "Đăng nhập admin an toàn"],
                        ["Upload ảnh", "Cloudinary / S3", "CDN ảnh sản phẩm tốc độ cao"],
                        ["Email", "Resend / Nodemailer", "Xác nhận đơn hàng tự động"],
                        ["Deploy", "VPS Linux + Docker + Nginx", "HTTPS, ổn định, dễ scale"],
                    ].map(([layer, tech, role], i) => new TableRow({
                        children: [
                            cell(layer, { bold: true, fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 2000, color: BRAND_BLUE }),
                            cell(tech, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 3506, bold: true, color: TEAL }),
                            cell(role, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 4400, color: MID_TEXT }),
                        ]
                    }))
                ]
            }),

            gap(200, 0),

            // ── SECTION 5 ── Tiến độ
            sectionHeading("5. TIẾN ĐỘ TRIỂN KHAI (4 – 5 TUẦN)"),
            gap(80, 0),

            new Table({
                width: { size: 9906, type: WidthType.DXA },
                columnWidths: [1500, 3000, 4006, 1400],
                rows: [
                    new TableRow({
                        children: [
                            cell("Giai đoạn", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 1500, align: AlignmentType.CENTER }),
                            cell("Nội dung", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 3000 }),
                            cell("Deliverables", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 4006 }),
                            cell("Thời gian", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 1400, align: AlignmentType.CENTER }),
                        ]
                    }),
                    ...[
                        ["Phase 1", "Khảo sát & thiết kế UI/UX", "Figma mockup các trang chính, xác nhận giao diện — ký HĐ + TT 30%", "Tuần 1"],
                        ["Phase 2", "Frontend — Giao diện hoàn chỉnh", "Next.js + TailwindCSS, tất cả trang, responsive, animation", "Tuần 2 – 3"],
                        ["Phase 3", "Backend + Admin Dashboard", "API sản phẩm & đơn hàng, quản lý admin, kết nối database", "Tuần 3 – 4"],
                        ["Phase 4", "Testing, Deploy & Bàn giao", "UAT, fix bug, go-live trên VPS — TT 70% còn lại", "Tuần 5"],
                    ].map(([phase, content, deliverable, time], i) => new TableRow({
                        children: [
                            cell(phase, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 1500, bold: true, color: BRAND_BLUE, align: AlignmentType.CENTER }),
                            cell(content, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 3000, bold: true }),
                            cell(deliverable, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 4006, color: MID_TEXT, italic: true }),
                            cell(time, { fill: i % 2 === 0 ? LIGHTER_BLUE : WHITE, width: 1400, bold: true, color: GREEN, align: AlignmentType.CENTER }),
                        ]
                    }))
                ]
            }),

            gap(200, 0),

            // ── SECTION 6 ── Thanh toán & Bảo hành
            sectionHeading("6. ĐIỀU KHOẢN THANH TOÁN & BẢO HÀNH"),

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
                            cell("Sau khi ký hợp đồng & xác nhận thiết kế Figma (Phase 1)", { fill: LIGHTER_BLUE, width: 5706 }),
                            cell("30% giá trị hợp đồng", { bold: true, fill: LIGHTER_BLUE, width: 2400, align: AlignmentType.CENTER, color: BRAND_BLUE }),
                        ]
                    }),
                    new TableRow({
                        children: [
                            cell("Đợt 2", { bold: true, fill: WHITE, width: 1800, color: BRAND_BLUE, align: AlignmentType.CENTER }),
                            cell("Sau khi nghiệm thu, UAT thành công & go-live", { width: 5706 }),
                            cell("70% giá trị hợp đồng", { bold: true, width: 2400, align: AlignmentType.CENTER, color: GREEN }),
                        ]
                    }),
                ]
            }),

            gap(120, 0),
            subH("Bảo hành & Hỗ trợ"),
            bullet("Bảo hành 12 tháng — sửa lỗi kỹ thuật phát sinh từ quá trình lập trình (miễn phí)"),
            bullet("Hỗ trợ kỹ thuật qua Zalo / điện thoại trong giờ hành chính"),
            bullet("Toàn bộ source code thuộc quyền sở hữu Khách hàng sau khi thanh toán đủ", true),
            bullet("Hỗ trợ nâng cấp, thêm tính năng theo yêu cầu phát sinh — báo giá riêng từng hạng mục"),

            gap(200, 0),

            // ── SECTION 7 ── Liên hệ
            sectionHeading("7. THÔNG TIN LIÊN HỆ"),

            new Table({
                width: { size: 9906, type: WidthType.DXA }, columnWidths: [2500, 7406],
                rows: [
                    new TableRow({ children: [cell("Đơn vị thực hiện", { bold: true, fill: BRAND_BLUE, color: WHITE, width: 2500 }), cell("CÔNG TY TNHH THƯƠNG MẠI & DỊCH VỤ DOSU", { bold: true, width: 7406, color: BRAND_BLUE, fontSize: 22 })] }),
                    new TableRow({ children: [cell("Người phụ trách", { bold: true, fill: LIGHT_BLUE, width: 2500 }), cell("Lại Thế Ngọc", { width: 7406, bold: true })] }),
                    new TableRow({ children: [cell("Điện thoại / Zalo", { bold: true, fill: LIGHTER_BLUE, width: 2500 }), cell("0346 437 915", { width: 7406, bold: true, color: GREEN })] }),
                    new TableRow({ children: [cell("Email", { bold: true, fill: LIGHT_BLUE, width: 2500 }), cell("support@dosutech.site", { width: 7406, color: ACCENT_BLUE })] }),
                    new TableRow({ children: [cell("Website", { bold: true, fill: LIGHTER_BLUE, width: 2500 }), cell("https://dosutech.site", { width: 7406, color: ACCENT_BLUE })] }),
                    new TableRow({ children: [cell("MST (xuất VAT)", { bold: true, fill: LIGHT_BLUE, width: 2500 }), cell("0110638839", { width: 7406 })] }),
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
                shading: { fill: GOLD, type: ShadingType.CLEAR },
                children: [new TextRun({ text: "  Minimal · Tinh tế · Tốc độ cao · Chuẩn brand  ", bold: true, size: 18, color: BRAND_BLUE, font: "Arial" })]
            }),
        ]
    }]
});

Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync('/home/claude/BaoGia_WebFashion.docx', buf);
    console.log('Done!');
});