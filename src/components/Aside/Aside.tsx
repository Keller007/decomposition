import { IAsideList } from "../../interface";
 
/**
 * Renders the Aside component based on the provided asideList data.
 *
 * @param {IAsideList} asideList - The data for rendering the Aside component.
 * @return {JSX.Element} The rendered Aside component.
 */

const Aside: React.FC<{ asideList: IAsideList }> = ({ asideList }) => {
    return (
        <aside className="aside">
          <img className="logo3" src={asideList.img} alt="Ча/Ща" />
          <p style={{ color: "blue" }}>{asideList.p1}</p>
          <p>{asideList.p2}</p>
        </aside>
    )
}

export default Aside;