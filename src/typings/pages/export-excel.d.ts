declare namespace IPageExportExcel {
  interface ListItem {
    id: string;
    title: string;
    date?: number;
    price?: number;
    count?: number;
    goodsUrl?: string;
  }
  type List = ListItem[];
}
