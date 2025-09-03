import { ModuleType, Permission } from '@/types/dashboard';

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;   // lucide-react icon name
  path: string;
  module: ModuleType;
  permission?: Permission;
  children?: NavigationItem[];
}

export const mainTreasuryNav: NavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "LayoutDashboard",
    path: "/dashboard/main-treasury",
    module: ModuleType.MAIN_TREASURY,
  },
  {
    id: "reports",
    label: "Reports",
    icon: "FileText",
    path: "/dashboard/reports",
    module: ModuleType.MAIN_TREASURY,
  },
];