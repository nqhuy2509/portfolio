// Toàn bộ nội dung của trang nằm ở đây.
// Thay các giá trị trong [ngoặc vuông] bằng thông tin thật của bạn.

export type Project = {
  title: string;
  stack: string;
  year: string;
  href: string;
  /** Ảnh trong thư mục /public, vd: "/projects/du-an-1.png" */
  image?: string;
};

export type SocialLink = {
  handle: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  bio: string;
  /** Ảnh chân dung trong thư mục /public, vd: "/avatar.jpg" */
  photo?: string;
  status: { label: string; detail: string };
  location: { city: string; country: string; timezone: string };
  experience: { years: string; company: string };
  stack: string[];
  /** Hai dự án đầu tiên được hiển thị trong lưới bento */
  projects: [Project, Project, ...Project[]];
  email: string;
  /** Link đặt lịch gọi (Cal.com, Calendly…). Bỏ trống thì ẩn nút. */
  scheduleUrl?: string;
  cv: { href: string; updated: string };
  github: SocialLink;
  linkedin: SocialLink;
};

export const profile: Profile = {
  name: "Nguyễn Quan Huy",
  role: "Mobile Developer",
  bio: "Đang làm việc tại một công ty phần mềm nhỏ và theo học Luật Kinh tế tại UEH. Đang tìm cơ hội để kết nối và trò chuyện về phát triển ứng dụng.",
  status: {
    label: "Sẵn sàng kết nối",
    detail: "Trò chuyện về phát triển ứng dụng",
  },
  location: {
    city: "Quận 9, TP.HCM",
    country: "Việt Nam",
    timezone: "GMT+7",
  },
  experience: {
    years: "3",
    company: "Lybia Software Company",
  },
  stack: ["Node.js", "Flutter", "Android", "Kotlin"],
  projects: [
    {
      title: "[Dự án nổi bật 1]",
      stack: "[Công nghệ]",
      year: "[Năm]",
      href: "https://github.com/nqhuy2509/[du-an-1]",
    },
    {
      title: "[Dự án 2]",
      stack: "[Công nghệ]",
      year: "[Năm]",
      href: "https://github.com/nqhuy2509/[du-an-2]",
    },
  ],
  email: "nqhuy250901@gmail.com",
  cv: {
    href: "/cv.pdf",
    updated: "[MM/YYYY]",
  },
  github: {
    handle: "@nqhuy2509",
    href: "https://github.com/nqhuy2509",
  },
  linkedin: {
    handle: "/in/yuhquan",
    href: "https://www.linkedin.com/in/yuhquan/",
  },
};
