import React from "react";

const Nav = () => {
  return (
    // style={{}} 有兩個刮好 外層代表JSX expression語法,內層是物件
    <nav style={{ color: "pink" }}>
      <ul>
        <li>
          <a href="#" style={{ backgroundColor: "lightblue" }}>
            首頁
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "red" }}>
            另外一個頁面
          </a>
        </li>
      </ul>
      <p>來自Nav</p>
    </nav>
  );
};

export default Nav;
