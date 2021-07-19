import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Modal from '../modal';
import Input from '../Input';
import Button from '../button';

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/weapon">Weapons</Link>
          <Link className={styles.navLink} to="/qualities">Qualities</Link>
          <Link className={styles.navLink} to="/talents">Talents</Link>
          <Link className={styles.navLink} to="/skills">Skills</Link>
          <Link className={styles.navLink} to="/adversaries">Adversaries</Link>
          <Link className={styles.navLink} to="/sources">Sources</Link>
          <div className={`${styles.navLink} ${styles.account}`} role="button" onKeyDown={() => {}} tabIndex={0} onClick={() => setShowLogin(!showLogin)}>Sign In</div>
          <div className={`${styles.navLink} ${styles.account}`}>Sign Up</div>
        </nav>
      </header>
      <div className={styles.modalPlace}>
        {showLogin && (
        <Modal
          show={showLogin}
          closeModal={() => { setShowLogin(!showLogin); setEmail(''); setPassword(''); }}
        >
          {{
            title: 'Sign in',
            modalBody: (
              <div className={styles.modalBody}>
                <div className={styles.inputs}>
                  <span>email:</span>
                  <Input type="text" value={email} onChange={setEmail} />
                </div>
                <div className={styles.inputs}>
                  <span>password:</span>
                  <Input type="password" value={password} onChange={setPassword} />
                </div>
              </div>
            ),
            footer: (
              <Button
                className={styles.buttonSubmit}
                onClick={() => { setShowLogin(!showLogin); }}
                caption="sign in"
              />),
          }}
        </Modal>
        )}
      </div>
    </div>
  );
}
export default Header;
