 /**
 * Renders the MainContainer component.
 *
 * @param {Object} props - The component props.
 * @param {MainList} props.MainContainerList - The list of main items.
 * @return {JSX.Element} The rendered MainContainer component.
 */

import { MainList } from "../../interface";
 
const MainContainer: React.FC<{ MainContainerList: MainList }> = ({ MainContainerList }) => {
    return (
        <main className="main-container">
        <div className="search-menu">
          <img className="logo" src={MainContainerList.img1} alt="Yandex" />
          <input className="search-input" type="text" />
          <button className="button">Найти</button>
        </div>
        <div className="clue-input">
          <p>{MainContainerList.p}</p>
        </div>
        <img className="logo2" src={MainContainerList.img2} alt="Форсаж" />
      </main>
    )
}

export default MainContainer;

