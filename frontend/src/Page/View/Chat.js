import '../Component/Chat.css';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import { isMobile, isBrowser } from 'react-device-detect';


function Blog() {

  const [datas, setDatas] = useState([{
    chatid: 0,
    chat_title: "title",
    chat_content: "content",
    chat_time: 0
  }]);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [num, setNum] = useState();
  const [click, setClick] = useState(false);

  let navigate = useNavigate();

  function handleClick() {
    navigate('/'); // ここには、遷移したいパスを指定します。
  }

  // Intl.DateTimeFormatを使用してローカルタイムゾーンでの表示形式を設定
  useEffect(() => {
    // console.log('useEffect発火');
    const fetchData = async () => {
      try {
        const response = await fetch('https://hanetsukiblacks-wtgx.onrender.com/chat/get/all', {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          // console.log('HTTP status code:', response.status);
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        // ここでデータを加工してからセット
        const processedData = json.map(item => ({
          chatid: item.chatid,
          chat_title: item.chat_title,
          chat_sender: item.chat_sender,
          chat_content: item.chat_content,
          chat_time: new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}).format(new Date(item.chat_time))
        }));
        // console.log(processedData);
        setDatas(processedData);
        setNum(processedData.length);
      } catch (error) {
        // console.error(error);
      }
    };
  
    fetchData();
    setClick(false);
  }, [click]); // dodataが更新されたときに再フェッチ

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://hanetsukiblacks-wtgx.onrender.com/chat/get/all', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatid: num+1,
          chat_title: 'chat',
          chat_content: `${content}`,
          chat_sender: `${name}`
        }),
      });
      setName("");
      setContent("");
      setClick(true);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // console.log(data);
      // 送信後の処理（例：フォームのクリア、成功メッセージの表示など）
    } catch (error) {
      // console.error('Error:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // ここにEnterキーを押した時の処理を書くことができます
    }
  };

  return (
      <div className="body">
        <div className="header-text-container">
          <h4 onClick={handleClick} style={{cursor: 'pointer'}} className="header-text">Hanetsuki Blacks</h4>
        </div>
        <div className="body-middle-top">
          <h1>【掲示板】</h1>
          <div  className="Chat-space">
            {isMobile ?
            datas.map((data,index) => (
              <div key={index} className="Blog">
                <div className="name-content2">
                  <div style={{display: 'inline-block', justifyContent: 'flex-start'}}>
                    <h3 className="sender">{`${data.chatid}. ${data.chat_sender}：`}</h3>
                  </div>
                  <h3 style={{display: 'inline-block', whiteSpace: 'pre-wrap'}}>{`${data.chat_content}`}</h3>
                </div>
                  <h4>{`${data.chat_time}`}</h4>
              </div>
              ))
           :
            datas.map((data,index) => (
            <div key={index} className="Blog">
              <div className="name-content">
                <div style={{display: 'inline-block', justifyContent: 'flex-start'}}>
                  <h3 className="sender">{`${data.chatid}. ${data.chat_sender}：`}</h3>
                </div>
                <h3 style={{display: 'inline-block', whiteSpace: 'pre-wrap'}}>{`${data.chat_content}`}</h3>
              </div>
                <h4>{`${data.chat_time}`}</h4>
            </div>
            ))}
          </div>
          <div className="input-zone">
            <div className="user-name">
              <h2 className="name">名前</h2>
              <textarea onKeyDown={handleKeyPress} type="text" className="name-input" placeholder="名前を入力" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="user-message">
              <h2 className="name">内容</h2>
              <textarea type="text" className="message-input" placeholder="メッセージを入力" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <h3 style={{cursor: 'pointer'}} onClick={handleSubmit} className="submit-button">送信</h3>    
          </div>
        </div>
      </div>
  );
}

export default Blog;