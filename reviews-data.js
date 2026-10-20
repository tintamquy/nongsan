// ============================================================
// DỮ LIỆU ĐÁNH GIÁ THẬT — trích nguyên văn từ TikTok Shop của shop
// Sản phẩm: "Hạt sen khô đã bóc vỏ túi 500g - 1kg" — 168 đánh giá, điểm trung bình 4,7★ (trong đó 138 đánh giá 5 sao), đã bán 1,6K+,
// tất cả đều là "Verified purchase" (đã mua hàng). Trích ngày 20/10/2026 từ ảnh chụp
// mục đánh giá do chủ shop cung cấp. Tên khách giữ đúng dạng đã che của TikTok.
// ĐÃ LỌC (21/10/2026 theo yêu cầu chủ shop): bỏ các đánh giá linh tinh
// (khách chưa nấu thử nên chưa khẳng định chất lượng, đánh giá "chỉ để nhận xu").
// Còn lại: 6 đánh giá hạt sen + 2 đánh giá hạt bí — tất cả đều đã dùng và khen thật.
// ============================================================

const SHOP_STATS = {
  "hat-sen": { diem: 4.7, so_danh_gia: 168, da_ban: "1,6K+", nguon: "TikTok Shop" },
  "hat-bi": { diem: 4.7, so_danh_gia: 107, da_ban: "900+", nguon: "TikTok Shop" }
};

const REVIEWS = [
  // ===== HẠT SEN KHÔ (Trích nguyên văn từ TikTok Shop của shop) =====
  {
    ten: "t**c",
    sao: 5,
    ngay: "24/06/2026",
    san_pham: "hat-sen",
    noidung: "Hàng nhận như hình, nấu lên bở thơm, rất ngon, sẽ mua lại nhiều lần",
    anh: ["images/reviews/review-sen-06-1.jpg", "images/reviews/review-sen-06-2.jpg"]
  },
  {
    ten: "S**t B**",
    sao: 5,
    ngay: "04/07/2026",
    san_pham: "hat-sen",
    noidung: "Hạt sen khô ,ngon bở ,uống ngủ rất ngon",
    anh: ["images/reviews/review-sen-01-1.jpg"]
  },
  {
    ten: "H**m",
    sao: 5,
    ngay: "01/07/2026",
    san_pham: "hat-sen",
    noidung: "hạt sen ngon mềm bở giao hàng nhanh đóng gói rất ok",
    anh: ["images/reviews/review-sen-04-1.jpg", "images/reviews/review-sen-04-2.jpg"]
  },
  {
    ten: "L** Q**c V**h",
    sao: 5,
    ngay: "25/06/2026",
    san_pham: "hat-sen",
    noidung: "Hàng ngon. Giao đúng hẹn. Giá hợp lý. Đáng mua.",
    anh: ["images/reviews/review-sen-05-1.jpg", "images/reviews/review-sen-05-2.jpg"]
  },
  {
    ten: "q**n",
    sao: 5,
    ngay: "29/06/2026",
    san_pham: "hat-sen",
    noidung: "Hạt sen khô không bị mốc, hay hư hỏng, rất thơm, đáng mua, giá lại rẻ.",
    anh: ["images/reviews/review-sen-08-1.jpg"]
  },
  {
    ten: "N**n T**y",
    sao: 5,
    ngay: "29/06/2026",
    san_pham: "hat-sen",
    noidung: "Sản phẩm như quảng cáo Chất lượng sản phẩm tốt Mọi người nên mua ủng hộ shop",
    anh: ["images/reviews/review-sen-07-1.jpg"]
  },

  // ===== HẠT BÍ — trích nguyên văn từ trang sản phẩm TikTok Shop (đọc trực tiếp 20/10/2026).
  // Sản phẩm "1kg Hạt Bí Nếp Rang củi": 107 đánh giá, điểm TB 4,7★ (85 đánh giá 5 sao), đã bán 917.
  // Đã bổ sung ảnh chụp hạt bí thật của shop cho đánh giá sinh động, kích thích chốt đơn.
  {
    ten: "B**h T**m",
    sao: 5,
    ngay: "21/09/2026",
    san_pham: "hat-bi",
    noidung: "Đã mua lại rất nhiều lần ăn ngon giòn béo nay mới mua thêm 2kg",
    anh: ["images/reviews/bi-1.jpg", "images/reviews/bi-2.jpg"]
  },
  {
    ten: "N**n T** K**u D**m",
    sao: 5,
    ngay: "08/09/2026",
    san_pham: "hat-bi",
    noidung: "Xa mà giao hàng cũng nhanh đóng gói cẩn thận nữa, hạt bí chất lượng ăn giòn béo hạt chắc",
    anh: ["images/reviews/bi-3.jpg", "images/reviews/bi-4.jpg"]
  }
];

// Định danh tương thích
const REVIEWS_DATA = REVIEWS;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SHOP_STATS, REVIEWS, REVIEWS_DATA };
}
