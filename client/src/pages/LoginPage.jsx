import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = ({ onLoginSuccess }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Sign in to your account</p>
        </div>
        <LoginForm onLoginSuccess={onLoginSuccess} />
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Don't have an account? <a href="/register" className={styles.link}>Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;