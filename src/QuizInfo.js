import React, { useState } from 'react';

const QuizInfo = () => {
  const [form, setForm] = useState({
    name: '',
    nickname: '',
  });
  //   const [name, setName] = useState('');
  //   const [nickname, setNickname] = useState('');

  const { name, nickname } = form; // 비구조화 할당

  const onChangeForm = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.value]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  return (
    <div>
      <div>
        <input name='name' value={name} onChange={onChangeForm} />
        <input name='nickname' value={nickname} onChange={onChangeForm} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default QuizInfo;
