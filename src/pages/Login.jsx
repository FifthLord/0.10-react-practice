import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
   return (
      <div>
         <h2>Сторінка логіну</h2>
         <form>
            <MyInput type="text" placeholder='ввндіть логін' />
            <MyInput type="password" placeholder='ввндіть пароль' />
            <MyButton>Увійти</MyButton>
         </form>
      </div>
   );
};

export default Login;