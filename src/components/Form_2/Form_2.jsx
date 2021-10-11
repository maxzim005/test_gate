import s from './Form_2.module.css';
import React, { useState, useEffect } from 'react';

function Form_2() {
  // Объявление новой переменной состояния «count»
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}

export default Form_2;