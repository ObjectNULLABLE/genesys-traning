import React, { useState } from 'react';
import styles from './styles.module.scss';
import Input from '../../components/Input';
import Button from '../../components/button';

const SignUp = () => {
  const onRegister = () => {

  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className={styles.modalPlace}>
      <div className={styles.title}>Sign up</div>
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

        <Button
          className={styles.buttonSubmit}
          onClick={() => {
            onRegister();
          }}
          caption="Create Account"
        />
      </div>
    </div>
  );
};
export default SignUp;
