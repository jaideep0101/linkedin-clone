import React,{useState,useEffect} from 'react'
import "./widgets.css"
import InfoIcon from '@mui/icons-material/Info';
function Widgets() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://inshorts.deta.dev/news?category=all')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(data => setNews(data.data))
      .catch(error => setError(error.message));
  }, []);
  return (
    <div className='widget_container'>
    <div className='widget_top'>
    <div className='widget_top_section'>
      <h2>LinkedIn News</h2>
      <InfoIcon className='info_icon'/>
      </div>
      <div className='news_feed' >
        {news.map(article => (
          <ul key={article.title}>
            <li>
              <p className='news_article'>{article.title}</p>
              <p className="news_date">{article.date}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Widgets