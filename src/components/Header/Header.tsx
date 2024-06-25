 
/**
 * Renders the header component.
 *
 * @param {HeaderProps} data - The data object containing lists of titles, news items, exchange rates, and news items.
 * @return {JSX.Element} The rendered header component.
 */

import { HeaderProps } from "../../interface";

const Header: React.FC<HeaderProps> = ({ data: headerData }) => (
  <header className="header">
    <div className="title">
      <ul>
        {headerData.list1.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
    <div className="high-news">
      <ul>
        {headerData.list2.map((news, index) => (
          <li key={index}>{news}</li>
        ))}
      </ul>
    </div>
    <div className="exchange-rates">
      <ul>
        {headerData.list3.map((rate, index) => (
          <li key={index}>{rate}</li>
        ))}
      </ul>
    </div>
    <div className="news-items">
      <ul>
        {headerData.list4.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </header>
);

export default Header;
