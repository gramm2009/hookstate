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

  const f3 = () => {
    store1.obj1.set({ a1: 1 });
  };

  const f4 = () => {
    store1.obj1.merge({ a1: 1 });
  };

  const f5 = () => {
    store1.obj11.merge({ a1: 1 });
  };

  const f6 = () => {
    store1.obj3.merge({ a1: {a:4} });
  };

  const f7 = () => {
    store1.arr[0].set(1);
  };

  const f8 = () => {
    store1.arr2[0].set(2);
  };

  const f11 = () => {
    store1.arr3[0].set(1);
  };

  const f12 = () => {
    store1.arr3[0].merge(3);
  };

  const f13 = () => {
    store1.arr4[0].set(Math.random());
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
        #f0
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
        #f00
        <div className="example">
          <p className="example-title">&#10062; Мерж в стор.</p>
          <div className="example-body bad">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f00}>
              {"store{a1: 1} / store1.merge({ a1: 1 })"}
            </button>
            <p className="warning">Не тригерить обновления стора напрямую.</p>
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
        #f1
        <div className="example">
          <p className="example-title">&#9989; Set новых данных.</p>
          <div className="example-body good">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f1}>
              {"store{a1:1} / store1.a1.set(Math.random())"}
            </button>
            <p className="example-noty">Нормальное поведение</p>
          </div>
          <p className="example-footer">
            &#129534; Ререндер у всех подписанных компонентов при каждом екшене.
          </p>
        </div>
        #f2
        <div className="example">
          <p className="example-title">
            &#9989; Set данных которые уже есть с одинаковым значением.
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



        #f3
        <div className="example">
          <p className="example-title">&#10062; Перезапись обьекта</p>
          <div className="example-body bad">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f3}>
              {"store{obj1:{}} / store1.obj1.set({ a1: 1 })"}
            </button>
            <p className="example-noty">Не использовать Set для обьекта</p>
          </div>
          <p className="example-footer">
            &#129534; Ререндер компонента каждый раз с такой подпиской : const a1
            = store1.a1.get();
          </p>
        </div>

        #f4
        <div className="example">
          <p className="example-title">&#9989; Добовление новых полей с данными в обьект</p>
          <div className="example-body">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f4}>
              {"store{obj1:{}} / store1.obj1.merge({ a1: 1 })"}
            </button>
            <p className="example-noty">Нормальное поведение</p>
          </div>
          <p className="example-footer">
            &#129534; Произойдет ререндер компонента с такой подпиской 1 раз: const obj1 = store1.obj1.get();
          </p>
          <p className="example-footer">
            &#129534; Если a1 получит после этого новое значение, то компонет не будет ререндерится с такой подпиской: const obj1 = store1.obj1.get();
          </p>
        </div>


        #f5
        <div className="example">
          <p className="example-title">&#10062; Обновление существующих полей данными которые уже есть (noproxy:true)</p>
          <div className="example-body bad">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f5}>
              {"store{obj11:{a1:1}} / store1.obj11.merge({ a1: 1 })"}
            </button>
            <p className="example-noty">Нельзя слушать общий обьект с помощью (noproxy:true)</p>
          </div>
          <p className="example-footer">
            &#129534; Ререндер на каждый екшен в стор, подписка: const obj11 = store1.obj11.get(noproxy:true);
          </p>
        </div>


        #f6
        <div className="example">
          <p className="example-title">&#9989; Глубокий обьект</p>
          <div className="example-body good">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f6}>
              {"store{obj3:{a1:{a2:{a3:1}}}} / store1.obj3.merge({ a1: {a:4} })"}
            </button>
            <p className="example-noty">Нормальное поведение</p>
          </div>
          <p className="example-footer">
            &#129534; Нет ререндера при такой подписке т.к. считается что поля самого обьекта незатронуты: const obj3 = store1.obj3.get();;
          </p>
        </div>

        <hr />
        <h3>Массивы</h3>

        #f7
        <div className="example">
          <p className="example-title">&#10062;Добавление данных в пустой массив</p>
          <div className="example-body">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f7}>
              {"store{arr:[]} / store1.arr[0].set(1); store1.arr[0].merge(1);"}
            </button>
            <p className="example-noty">Нормальное поведение</p>
          </div>
          <p className="example-footer">
            &#129534; Ререндер 1 раз компонента, подписка: const arr = store1.arr.get();
          </p>
        </div>

        #f8
        <div className="example">
          <p className="example-title">&#10062; Изменение сущ. данных в массиве у конкретного индекса</p>
          <div className="example-body">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f8}>
              {"store{arr2:[2]} / store1.arr2[0].set(2); store1.arr2[0].merge(2);"}
            </button>
            <p className="example-noty">Нормальное поведение</p>
          </div>
          <p className="example-footer">
            &#129534; Нет ререндера, подписка: const arr = store1.arr2.get();
          </p>
        </div>

        #f11
        <div className="example">
          <p className="example-title">&#10062; Слушают arr3 c noproxy:true (вводят одинаковые данные)</p>
          <div className="example-body">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f11}>
              {"store{arr3:[1]} / store1.arr3[0].set(1);"}
            </button>
            <p className="example-noty"></p>
          </div>
          <p className="example-footer">
            &#129534; Нет ререндера с подпиской: const arr3 = store1.arr3.get( noproxy: true );
          </p>
        </div>

        #f13
        <div className="example">
          <p className="example-title">&#10062; Слушают arr4 c noproxy:true (данные всегда разные)</p>
          <div className="example-body">
            <span className="hand-right">&#128073;</span>
            <button className="btn" onClick={f13}>
            {"store{arr4:[1]} / store1.arr4[0].set(Math.random());"}
            </button>
            <p className="example-noty"></p>
          </div>
          <p className="example-footer">
            &#129534; Ререндер при каждом екшене;
          </p>
        </div>

      </div>
    </div>
  );
}
