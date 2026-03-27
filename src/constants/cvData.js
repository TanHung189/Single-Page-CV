export const cvData = {
  personalInfo: {
    name: "Bùi Đỗ Tấn Hưng",
    title: "THỰC TẬP SINH WEB DEVELOPER",
    phone: "0399308546",
    email: "hung189204@gmail.com",
    address: "Long Giang, Nhơn Mỹ, An Giang",
    avatar: "/images/avatar.jpg", // Dùng lại thư mục images có sẵn
  },
  objective: "Thực tập sinh với tinh thần cầu tiến, mong muốn được rèn luyện trong môi trường thực tế, trau dồi kiến thức chuyên môn để trở thành một Lập trình viên vững vàng. Sẵn sàng đối mặt thử thách để xây dựng các giải pháp phần mềm chất lượng, đóng góp giá trị cốt lõi vào sự phát triển bền vững của doanh nghiệp.",
  projects: [
    {
      id: "tahu-foto",
      name: "Website Quản Lý Đặt Lịch Chụp Ảnh - TAHU.FOTO",
      role: "Dự án cá nhân",
      time: "10/2023 - HIỆN TẠI",
      descriptions: [
        "Tích hợp API Cloudinary để tối ưu hóa việc lưu trữ và hiển thị hình ảnh (Portfolio, Avatar).",
        "Phát triển module Đặt lịch (Booking) linh hoạt: Đặt theo gói dịch vụ hoặc đặt lịch riêng theo yêu cầu.",
        "Xây dựng trang quản trị (Admin Dashboard) với biểu đồ thống kê và tính năng xuất báo cáo ra Excel (EPPlus)."
      ],
      github: "https://github.com/TanHung189/photography-booking-system"
    },
    {
      id: "shoe-store",
      name: "Website Thương Mại Điện Tử Quản Lý Cửa Hàng Giày",
      role: "Trưởng nhóm dự án",
      time: "09/2023 - 12/2023",
      descriptions: [
        "Quản lý nhóm 4 thành viên, phân chia nhiệm vụ và theo dõi tiến độ thực hiện.",
        "Thiết kế kiến trúc hệ thống, cơ sở dữ liệu và phát triển các chức năng chính: giỏ hàng, đơn hàng, tài khoản người dùng,...",
        "Triển khai giao diện quản trị (Admin Dashboard)"
      ],
      github: "https://github.com/TanHung189/shoe-store-management"
    },
    {
      id: "weather-app",
      name: "Website Dự Báo Thời Tiết",
      role: "Dự án cá nhân",
      time: "04/2023 - 06/2023",
      descriptions: [
        "Xây dựng website cho phép người dùng xem thông tin thời tiết theo vị trí hoặc thành phố nhập vào.",
        "Sử dụng API của OpenWeather để hiển thị nhiệt độ, độ ẩm, tốc độ gió, và biểu báo thời tiết theo thời gian thực.",
        "Thành thạo: Hiểu rõ cách gọi API, xử lý JSON, và thao tác DOM để hiển thị dữ liệu động."
      ]
    },
    {
      id: "cafe-management",
      name: "Hệ Thống Quản Lý Quán Cafe",
      role: "Dự án cá nhân",
      time: "2/2023 - 4/2023",
      descriptions: [
        "Hoàn thiện CRUD cho các đối tượng (món, bàn, đơn hàng).",
        "Thiết kế module báo cáo doanh thu theo ngày / loại món.",
        "Cấu trúc dự án rõ ràng, dễ bảo trì và có khả năng mở rộng."
      ],
      github: "https://github.com/TanHung189/QuanLyQuanCafe"
    }
  ],
  education: {
    school: "Đại học An Giang – Đại học Quốc gia TP.HCM",
    time: "08/2022 - 08/2026 (Dự kiến)",
    major: "Công Nghệ Thông Tin"
  },
  activities: [
    {
      name: "CLB Tin Học",
      time: "08/2024 - 02/2025",
      role: "Thành viên ban Truyền Thông",
      description: "Hỗ trợ seeding, marketing cho fanpage CLB"
    },
    {
      name: "Hiến máu nhân đạo",
      time: "01/2023 - 01/2025",
      description: "Tham gia nhiều đợt hiến máu nhân đạo do Viện Huyết học Truyền máu Cần Thơ tổ chức."
    }
  ],
  skills: [
    "HTML5 / CSS3",
    "C#, Javascript, Typescript",
    "ASP.NET Core 8 MVC",
    "ReactJS",
    "NodeJS",
    "SQL Server",
    "MongoDB",
    "Photoshop (Cơ bản)",
    "Figma"
  ],
  certificates: [
    { year: "2022", name: "Tin Học (A)" },
    { year: "2024", name: "Tiếng Anh (B1)" },
    { year: "2025", name: "Microsoft Office Specialist (Word 365 & 2019) – Microsoft" }
  ]
};
