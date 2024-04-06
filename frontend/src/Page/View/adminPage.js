import '../Component/Admin.css';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'

function Admin() {

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [num, setNum] = useState(0);

  let navigate = useNavigate();

  function handleClick() {
    navigate('/'); // ここには、遷移したいパスを指定します。
  }

  const filechange = (event) => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    // console.log('useEffect発火');
    const fetchData = async () => {
      try {
        const response = await fetch('https://hanetsukiblackssite.onrender.com/blog/get/all', {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          console.log('HTTP status code:', response.status);
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        // ここでデータを加工してからセット
        const processedData = json.map(item => ({
          blogid: item.blogid,
          blog_title: item.blog_title,
          blog_sender: item.blog_sender,
          blog_content: item.blog_content,
          blog_time: new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}).format(new Date(item.blog_time))
        }));
        // console.log(processedData);
        setNum(processedData.length);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []); 

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('blogid', num + 1); // ブログID
    formData.append('blog_title', name); // タイトル
    formData.append('blog_content', content); // 内容
    formData.append('blog_image', image); // 画像
  
    try {
      const response = await fetch('https://hanetsukiblackssite.onrender.com/blog/get/all', {
        method: 'POST',
        credentials: 'include',
        body: formData, // JSON.stringifyを使わずに、FormDataを直接セット
      });
  
      setName("");
      setContent("");
      setImage(null); // 画像のステートもクリアする
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('エラーが発生しました', error);
    }
  };
  

  return (
      <div className="body">
        <div className="header-text-container">
          <h4 onClick={handleClick} style={{cursor: 'pointer'}} className="header-text">Hanetsuki Blacks</h4>
        </div>
        <div className="body-middle-top">
          <div className="input-zone">
            <div className="user-name">
              <h2 className="name">画像</h2>
              <input type="file" className="name-input" onChange={filechange} />
            </div>
            <div className="user-message">
              <h2 className="name">タイトル</h2>
              <textarea type="text" className="name-input" placeholder="メッセージを入力" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="user-message">
              <h2 className="name">内容</h2>
              <textarea className="message-input" type="text" placeholder="メッセージを入力" value={content} onChange={(e) => {setContent(e.target.value);}} />
            </div>
            <h3 style={{cursor: 'pointer'}} onClick={()=>{handleUpload(); }}className="submit-button">ブログを投稿</h3>    
          </div>
        </div>
      </div>
  );
}

export default Admin;