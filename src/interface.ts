export interface IHeaderList {
  list1: string[];
  list2: string[];
  list3: string[];
  list4: string[];
}

export interface HeaderProps {
  data: IHeaderList;
}

export interface IAsideList {
  img: string;
  p1: string;
  p2: string;
}

export interface MainList {
  img1: string;
  p: string;
  img2: string;
}
export interface IFooterListItem {
  title?: string;
  h1?: string;
  h2?: string;
  h3?: string;
  post?: string;
  news_title?: string;
  description1?: string;
  description2?: string;
  description3?: string;
}

export interface IFooterList {
  list1: IFooterListItem[];
  list2: IFooterListItem[];
  list3: IFooterListItem[];
}

export interface FooterListProps {
  footerNewsList: IFooterList;
}
export interface FooterItemProps {
  item: IFooterListItem;
}
