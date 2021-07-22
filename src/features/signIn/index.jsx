import React, { useState } from 'react';
import styles from './styles.module.scss';
import Input from '../../components/Input';
import Button from '../../components/button';

const SignIn = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.modalPlace}>
      <div className={styles.title}>Sign in</div>
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
    </div>
  );
};
export default SignIn;
