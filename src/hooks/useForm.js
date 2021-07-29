import React, { useState, useEffect } from 'react';
import { validEmail } from '../utils';
const useLoginFormState = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);

  let isEmailValid = false;
  let isPasswordValid = false;
  if (validEmail(email)) {
    isEmailValid = true;
  }
  if (password) {
    isPasswordValid = true;
  }
  return {
    email: {
      value: email,
      set: setEmail,
      valid: isEmailValid,
    },
    password: {
      value: password,
      set: setPassword,
      valid: isPasswordValid,
    },
    submit: {
      value: isEmailValid && isEmailValid,
      set: () => setSubmit(true),
    },
  };
};
const useRegisterFormState = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('66');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);

  let isEmailValid = false;
  let isPasswordValid = false;
  let isPhoneValid = false;
  if (validEmail(email)) {
    isEmailValid = true;
  }
  if (password) {
    isPasswordValid = true;
  }
  return {
    name: {
      value: name,
      set: setName,
      valid: true,
    },
    email: {
      value: email,
      set: setEmail,
      valid: isEmailValid,
    },
    phone: {
      value: phone,
      set: setPhone,
      valid: isPhoneValid,
    },
    password: {
      value: password,
      set: setPassword,
      valid: true,
    },
    submit: {
      value: isEmailValid,
      set: () => setSubmit(true),
    },
  };
};
export { useLoginFormState, useRegisterFormState };
