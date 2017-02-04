import React from 'react';
import styles from './Header.scss';
import { Link } from 'react-router';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.title}> Kanban </div>
    <div className={styles.newTask}>
      <button><Link to="/new-page">New Page</Link></button>
    </div>
  </div>
);

export default Header;