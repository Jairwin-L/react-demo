import * as ExcelJs from "exceljs";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver";

// 生成头部columns
function generateHeaders(columns: any = []) {
  return columns.map((col: any) => {
    const obj: ITableHeader = {
      // 显示的 name
      header: col?.title,
      // 用于数据匹配的 key
      key: col?.key,
      // 列宽
      width: col.width ? col.width / 4 : 15,
    };
    if (col.children) {
      col.children?.forEach((item: any) => ({
        key: item.dataIndex,
        header: item.title,
        width: item.width,
        parentKey: col.key,
      }));
    }
    return obj;
  });
}
// 导出excel
function saveWorkbook(workbook: Workbook, fileName: string) {
  // 导出文件
  workbook.xlsx
    .writeBuffer()
    .then((data: any) => {
      const blob = new Blob([data], { type: "" });
      saveAs(blob, fileName);
    })
    .catch((error) => {
      console.log("saveWorkbook:error----->：", error);
    });
}
/**
 * @module makeExportExcel
 * @description excel文件导出
 */
export function makeExportExcel(data: any) {
  const {
    columns = [],
    listData = [],
    rowHeight = 20,
    workSheetName = "测试excel",
  } = data || {};
  // 创建工作簿
  const workbook = new ExcelJs.Workbook();
  // 添加sheet
  const worksheet = workbook.addWorksheet(workSheetName);
  // 设置 sheet 的默认行高
  worksheet.properties.defaultRowHeight = rowHeight;
  // 设置列
  worksheet.columns = generateHeaders(columns);
  // 添加行
  worksheet.addRows(listData);
  // 导出excel
  saveWorkbook(workbook, `${workSheetName}.xlsx`);
}
