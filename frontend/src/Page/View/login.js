import '../Component/Chat.css';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import { useAuth } from '../../AuthContext';

function Login() {

  const { isAuthenticated, setAuthcheck } = useAuth();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  let navigate = useNavigate();

  function handleClick() {
    navigate('/'); // ここには、遷移したいパスを指定します。
  }

  const respon = async() => {
    try {
        const response = await fetch('https://hanetsukiblackssite.onrender.com/rest-auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: name,
                password: password
            }),
            });
            if (!response.ok) {
                const errormes = await response.json();
                //setError(response);
                setErrors({status: 'failed', errormessage: errormes});
            } else {
                const data = await response.json()
                localStorage.setItem('token', data.key);
                setAuthcheck(true);
                setErrors({status: 'succsess', errormessge: data});
                navigate('/Admin');
            }
        }catch(error){
            // console.error('失敗', error);
        }
        
    };

    useEffect(()=>{
      if (isAuthenticated) {
        navigate('/Admin');
      }
    },[isAuthenticated]);

  // Intl.DateTimeFormatを使用してローカルタイムゾーンでの表示形式を

  return (
      <div className="body">
        <div className="header-text-container">
          <h4 onClick={handleClick} style={{cursor: 'pointer'}} className="header-text">Hanetsuki Blacks</h4>
        </div>
        <div className="body-middle-top">
          <h1>【管理者ログイン】</h1>
          {errors.status === 'failed' ? <h2 style={{color: 'red'}}>ログインに失敗しました</h2> : <h2></h2>}
          <div className="input-zone">
            <div className="user-name">
              <h2 className="name">UserName</h2>
              <textarea type="text" className="name-input" placeholder="IDを入力" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="user-message">
              <h2 className="name">Password</h2>
              <textarea type="text" className="name-input" placeholder="Passwordを入力" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <h3 style={{cursor: 'pointer'}} onClick={()=>{respon()}} className="submit-button">ログイン</h3>    
          </div>
        </div>
      </div>
  );
}

export default Login;