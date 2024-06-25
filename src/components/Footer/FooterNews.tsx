 /**
 * Renders a single news item in the footer.
 *
 * @param {FooterItemProps} props - The props object containing the item to be rendered.
 * @param {string} props.item.title - The title of the news item.
 * @param {string} props.item.h1 - The current temperature.
 * @param {string} props.item.h2 - The weather description.
 * @param {string} props.item.h3 - The weather description.
 * @param {string} props.item.post - The post content.
 * @param {string} props.item.news_title - The title of the weather news.
 * @param {string} props.item.description1 - The first description of the weather news.
 * @param {string} props.item.description2 - The second description of the weather news.
 * @param {string} props.item.description3 - The third description of the weather news.
 * @return {JSX.Element} The rendered news item.
 */


import { FooterItemProps } from "../../interface";

  
export const FooterNews: React.FC<FooterItemProps> = ({ item }) => {
    return (
        <div className="low-news-container">
          <div className="low-news">
            <div className="low-news-title">{item.title}</div>
            <div className="low-news-weather">
              <div className="temperature">
                <div className="current-temperature">
                  <h2>{item.h1}</h2>
                </div>
                <div className="weather-description">
                  <h4>{item.h2}</h4>
                  <h4>{item.h3}</h4>
                </div>
              </div>
            </div>
            <div className="post">{item.post}</div>
            <div className="weather-news-title">{item.news_title}</div>
          </div>
          <div className="weather-news-description">
            <ul>
              <li>{item.description1}</li>
              <li>{item.description2}</li>
              <li>{item.description3}</li>
            </ul>
          </div>
        </div>
    )
}

export default FooterNews;