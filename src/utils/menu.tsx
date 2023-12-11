import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const menu = [
  {
    id: 1,
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    id: 2,
    name: "Scheduler",
    route: "/scheduler",
  },
];

export const getMenuIcon = (name: string) => {
  switch (name) {
    case "Dashboard":
      return <DashboardIcon />;
    case "Scheduler":
      return <CalendarMonthIcon />;
    default:
      return null;
  }
};
