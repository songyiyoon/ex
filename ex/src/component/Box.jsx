import React from "react";

function Box({ num, name, image }) {
  //구조분해
  // let num = props.num;
  // let name = props.name;
  // let image = props.image;

  // let { num, name, image } = props;
  console.log(num);
  // let person = {
  //   name: "홍길동",
  //   age: 20,
  // };
  // let name = person.name;
  // let age = person.age;
  // console.log(`${name},${age}`);
  // let {name,age}=person;

  // console.log(props); //객체로 불려진다
  return (
    <div className="box">
      Box{num}
      <p>{name}</p>
      <div className="photo">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Box;
