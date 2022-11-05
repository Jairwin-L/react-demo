import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { App } from "./app";
import "dayjs/locale/zh-cn";
import zhCN from "antd/lib/locale/zh_CN";
import "./index.less";
// 解决safari自带放大功能：阻止双击放大
let lastTime = 0;
document.addEventListener("touchstart", (event) => {
  if (event.touches.length > 1) event.preventDefault();
});
document.addEventListener(
  "touchend",
  (event) => {
    const nowTime = new Date().getTime();
    if (nowTime - lastTime <= 300) event.preventDefault();
    lastTime = nowTime;
  },
  false
);

// 解决safari自带放大功能：阻止双指放大
document.addEventListener("gesturestart", (event) => {
  event.preventDefault();
});

const container: any = document.getElementById("react-demo");
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
);
