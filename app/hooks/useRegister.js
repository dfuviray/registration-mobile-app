import React, {useState} from 'react';

export default function useRegister() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@domain.com',
      password: '12345aA',
      type: 'registered',
      sms: '+6391254687154',
      user_last_login: null,
    },
    {
      id: 2,
      name: 'Kevin Dave',
      email: 'kevin@domain.com',
      password: '12345aA',
      type: 'suspended',
      sms: '+6391254687154',
      user_last_login: null,
    },
  ]);

  const register = (userData) => {
    const {firstname, lastname, email, sms, password} = userData;
    const name = `${firstname} ${lastname}`;

    const user = data.find((d) => (d.email = user.email));

    if (user) return 'Email already exist';

    data.push({name: name, email: email, sms: sms, password: password});
  };

  return {register};
}
