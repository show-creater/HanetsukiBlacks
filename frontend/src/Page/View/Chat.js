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
          <div className="input-zone">
            <div className="user-name">
              <h2 className="name">名前</h2>
              <input type="text" name="username" className="name-input" placeholder="名前を入力" />
            </div>
            <div className="user-message">
              <h2 className="name">内容</h2>
              <input type="text" name="username" className="message-input" placeholder="メッセージを入力" />
            </div>
            <h3 className="submit-button">送信</h3>    
          </div>
        </div>
      </div>
  );
}

export default Blog;