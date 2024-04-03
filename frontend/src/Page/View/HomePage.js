import '../Component/HomePage.css'
import TopImage from '../Component/photo/TopImage.png'
import BodyImage from '../Component/photo/BodyImage.png'
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'


function HomePage() {

  const [data, setData] = useState([{
    blogid: 0,
    blog_title: "title",
    blog_content: "content",
    blog_image: "image",
    blog_time: 0
  }]);

  let navigate = useNavigate();

  function handleClick() {
    navigate('/Blog'); // ここには、遷移したいパスを指定します。
  }

  function HomeButton() {
    navigate('/');
  }

  function ChatButton() {
    navigate('/Chat');
  }

  function BlogLatestButton() {
    navigate('/BlogLatest');
  }

  useEffect(() => {
    // console.log('useEffect発火');
    const fetchData = async () => {
      try {
        const response = await fetch('https://hanetsukiblackssite.onrender.com/blog/get/all/latest');
        if (!response.ok) {
          console.log('HTTP status code:', response.status);
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        // ここでデータを加工してからセット
        const processedData = json.map(item => ({
          blogid: item.blogid,
          blog_title: item.blog_title,
          blog_content: item.blog_content,
          blog_image: item.blog_image,
          blog_time: new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}).format(new Date(item.blog_time))
        }));
        // console.log(processedData);
        setData(processedData);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []); // dodataが更新されたときに再フェッチ  

  return (

    <div className="App">
      <header className="App-header">
        <div className="header-text-container">
          <h4 onClick={HomeButton} style={{cursor: 'pointer'}} className="header-text">Hanetsuki Blacks</h4>
        </div>
        <div className="header-body">
          <h1 className="header-title">羽月BLACKS</h1>
          <h2 className="header-subtitle">- 台中バドミントンコミュニティ -</h2>
          <img src={TopImage} alt="TopImage" className="Top-image"/>
        </div> 
      </header>
      <div className="body">
        <div className="body-top">
          <h1 style={{ fontSize: 70 }}>羽月BLAKCS</h1>
          <h2>初心者から上級者まで大歓迎です！！</h2>
          <h2>台中駐在日本人と台湾人でワイワイやっています～</h2>     
          <h2>興味のある方は是非～♪</h2>
          <img src={BodyImage} alt="BodyImage" className="Body-image"/> 
        </div>
        <div className="body-middle-top">
          <h1>【お知らせ】</h1>
          <h2>最新の投稿</h2>
          <div onClick={BlogLatestButton} style={{cursor: 'pointer'}} className="Blog">
            <h2>{`${data[0].blog_title}`}</h2>
            <img src={data[0].blog_image} alt="BodyImage" className="Blog-image"/> 
            <h3>{`${data[0].blog_content}`}</h3>
            <h4>{`${data[0].blog_time}`}</h4>
          </div>
          <h2 onClick={handleClick} style={{cursor: 'pointer'}} className="Blog-link">お知らせ一覧を見る</h2>
        </div>
        <div className="body-middle">
          <h2 style={{color: 'pink'}}>【大都會永春館】</h2>
          <h2>場所：408台中市南屯區文心南五路三段392巷31號</h2>
          <h2>時間：毎週日曜日12:00~15:00(コート1、2)</h2>
          <h2>＊マイラケットなくても大丈夫です。シューズは各自ご持参ください。</h2>
          <h2>＊費用：男性300NTD／女性200NTD</h2>
          <br></br>
          <h2 style={{color: 'pink'}}>【アクセス】</h2>
          <h2>タクシー：西区から約10~15分(200元前後)</h2>
          <h2>バス：①忠明國中(199竹坑口)→向上永春東七路口</h2>
          <h2>→徒歩7分程→大都會永春館(計約40分ほど)</h2>
          <h2>②忠明高中→仁友停車場(72台中客運)</h2>
          <h2>→黎明公益路口→徒歩約7分</h2>
          <h2>大都會永春館電話：0423823353</h2>
        </div>
        <div className="body-bottom">
          <div className="board-top">
            <h1 style={{color: 'pink'}}>【掲示板】</h1>
            <h2>参加希望や質問がありましたら以下の掲示板からお願いします！</h2>
            <h2 onClick={ChatButton} style={{cursor: 'pointer'}} className='chat-link'>掲示板へアクセス</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;