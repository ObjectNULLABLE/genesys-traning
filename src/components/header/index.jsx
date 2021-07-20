import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Modal from '../modal';
import Input from '../Input';
import Button from '../button';

function Header() {
  const onRegister = () => {

  };

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [name, setName] = useState('');
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
              </div>
            ),
            footer: (
              <Button
                className={styles.buttonSubmit}
                onClick={() => {
                  setShowLogin(!showLogin);
                }}
                caption="sign in"
              />),
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
              <div className={styles.modalBody}>
                <div className={styles.inputs}>
                  <Input
                    placeholder="name"
                    type="text"
                    value={name}
                    onChange={setName}
                  />
                </div>
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
                <div className={styles.inputs}>
                  <Input
                    placeholder="confirm password"
                    type="password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                  />
                </div>
              </div>
            ),
            footer: (
              <Button
                className={styles.buttonSubmit}
                onClick={() => {
                  onRegister();
                }}
                caption="Create Account"
              />),
          }}
        </Modal>
        )}
      </div>
    </div>
  );
}
export default Header;
