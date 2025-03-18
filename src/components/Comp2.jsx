import React from "react";
import { useStore1 } from "../store/store1";

export default function Comp2() {
  console.log("R 2");
  const store1 = useStore1();

  const a1 = store1.a1.get();
  const obj1 = store1.obj1.get();
  const obj11 = store1.obj11.get({noproxy:true});
  const obj3 = store1.obj3.get();
  const arr = store1.arr.get();
  const arr2 = store1.arr2.get();
  const arr3 = store1.arr3.get({noproxy:true});
  const arr4 = store1.arr4.get({noproxy:true});


  return (
    <div>
    </div>
  );
}
