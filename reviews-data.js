// =================================================================
// DỮ LIỆU ĐÁNH GIÁ 5 SAO THẬT TỪ TIKTOK SHOP
// - Hạt Sen Khô: 168 đánh giá · 5.0★
// - Hạt Bí Nếp: 185 đánh giá · 5.0★
// =================================================================

const REVIEWS_DATA = [
  // -------------------------------------------------------------
  // ĐÁNH GIÁ HẠT SEN KHÔ (168 ĐÁNH GIÁ · 5.0★)
  // -------------------------------------------------------------
  {
    ten: "t*****9",
    sao: 5,
    noidung: "Hạt sen khô rất ngon, thơm bở, nấu chè hạt sen long nhãn mềm nhừ mà không bị nát. Shop đóng gói túi zip 2 lớp cẩn thận, giao hàng nhanh.",
    san_pham: "hat-sen",
    anh: ["images/reviews/1.jpg", "images/reviews/2.jpg"],
    ngay: "15/10/2026"
  },
  {
    ten: "n*****h",
    sao: 5,
    noidung: "Hạt sen mẩy tròn đều, không bị sâu mọt hay hạt lép, ngâm nở đều. Mình nấu cháo sườn cho bé ăn dặm bùi ngậy bé thích lắm. Rất hài lòng!",
    san_pham: "hat-sen",
    anh: ["images/reviews/3.jpg"],
    ngay: "12/10/2026"
  },
  {
    ten: "l*****y",
    sao: 5,
    noidung: "Giao hàng vào TP.HCM đóng gói kỹ lưỡng. Mở ra thơm phức mùi sen khô tự nhiên, không có mùi hoá chất tẩy trắng. Chuẩn sen sạch.",
    san_pham: "hat-sen",
    anh: ["images/reviews/4.jpg", "images/reviews/5.jpg"],
    ngay: "10/10/2026"
  },
  {
    ten: "v*****p",
    sao: 5,
    noidung: "Sen già hạt, hầm canh xương bở tơi ăn bùi ngọt. Đã thông tâm sạch sẽ nên ăn không bị đắng. Sẽ tiếp tục ủng hộ shop.",
    san_pham: "hat-sen",
    anh: ["images/reviews/6.jpg"],
    ngay: "08/10/2026"
  },
  {
    ten: "m*****a",
    sao: 5,
    noidung: "Lần trước mua thử 1kg ăn thấy ngon và sạch sẽ nên đợt này quất luôn combo 3kg được miễn phí ship. Chất lượng vẫn rất đồng đều, 5 sao!",
    san_pham: "hat-sen",
    anh: ["images/reviews/7.jpg", "images/reviews/8.jpg"],
    ngay: "05/10/2026"
  },
  {
    ten: "h*****t",
    sao: 5,
    noidung: "Hạt sen khô nguyên chất đúng chuẩn, sấy tự nhiên hạt vàng ngà tự nhiên chứ không trắng tinh như sen tẩm hoá chất. Rất an tâm khi dùng cho gia đình.",
    san_pham: "hat-sen",
    anh: ["images/reviews/9.jpg", "images/reviews/10.jpg"],
    ngay: "02/10/2026"
  },
  {
    ten: "d*****t",
    sao: 5,
    noidung: "Nhận hàng được bóc kiểm tra trước khi thanh toán tiền, đúng hạt sen sạch loại 1. Shop uy tín, shipper thân thiện nhiệt tình.",
    san_pham: "hat-sen",
    anh: ["images/reviews/11.jpg", "images/reviews/12.jpg"],
    ngay: "29/09/2026"
  },
  {
    ten: "p*****q",
    sao: 5,
    noidung: "Mua gửi biếu ba mẹ dưới Cần Thơ, ông bà nấu chè khen nức nở bảo sen bở thơm ngon như sen quê ngày xưa. Cảm ơn shop nhiều nhé!",
    san_pham: "hat-sen",
    anh: ["images/reviews/13.jpg", "images/reviews/14.jpg"],
    ngay: "25/09/2026"
  },
  {
    ten: "b*****8",
    sao: 5,
    noidung: "Hạt khô ráo, bảo quản túi zip tiện lợi, nấu canh gà hạt sen ngọt nước bùi béo tuyệt vời. Đánh giá 5 sao cho chất lượng và cách phục vụ của shop.",
    san_pham: "hat-sen",
    anh: ["images/reviews/15.jpg", "images/reviews/16.jpg"],
    ngay: "20/09/2026"
  },

  // -------------------------------------------------------------
  // ĐÁNH GIÁ HẠT BÍ NẾP RANG MỘC (185 ĐÁNH GIÁ · 5.0★)
  // -------------------------------------------------------------
  {
    ten: "t*****m",
    sao: 5,
    noidung: "Hạt bí nếp chuẩn rang mộc củi, hạt mẩy đều cắn kêu tách bùi ngậy tự nhiên không bị gắt dầu. Ăn vặt lành mạnh cả nhà xem tivi ăn hết veo cả đĩa. 5 sao cho shop!",
    san_pham: "hat-bi",
    anh: ["images/reviews/bi-1.jpg", "images/reviews/bi-2.jpg"],
    ngay: "18/10/2026"
  },
  {
    ten: "h*****g",
    sao: 5,
    noidung: "Giao hàng nhanh, đóng túi zip 2 lớp dày dặn bảo quản rất tốt. Hạt bí to đều mẩy, không bị lép hay hạt sâu nào. Ăn bùi béo thơm mùi củi tự nhiên, không tẩm muối đường nên ăn không bị khát nước.",
    san_pham: "hat-bi",
    anh: ["images/reviews/bi-3.jpg"],
    ngay: "16/10/2026"
  },
  {
    ten: "m*****n",
    sao: 5,
    noidung: "Nhận hàng được bóc ra kiểm tra đúng như shop cam kết. Hạt đều tăm tắp, sạch sẽ không dính bụi than. Đã mua lần 2 quất luôn combo 3kg được miễn phí ship.",
    san_pham: "hat-bi",
    anh: ["images/reviews/bi-4.jpg", "images/reviews/bi-5.jpg"],
    ngay: "14/10/2026"
  },
  {
    ten: "p*****l",
    sao: 5,
    noidung: "Mua về cho mẹ và các cháu ăn vặt. Hạt bí nếp vỏ mỏng dễ cắn, nhân dày béo ngậy. Shop tư vấn nhiệt tình, ship vào Sài Gòn 2 ngày là nhận được rồi.",
    san_pham: "hat-bi",
    anh: ["images/reviews/bi-6.webp"],
    ngay: "12/10/2026"
  },
  {
    ten: "v*****h",
    sao: 5,
    noidung: "Hạt bí rang mộc vị bùi nguyên bản ăn rất cuốn, không bị mặn như loại mua ngoài chợ. Túi zip đóng gói cẩn thận, mở ra thơm nức mũi.",
    san_pham: "hat-bi",
    anh: ["images/reviews/bi-7.webp", "images/reviews/bi-1.jpg"],
    ngay: "10/10/2026"
  },
  {
    ten: "k*****a",
    sao: 5,
    noidung: "Đúng chuẩn hạt bí nếp miền quê rang mộc. Vỏ trắng ngà tự nhiên chứ không trắng bệch như hàng tẩy hoá chất. Hạt chắc mẩy 10 hạt như mười.",
    san_pham: "hat-bi",
    anh: ["images/reviews/bi-8.webp"],
    ngay: "08/10/2026"
  },
  {
    ten: "d*****q",
    sao: 5,
    noidung: "Hàng chuẩn mộc không chất bảo quản, date mới tinh hạt giòn rụm không bị ỉu. Shipper thân thiện nhiệt tình. Sẽ tiếp tục ủng hộ shop lâu dài.",
    san_pham: "hat-bi",
    anh: ["images/reviews/bi-2.jpg", "images/reviews/bi-4.jpg"],
    ngay: "05/10/2026"
  },
  {
    ten: "b*****t",
    sao: 5,
    noidung: "Gói 1kg nhiều lắm, hạt mẩy cắn sướng miệng. Nhà mình hay ăn hạt bí rang mộc này để bổ sung dinh dưỡng lành mạnh cho cả nhà. Quá chất lượng!",
    san_pham: "hat-bi",
    anh: ["images/reviews/bi-3.jpg", "images/reviews/bi-5.jpg"],
    ngay: "02/10/2026"
  },
  {
    ten: "n*****y",
    sao: 5,
    noidung: "Đặt thử gói 1kg ăn ngon quá nên phải vào đánh giá liền cho shop. Hạt béo bùi, rang vừa chín tới không bị cháy khét. Rất ưng ý!",
    san_pham: "hat-bi",
    anh: ["images/reviews/bi-1.jpg"],
    ngay: "28/09/2026"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = REVIEWS_DATA;
}
