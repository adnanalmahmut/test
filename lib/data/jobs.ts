import { Job } from "@/types/job";

export const featuredJobs: Job[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    companyLogo: "/images/logo.png",  // إضافة مسار الشعار هنا
    location: "Remote",
    salary: "$120k - $160k",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
    featured: true,
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Design Masters",
    companyLogo: "/images/logo.png",  // إضافة مسار الشعار هنا
    location: "San Francisco, CA",
    salary: "$90k - $130k",
    tags: ["UI/UX", "Figma", "Design Systems"],
    featured: true,
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Cloud Nine",
    companyLogo: "/images/logo.png",  // إضافة مسار الشعار هنا
    location: "New York, NY",
    salary: "$130k - $170k",
    tags: ["Kubernetes", "AWS", "CI/CD", "Docker"],
    featured: true,
  },
];

export const latestJobs: Job[] = [
  {
    id: 4,
    title: "Frontend Developer",
    company: "WebTech Inc",
    companyLogo: "/images/logo.png",  // إضافة مسار الشعار هنا
    location: "Remote",
    salary: "$80k - $110k",
    tags: ["React", "TypeScript", "Tailwind"],
    postedAt: "2 hours ago",
  },
  {
    id: 5,
    title: "Backend Engineer",
    company: "DataFlow Systems",
    companyLogo: "/images/logo.png",  // إضافة مسار الشعار هنا
    location: "London, UK",
    salary: "£65k - £85k",
    tags: ["Python", "Django", "PostgreSQL"],
    postedAt: "5 hours ago",
  },
  {
    id: 6,
    title: "Mobile Developer",
    company: "AppWorks",
    companyLogo: "/images/logo.png",  // إضافة مسار الشعار هنا
    location: "Berlin, DE",
    salary: "€60k - €80k",
    tags: ["React Native", "iOS", "Android"],
    postedAt: "1 day ago",
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "AI Solutions",
    companyLogo: "/images/logo.png",  // إضافة مسار الشعار هنا
    location: "Toronto, CA",
    salary: "CAD 90k - 120k",
    tags: ["Python", "Machine Learning", "TensorFlow"],
    postedAt: "2 days ago",
  },
  {
    id: 8,
    title: "UX Researcher",
    company: "User First",
    companyLogo: "/images/logo.png",  // إضافة مسار الشعار هنا
    location: "Sydney, AU",
    salary: "AUD 85k - 110k",
    tags: ["User Research", "Usability Testing", "Figma"],
    postedAt: "3 days ago",
  },
];
