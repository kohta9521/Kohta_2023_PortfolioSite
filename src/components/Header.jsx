import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Kohta</h3>
      </div>

      <nav>
        <ul>
          <li className="first">
            <a href="">ホーム</a>
          </li>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/blog">ブログ</Link>
          </li>
          <li>
            <Link to="/contact">お問合せ</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;