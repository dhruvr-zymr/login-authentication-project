import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import styles from './LoginForm.module.css';

const LoginForm = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.username.trim()) {
      setError('Username is required');
      return false;
    }
    if (!formData.password.trim()) {
      setError('Password is required');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      const response = await api.post('/auth/login', {
        username: formData.username.trim(),
        password: formData.password,
      });

      const { token, user } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      onLoginSuccess(user);
      navigate('/');
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Login failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}
      
      <div className={styles.formGroup}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          className={styles.input}
          disabled={loading}
          autoComplete="username"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={styles.input}
            disabled={loading}
            autoComplete="current-password"
            required
          />
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
            disabled={loading}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={loading}
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Don't have an account? <Link to="/register" className={styles.link}>Sign up</Link>
        </p>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func,
};

LoginForm.defaultProps = {
  onLoginSuccess: () => {},
};

export default LoginForm;