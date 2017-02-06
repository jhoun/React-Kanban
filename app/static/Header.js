import React from 'react';
import styles from './Header.scss';
import { Link } from 'react-router';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.title}> KANBAN </div>
    <div className={styles.newTask}>
      <Link className={styles.btn} to="/new-task"> + NEW TASK</Link>
    </div>
  </div>
);

export default Header;