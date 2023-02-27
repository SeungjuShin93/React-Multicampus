// import React from 'react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

class MyComponent extends Component {
  static defaultProps = {
    name: '홍길동',
    name2: 'honggildong',
  };

  static propTypes = {
    name: PropTypes.string,
    name2: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// const MyComponent = ({ name, name2, favoriteNumber, children }) => {
//   // const { name, name2, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}, {name2}입니다.
//       <br /> children 값은 {children} 입니다. <br />
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: '홍길동',
//   name2: 'honggildong',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   name2: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;
