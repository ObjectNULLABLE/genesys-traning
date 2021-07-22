import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import Modal from '../modal';
import Input from '../Input';
import Button from '../button';
import signUp from '../../features/signup/signUp';

function Header() {
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.links}>
            <Link className={styles.navLink} to="/weapon">Weapons</Link>
            <Link className={styles.navLink} to="/qualities">Qualities</Link>
            <Link className={styles.navLink} to="/talents">Talents</Link>
            <Link className={styles.navLink} to="/skills">Skills</Link>
            <Link className={styles.navLink} to="/adversaries">Adversaries</Link>
            <Link className={styles.navLink} to="/sources">Sources</Link>
          </div>
          <div className={styles.accountPlace}>
            <div
              className={`${styles.navLink} ${styles.account}`}
              role="button"
              onKeyDown={() => {}}
              tabIndex={0}
              onClick={() => {
                setShowRegister(false);
                setShowLogin(!showLogin);
              }}
            >
              Sign In
            </div>
            <div
              className={`${styles.navLink} ${styles.account}`}
              role="button"
              onKeyDown={() => {}}
              tabIndex={0}
              onClick={() => {
                setShowLogin(false);
                setShowRegister(!showRegister);
              }}
            >
              Sign Up
            </div>
          </div>
        </nav>
      </header>
      <div className={styles.modalPlace}>
        {showLogin && (
        <Modal
          show={showLogin}
          closeModal={() => {
            setShowLogin(!showLogin);
            setEmail('');
            setPassword('');
          }}
        >
          {{
            title: 'Sign in',
            modalBody: (
              <div className={styles.modalBody}>
                <div className={styles.inputs}>
                  <Input
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={setEmail}
                  />
                </div>
                <div className={styles.inputs}>
                  <Input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                  />
                </div>
                <Button
                  className={styles.buttonSubmit}
                  onClick={() => {
                    setShowLogin(!showLogin);
                  }}
                  caption="sign in"
                />
              </div>
            ),
          }}
        </Modal>
        )}
        {showRegister && (
        <Modal
          show={showRegister}
          closeModal={() => {
            setShowRegister(!showRegister);
          }}
        >
          {{
            title: 'Sign Up',
            modalBody: (
              <form>
                <div className={styles.modalBody}>
                  <div className={styles.inputs}>
                    <Input
                      placeholder="name"
                      type="text"
                      value={username}
                      onChange={setUsername}
                    />
                  </div>
                  <div className={styles.inputs}>
                    <Input
                      className={styles.input}
                      placeholder="email"
                      type="email"
                      value={email}
                      onChange={setEmail}
                    />
                  </div>
                  <div className={styles.inputs}>
                    <Input
                      className={styles.passwordInput}
                      placeholder="password"
                      minLength={6}
                      type="password"
                      value={password}
                      onChange={setPassword}
                    />
                  </div>
                  <div className={styles.inputs}>
                    <Input
                      className={styles.passwordInput}
                      minLength={6}
                      placeholder="confirm password"
                      type="password"
                      value={confirmPassword}
                      onChange={setConfirmPassword}
                    />
                  </div>
                  <Button
                    className={styles.buttonSubmit}
                    onClick={() => {
                      dispatch(signUp({
                        username,
                        email,
                        password,
                      }));
                    }}
                    caption="Sign Up"
                  />
                </div>
              </form>
            ),
          }}
        </Modal>
        )}
      </div>
    </div>
  );
}

export default Header;
