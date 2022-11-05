import { ReactNode } from "react";
import Demo from "@pages/antd";
import ExportExcel from "@pages/export-excel";

interface IRouter {
  path: string;
  element: ReactNode;
  meta?: {
    title: string;
  };
}

export const routers: IRouter[] = [
  {
    path: "/",
    element: <Demo />,
  },
  {
    path: "/export-excel",
    element: <ExportExcel />,
  },
];
