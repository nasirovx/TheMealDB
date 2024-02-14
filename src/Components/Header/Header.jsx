import React, { useState } from 'react';
import s from './Header.module.css';
import Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate()
  const [input, setInput] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/search/${input}`)
    setInput('')
  } 

  return (
    <nav className={s.navbar}>
      <div className="container">
        <div className={s.nav_content}>
          <Link to='/'><img src={Logo} width={296} height={41} alt="" /></Link>
          <div className={s.nav}>
            <div className={s.Link}>
              <div className={s.home}><Link to='/'>Home</Link></div>
              <div className={s.api}><Link to='/api'>API</Link></div>
            </div>
          <form onSubmit={handleSubmit} className={s.form_control}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder=' Search' type="text" />
            <button type='submit'>Send</button>
          </form>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Header