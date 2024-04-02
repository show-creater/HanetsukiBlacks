import '../Component/Chat.css';
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
          <h1>【掲示板】</h1>
          <div className="Blog">
            <h3>content: こんにちは。羽月BLACKSです。この度サイトを作成しました。興味があったら是非連絡をください！</h3>
            <br></br>
          </div>
          <input type="text" name="username" placeholder="メッセージを入力" />
          <h3 className="submit-button">送信</h3>
        </div>
      </div>
  );
}

export default Blog;