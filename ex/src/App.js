import "./App.css";
import Box from "./component/Box";

function App() {
  //주석달기 (//) return은 {}중괄호가 들어간다   <Box /> {/* //component */}
  const name = "제목";
  const list = ["홍길동", "강감찬", "이순신"];
  return (
    <div className="first" style={{ color: "orange" }}>
      <h2>{name}</h2>
      <ul>
        {list.map((item) => {
          <li>{item}</li>;
        })}
        <li>홍길동</li>
        <li>강감찬</li>
        <li>이순신</li>
      </ul>
      <Box
        name="놀부"
        num={1}
        image="https://cdn.pixabay.com/photo/2020/05/12/08/21/thistle-5161762_1280.jpg"
      />
      <Box
        name="흥부"
        num={2}
        image="https://media.istockphoto.com/id/1945003328/ko/%EC%82%AC%EC%A7%84/%ED%91%B8%EB%A5%B8-%EB%AC%BC%EA%B2%B0-%EC%B6%94%EC%83%81-%EB%98%90%EB%8A%94-%EC%9E%94%EB%AC%BC%EA%B2%B0-%EB%AC%BC-%EC%A7%88%EA%B0%90-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%A0%9C%ED%92%88-%EC%A0%84%EC%8B%9C%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%B0%B1%EC%83%89-%EC%97%B0%EB%8B%A8.jpg?s=2048x2048&w=is&k=20&c=ceBr4Eeu2_2n7S5XDWU7-fftHM0KNZfeKvqABgknsxE="
      />
      <Box
        name="제비"
        num={3}
        image="https://cdn.pixabay.com/photo/2021/12/31/14/01/waterdrop-6905894_1280.jpg"
      />
    </div>
  );
}

export default App;
