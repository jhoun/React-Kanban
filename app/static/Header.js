import React from 'react';
import styles from './Header.scss';
import { Link } from 'react-router';

const Header = () => (
  <div className={styles.header}>
    <header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/new-page">New Page</Link></li>
      </ul>
        <h2>Kanban</h2>
    </header>
  </div>
);

export default Header;