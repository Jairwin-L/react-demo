import { ReactNode } from "react";
import Demo from "@pages/antd";

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
];
