import React from 'react';

// 화살표 함수
// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// 선언적 함수
// function MyComponent() {
//   return <div>나의 새롭고 멋진 컴포넌트!!</div>;
// }

// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {props.name}, {props.name2}입니다.
//     </div>
//   );
// };

const MyComponent = ({ name, name2 }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}, {name2}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '홍길동',
  name2: 'honggildong',
};

export default MyComponent;
