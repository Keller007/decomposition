/**
 * Renders a footer component with three FooterNews components.
 *
 * @param {FooterListProps} props - The props for the Footer component.
 * @param {IFooterList} props.footerNewsList - The list of footer news items.
 * @return {JSX.Element} The rendered footer component.
 */

import { FooterListProps } from "../../interface";
import FooterNews from "./FooterNews";

const Footer: React.FC<FooterListProps> = ({ footerNewsList }) => {
  return (
    <footer className="footer">
      <FooterNews item={footerNewsList.list1[0]} />
      <FooterNews item={footerNewsList.list2[0]} />
      <FooterNews item={footerNewsList.list3[0]} />
    </footer>
  );
};

export default Footer;
