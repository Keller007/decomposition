 /**
 * Renders the main page component.
 *
 * @return {JSX.Element} The rendered main page component.
 */

import "./MainPage.css";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";
import Footer from "./Footer/Footer";
import { asideList } from "./Aside/asideList";
import { headerList } from "./Header/headerList";
import { MainContainerList } from "./MainContainer/mainContainerList";
import { footerNewsList } from "./Footer/footerNewsList";

export function MainPage() {
  return (
    <>
      <Header data={headerList} />
      <Aside asideList={asideList} />
      <MainContainer MainContainerList={MainContainerList} />
      <Footer footerNewsList={footerNewsList} />
    </>
  );
}
