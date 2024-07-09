
import { DashBoardType } from "@/types";
import { ClipboardCheck, FolderOpenDot, ScrollText, UsersIcon } from "lucide-react";
import { FileTextIcon as PostIcon } from "lucide-react";

const dashBoardMenu: DashBoardType = [
  {
    title: "Blog",
    slug: "/dashboard/blog/posts",
    icon: PostIcon,
  },
  {
    title: "Projects",
    slug: "/dashboard/projects",
    icon: FolderOpenDot,
  },
  {
    title: "Clients",
    slug: "/dashboard/clients",
    icon: UsersIcon,
  },
  {
    title: "Tasks",
    slug: "/dashboard/tasks",
    icon: ClipboardCheck,
  },
  {
    title: "Invoices",
    slug: "/dashboard/invoices",
    icon: ScrollText,
  },
]

export default dashBoardMenu;
