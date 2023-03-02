import './App.css';
import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPractice2 from './EventPractice2';
import EventPractice3 from './EventPractice3';
import ScrollBox from './ScrollBox';
import QuizFormInput from './QuizFormInput';
import QuizFormInput2 from './QuizFormInput2';
import QuizFormInput3 from './QuizFormInput3';
import QuizFormInput4 from './QuizFormInput4';
import QuizFormInput5 from './QuizFormInput5';
import IterationSample from './IterationSample';
// import './form.css'; // form 로그인 css 파일
// function App() {
// const name = '뤼왝트';
// return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;
// ===================================================================
// const name = '뤼왝트';
// return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
// ===================================================================
// const number = 0;
// return number && <div>내용</div>; // 주의! 리액트에서 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문입니다. 여기서 한 가지 주의해야 할 점이 있는데요. falsy한 값인 0은 예외적으로 화면에 나타난다는 것입니다.
// ===================================================================
// const name = undefined;
// return name;
// ===================================================================
// const name = undefined;
// return name || '값이 undefined입니다.';
// ===================================================================
// const name = undefined;
// return <div>{name}</div>;
// ===================================================================
// const name = undefined;
// return <div>{name || '리액트'}</div>;
// ===================================================================
// const name = undefined;
// const a = name || '리액트';
// return <div>{a}</div>; // name 변수의 값이 참이면 a에 대입, undefined인 경우에는 리액트를 a 변수에 저장
// const name = '리액트';
// const style = {
//   // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
//   backgroundColor: 'black',
//   color: 'aqua',
//   fontSize: '48px', // font-size -> fontSize
//   fontWeight: 'bold', // font-weight -> fontWeight
//   padding: 16, // 단위를 생략하면 px로 지정됩니다.
// };
// return <div style={style}>{name} </div>;
// ===================================================================
// return (
//   <form>
//     <fieldset>
//       <legend>회원 기본 정보</legend>
//       <ol>
//         <li>
//           <label for='userid'>아이디</label>
//           <input
//             type='text'
//             id='userid'
//             name='userid'
//             required
//             autofocus
//             placeholder='영문,숫자 사용. 10자미만'
//           />
//         </li>
//         <li>
//           <label for='pwd1'>비밀번호</label>
//           <input
//             type='password'
//             id='pwd1'
//             name='pwd1'
//             required
//             placeholder='영문,숫자 사용. 6~10자리'
//           />
//         </li>
//         <li>
//           <label for='pwd2'>비밀번호 확인</label>
//           <input type='password' id='pwd2' name='pwd2' required />
//         </li>
//         <li>
//           <label for='fullname'>이름</label>
//           <input type='text' id='fullname' name='fullname' required />
//         </li>
//         <li>
//           <label for='age'>나이</label>
//           <input
//             id='age'
//             name='age'
//             type='number'
//             min='1'
//             max='65'
//             step='1'
//           />
//         </li>
//         <li>
//           <label for='birth'>생일</label>
//           <input id='birth' name='birth' type='date' />
//         </li>
//         <li>
//           <label for='email'>이메일 주소</label>
//           <input
//             id='email'
//             name='email'
//             type='email'
//             autocomplete='off'
//             placeholder='zoca01@icore.com'
//             required
//           />
//         </li>
//         <li>
//           <label for='tel'>핸드폰</label>
//           <input id='tel' name='tel' type='tel' autocomplete='off' />
//         </li>
//       </ol>
//     </fieldset>
//     <fieldset>
//       <legend>회원 추가 정보</legend>
//       <ol>
//         <li>
//           <label for='job'>직업</label>
//           <input list='job' name='job' />
//           <datalist id='job'>
//             <option value='회사원'></option>
//             <option value='교사'></option>
//             <option value='프로그래머'></option>
//             <option value='자영업'></option>
//             <option value='기타'></option>
//           </datalist>
//         </li>
//         <li>
//           <label for='office'>오피스 활용</label>
//           <input
//             id='office'
//             name='com'
//             type='range'
//             min='1'
//             max='5'
//             step='1'
//           />
//         </li>
//       </ol>
//     </fieldset>
//     <fieldset>
//       <button type='submit'>입력</button>
//     </fieldset>
//   </form>
// );
// ===================================================================
// const name = '리액트';
// return <div className='react'>{name}</div>;
// ===================================================================
//   const name = '리액트';
//   return (
//     <>
//       {/* 주석은 이렇게 작성합니다. */}
//       <div
//         className='react' // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
//       >
//         {name}
//       </div>
//       // 하지만 이런 주석이나 /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
//       <input />
//     </>
//   );
// }

// class App extends Component {
//   render() {
//     const name = '리액트';
//     return <div className='react'>{name}</div>;
//   }
// }

// function App() {
//   return <MyComponent />;
// }

// const App = () => {
//   return (
//     <MyComponent name='React!!!' favoriteNumber={1}>
//       리액트
//     </MyComponent>
//   );
// };

// const App = () => {
//   return <Counter />;
// };

// const App = () => {
//   return <Say />;
// };

// const App = () => {
//   return <EventPractice3 />;
// };

// const App = () => {
//   return <ScrollBox />;
// };
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }
function App() {
  return <QuizFormInput5 />;
}

export default App;
