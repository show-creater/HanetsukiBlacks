import '../Component/Blog.css';
import BodyImage from '../Component/photo/BodyImage.png'
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'

function Blog() {

  let navigate = useNavigate();
  const [datas, setDatas] = useState([{
    blogid: 0,
    blog_title: "title",
    blog_content: "content",
    blog_image: "image",
    blog_time: 0
  }]);

  function handleClick() {
    navigate('/'); // ここには、遷移したいパスを指定します。
  }

  useEffect(() => {
    // console.log('useEffect発火');
    const fetchData = async () => {
      try {
        const response = await fetch('https://hanetsukiblackssite.onrender.com/blog/get/all/latest', {
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
          blog_content: item.blog_content,
          blog_image: item.blog_image,
          blog_time: new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}).format(new Date(item.blog_time))
        }));
        // console.log(processedData);
        setDatas(processedData);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []); // dodataが更新されたときに再フェッチ  

  return (
      <div className="body">
        <div className="header-text-container">
          <h4 onClick={handleClick} style={{cursor: 'pointer'}} className="header-text">Hanetsuki Blacks</h4>
        </div>
          <div className="body-middle-top">
            <h1>【お知らせ】</h1>
        { datas.map((data,index) => (
            <div className="Blog">
              <h2>{`#${data.blogid} ${data.blog_title}`}</h2>
              <img src={data.blog_image} alt="BodyImage" className="Blog-image"/> 
              <h3>{`${data.blog_content}`}</h3>
              <h4>{`${data.blog_time}`}</h4>
          </div>
        ))}
        </div> 
      </div>
  );
}

export default Blog;