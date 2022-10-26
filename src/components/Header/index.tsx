import Logout from '../../assets/img/logout.svg';

import './style.css';

const Header = () => {
  return (
    <header className="header">
      <span className="logo">Sexta é nóis</span>
      <div className="headerMenu">
        <span className="user">
          Giovanni
        </span>
        <button className="logoutBtn">
          <img src={Logout} alt="logout" />
        </button>
      </div>
    </header>
  )
}

export default Header;