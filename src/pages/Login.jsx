import React from 'react';
import { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
   const { isAuth, setIsAuth } = useContext(AuthContext);
   const login = event => {
      event.preventDefault();
      setIsAuth(true);
      localStorage.setItem('auth', 'true');
   }


   return (
      <div>
         <h2>Сторінка логіну</h2>
         <form onSubmit={login}>
            <MyInput type="text" placeholder='введіть логін' />
            <MyInput type="password" placeholder='введіть пароль' />
            <MyButton>Увійти</MyButton>
         </form>
      </div>
   );
};

export default Login;