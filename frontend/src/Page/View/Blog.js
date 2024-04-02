import '../Component/Blog.css';
import BodyImage from '../Component/photo/BodyImage.png'
import { useNavigate } from 'react-router-dom';

function Blog() {

  let navigate = useNavigate();

  function handleClick() {
    navigate('/'); // ここには、遷移したいパスを指定します。
  }

  return (
      <div className="body">
        <div className="header-text-container">
          <h4 onClick={handleClick} style={{cursor: 'pointer'}} className="header-text">Hanetsuki Blacks</h4>
        </div>
        <div className="body-middle-top">
          <h1>【BLOG】</h1>
          <div className="Blog">
            <h2>title: こんにちは</h2>
            <img src={BodyImage} alt="BodyImage" className="Blog-image"/> 
            <h3>content: こんにちは。羽月BLACKSです。この度サイトを作成しました。興味があったら是非連絡をください！</h3>
          </div>
        </div>
      </div>
  );
}

export default Blog;