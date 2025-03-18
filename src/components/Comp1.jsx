import React from "react";
import { useStore1 } from "../store/store1";
import "../styles/style.css";

export default function Comp1() {
  console.log("R 1");
  const store1 = useStore1();

  const a1 = store1.a1.get();
  const obj1 = store1.obj1.get();
  const obj11 = store1.obj11.get({ noproxy: true });
  const arr = store1.arr.get();
  const arr2 = store1.arr2.get();
  const arr3 = store1.arr3.get({ noproxy: true });
  const arr4 = store1.arr4.get({ noproxy: true });

  const f0 = () => {
    store1.merge({ www: 1 });
  };

  const f00 = () => {
    store1.merge({ a1: 1 });
  };

  const f1 = () => {
    store1.a1.set(Math.random());
  };

  const f2 = () => {
    store1.a1.set(1);
  };

  const f2_2 = () => {
    store1.a1.set(1);
    store1.a1.merge(1);
  };

  const f3 = () => {
    store1.obj1.set({ a1: 1 });
  };

  const f4 = () => {
    store1.obj1.merge({ a1: 1 });
  };

  const f5 = () => {
    store1.obj11.set({ a1: 1 });
  };

  const f6 = () => {
    store1.obj11.merge({ a1: 1 });
  };

  const f7 = () => {
    store1.arr[0].set(1);
  };

  const f8 = () => {
    store1.arr[0].merge(1);
  };

  const f9 = () => {
    store1.arr2[0].set(1);
  };

  const f10 = () => {
    store1.arr2[0].merge(1);
  };

  const f11 = () => {
    store1.arr3[0].set(3);
  };

  const f12 = () => {
    store1.arr3[0].merge(3);
  };

  const f13 = () => {
    store1.arr4[0].set(Math.random());
  };

  const f14 = () => {
    store1.arr4[0].merge(Math.random());
  };

  return (
    <div className="block">
      <div className="header">
        <p className="header-title">
          &bull; K1 - компонент который генерит экшены + подписка
        </p>
        <p className="header-title">
          &bull; K2 - компонент который подписан на экшены
        </p>
        <p className="header-title">&bull; Открыть консоль f12</p>
      </div>

      <div>
        <hr />
        <h3 className="bad mb15">Грубейшие ошибки:</h3>
        <div className="example">
          <p className="example-title">&#10062; Нет инит ключа в сторе!</p>
          <div className="example-body bad">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f0}>
              {"store{} / store1.merge({ www: 1 });"}
            </button>
            <p className="warning">Ключ с инит данными должен быть в сторе.</p>
          </div>
          <p className="example-footer">
            &#129534; Ререндер 1 раз всех компонентов которые юзают store1.
          </p>
        </div>
        <div className="example">
          <p className="example-title">&#10062; Мерж в стор.</p>
          <div className="example-body bad">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f00}>
              {"store{a1: 1} / store1.merge({ a1: 1 })"}
            </button>
            <p className="warning">
              Не тригерить обновления стора напрямую.
            </p>
          </div>
          <p className="example-footer">
            &#129534; Ререндер всех подписанных компонентов при каждом экшене.
          </p>
          <p className="example-footer">
            &#129534; Ререндер при каждом экшене, неважно данные в сторе есть
            или нет.
          </p>
          <p className="example-footer">
            &#129534; Ререндер при каждом экшене, даже если данные одинаковые.
          </p>
        </div>
        <hr />
        <h3>Примитивы</h3>
        #п1
        <div className="example">
          <p className="example-title">
            &#9989; Новые данные тригерят ререндер у всех подписанных
            компонентов.
          </p>
          <div className="example-body">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f1}>
              {"store{a1:1} / store1.a1.set(Math.random())"}
            </button>
          </div>
        </div>
        #п2
        <div className="example">
          <p className="example-title">
            &#9989; Нет ререндера если в сторе и при добавлении одинаковые
            значения.
          </p>
          <div className="example-body good">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f2}>
              {"store{a1:1} / store1.a1.set(1)"}
            </button>
            <p className="example-noty">Нормальное поведение</p>
          </div>
          <p className="example-footer">
            &#129534; Нет ререндера у подписанных компонентов.
          </p>
        </div>
        <hr />
        <h3>Обьекты</h3>
        1)
        <div className="example-body">
          <button className="btn" onClick={f3}>
            {"store{obj1:{}} / store1.obj1.set({ a1: 1 })"}
          </button>
          <p>K1 = K2</p>
          <p>K2 - ререндер при каждом экшене</p>
        </div>
        <div className="example-body good">
          <button className="btn" onClick={f4}>
            {"store{obj1:{}} / store1.obj1.merge({ a1: 1 })"}
          </button>
          <p>K1 = K2</p>
          <p>
            Подписка: const obj = store1.obj1.get(); <br />
            - Нет ререндера если в сторе и при добавлении одинаковые значения
            <br />
          </p>
        </div>
        2)
        <div className="example-body">
          <button className="btn" onClick={f5}>
            {"store{obj1:{}} / store1.obj11.set({ a1: 1 })"}
          </button>
          <p>K1 = K2</p>
          <p>K2 - ререндер при каждом экшене</p>
        </div>
        <div className="example-body">
          <button className="btn" onClick={f6}>
            {"store{obj11:{}} / store1.obj11.merge({ a1: 1 })"}
          </button>
          <p>K1 = K2</p>
          <p>
            K2 {"Подписка: const obj1 = store1.obj1.get({noproxy:true})"};<br />
            - ререндер при каждом екшене в обьект
          </p>
        </div>
        <hr />
        <h3>Массивы</h3>
        1) Вообще ни один компонент не слушает arr
        <div className="example-body">
          <button className="btn" onClick={f7}>
            {"store{arr:[]} / store1.arr[0].set(1);"}
          </button>
          <p>K1 - ререндер 1 раз</p>
          <p>K2 - не ререндерится</p>
        </div>
        <div className="example-body">
          <button className="btn" onClick={f8}>
            {"store{arr:[]} / store1.arr[0].merge(1);)"}
          </button>
          <p>K1 - ререндер 1 раз</p>
          <p>K2 - не ререндерится</p>
        </div>
        2) Слушают arr2 без noproxy
        <div className="example-body good">
          <button className="btn" onClick={f9}>
            {"store{arr2:[3]} / store1.arr2[0].set(1);"}
          </button>
          <p>K1 - не ререндерится</p>
          <p>K2 - не ререндерится</p>
        </div>
        <div className="example-body good">
          <button className="btn" onClick={f10}>
            {"store{arr2:[3]} / store1.arr2[0].merge(1);)"}
          </button>
          <p>K1 - не ререндерится</p>
          <p>K2 - не ререндерится</p>
        </div>
        3) Слушают arr2 c noproxy:true (одинаковые данные)
        <div className="example-body">
          <button className="btn" onClick={f11}>
            {"store{arr3:[1]} / store1.arr3[0].set(1);"}
          </button>
          <p>K1 - Одинаковые данные - нет ререндера</p>
          <p>K2 - Одинаковые данные - нет ререндера</p>
        </div>
        <div className="example-body">
          <button className="btn" onClick={f12}>
            {"store{arr3:[1]} / store1.arr3[0].merge(1);)"}
          </button>
          <p>K1 - Одинаковые данные - нет ререндера</p>
          <p>K2 - Одинаковые данные - нет ререндера</p>
        </div>
        4) Слушают arr2 c noproxy:true (данные всегда разные)
        <div className="example-body">
          <button className="btn" onClick={f13}>
            {"store{arr4:[1]} / store1.arr4[0].set(Math.random());"}
          </button>
          <p>K1 - ререндер при каждом экшене</p>
          <p>K2 - ререндер при каждом экшене</p>
        </div>
        <div className="example-body">
          <button className="btn" onClick={f14}>
            {"store{arr4:[1]} / store1.arr4[0].merge(Math.random());)"}
          </button>
          <p>K1 - ререндер при каждом экшене</p>
          <p>K2 - ререндер при каждом экшене</p>
        </div>
      </div>
    </div>
  );
}
