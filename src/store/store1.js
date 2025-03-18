import { hookstate, useHookstate } from '@hookstate/core';
import { devtools } from '@hookstate/devtools';


const initData = {
  a1:1,
  obj1:{},
  obj11:{a1:1},
  obj3:{
    a1:{
      a2:{
        a3:1
      }
    }
  },
  arr:[],
  arr2:[2],
  arr3:[1],
  arr4:[1],

};



export const store1 = hookstate({
  ...structuredClone(initData),
}, devtools({ key: 'Store1' }));

export function useStore1() {
  return useHookstate(store1)
};
