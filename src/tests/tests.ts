// Напиши свой вариант Function.prototype.bind — с поддержкой передачи контекста и частичных аргументов.
// Реализуй простую версию EventEmitter с методами on, off и emit.

// Реализуй функцию compose или pipe, которая объединяет несколько функций в одну.

// Реализуй LRU-кеш фиксированного размера с методами get и set.
// Реализуй функцию, которая делает retry вызова асинхронной функции заданное количество раз при ошибке.
// Реализуй простейшую версию fetch с таймаутом (например, timeoutFetch(url, ms)).
// Реализуй функцию, которая последовательно выполняет список асинхронных функций и возвращает результат всех.
// Реализуй функцию, которая объединяет несколько отсортированных массивов в один отсортированный.
// Реализуй функцию limitConcurrency(tasks, limit), которая выполняет задачи с ограничением числа параллельных промисов.
// Реализуй собственную реализацию функции reduce.
// Напиши собственную реализацию Promise.allSettled.

// Реализуй функцию, которая объединяет несколько отсортированных асинхронных итераторов (AsyncIterator) в один общий поток, сохранив порядок.
// Реализуй упрощённую версию собственного Promise (с поддержкой then, catch и finally)

// Напиши функцию, которая принимает массив чисел и возвращает их сумму.
// const sumArrItems = (arr: number[]) => {
//   //1 вариант
//   // return arr.reduce((acc,el)=>acc+=el,0)

//   //2 вариант
//   let sum = 0;
//   // arr.forEach(el=>sum+=el)
//   // return sum

//   //3 вариант
//   for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i])) {
//       // i++
//       continue;
//     }
//     sum += arr[i];
//   }
//   return sum;
// };

// // 19.12
// // Реализуй функцию, которая переворачивает строку задом наперёд.
// const reverseString = (str: string) => {
//   //1 var
//   // return str.split('').reverse().join()

//   //2var
//   let resStr = "";
//   str.split("").forEach(char => (resStr += char));
//   return resStr;
// };

// // Дан массив чисел. Верни новый массив, где каждое число умножено на 2.
// const doubleArr = (arr: number[]) => {
//   //1 var
//   // return arr.map(el=>el*2)

//   const resArr: number[] = [];
//   arr.forEach(el => resArr.push(el * 2));
//   return resArr;
// };

// // Реализуй функцию, которая проверяет, является ли строка палиндромом.
// const isPolindrom = (str: string) => {
//   //1 var
//   // return str===str.split('').reverse().join('')

//   //2 var
//   let checkStr = "";
//   for (let i = str.length; i > 0; i--) {
//     checkStr += str[i];
//   }
//   return checkStr === str;
// };

// // Напиши функцию, которая возвращает массив уникальных значений из исходного массива.

// const getUnicArr = (arr: any[]) => {
//   //1 var
//   // const setArr= new Set(arr)
//   // return Array.from(setArr)

//   //2 var
//   const testObj: {[key: string]: string} = {};
//   arr.forEach(el => (testObj[el] = ""));
//   return Object.keys(testObj);
// };

// // 22.12
// // Реализуй функцию, которая находит самое часто встречающееся значение в массиве.
// const findNeo = arr => {
//   const testObj = {};
//   arr.forEach(el => {
//     const key = String(el);
//     testObj[key] ? testObj[key]++ : (testObj[key] = 1);
//   });
//   const result = Object.entries(testObj).sort((a, b) => b[1] - a[1]);

//   return result[0][0];
// };

// // Реализуй простую функцию debounce(fn, delay), которая ограничивает частоту вызовов функции.
// const debounce = (fn, delay) => {
//   const timer = setTimeout(() => {
//     fn();
//     clearTimeout(timer);
//   }, delay);
// };

// // Реализуй функцию throttle(fn, delay).
// const throttle = (fn: () => void, delay: number) => {
//   let isThrottle = false,
//     lastUpdate = 0;

//   return () => {
//     const currentTime = Date.now();
//     if (!isThrottle && currentTime - lastUpdate >= delay) {
//       fn();
//       lastUpdate = currentTime;
//       isThrottle = true;
//       setTimeout(() => (isThrottle = false), delay);
//     }
//   };
// };

// // 24.12
// // Реализуй функцию, которая возвращает сумму при множественных вызовах: sum(1)(2)(3) == 6.

// function sum(arg: number = 0) {
//   let current = arg;
//   const insideSum = (num: number) => {
//     current += num;
//     return insideSum;
//   };
//   insideSum.toString = () => current;
//   return insideSum;
//   //   return (s: number) => {
//   //   return sum(arg + s);
//   // };
// }]

// 30.01
// В TypeScript: реализуй утилиту DeepReadonly<T>, делающую все поля рекурсивно readonly.
// export type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

// // В TypeScript: реализуй тип, который из строки "/user/:id/post/:postId" извлекает тип { id: string; postId: string }.
// type Url = "/user/:id/post/:postId";

// const createNewType = (str: string) => {
//   const NeededKeys = str
//     .split("/")
//     .filter(el => el.includes(":"))
//     .map(el => el.replace(":", ""));
//   type ResultStr = (typeof NeededKeys)[number];
//   type Result = Record<ResultStr, string>;
// };
// export const testGeneric = <T>(arg: T): T => {
//   return arg;
// };
// 12.01
// Реализуй функцию deepClone, которая делает глубокую копию объекта.
// export const deepClone = (obj1: object, obj2: object) => {
//   // return {...obj2,...obj1}
//   const obj1Entries = Object.entries(obj1);
//   obj1Entries.forEach(elem => {
//     if (Array.isArray(elem[1])) {
//       obj2[elem[0]] = deepClone(elem[1], []);
//     } else if (typeof elem[1] === "object" && elem[1]) {
//       obj2[elem[0]] = deepClone(elem[1], {});
//     } else {
//       obj2[elem[0]] = elem[1];
//     }
//   });
//   return obj2;
// };
//** */
//     if (typeof obj !== 'object' || obj === null) {
//     return obj; // Возвращаем примитивы и null
//   }
//   let copy = Array.isArray(obj) ? [] : {}; // Создаем новый массив или объект
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       copy[key] = deepCopy(obj[key]); // Рекурсивно копируем вложенные значения
//     }
//   }
//   return copy;
//** */

// // Реализуй функцию для глубокого сравнения двух объектов (deepEqual).
// export const deepEqual = (obj1: object, obj2: object) => {
//   if (Object.is(obj1, obj2)) {
//     return true;
//   }
//   const obj1Keys = Object.keys(obj1);
//   const obj2Keys = Object.keys(obj2);

//   if (obj1Keys.length !== obj2Keys.length) {
//     return false;
//   }
//   const isAnyKeyExist = obj1Keys.every(key => obj2Keys.includes(key));
//   if (!isAnyKeyExist) {
//     return false;
//   }
//   const isEveryKeyValueEqual = obj1Keys.every(key => obj1[key] === obj2[key]);
//   return isEveryKeyValueEqual;
// };

//codewars
// [1, 2, 3, 4, 5, 6, 7];
// function nextBigger(n: number) {
//   //your code here
//   let result = -1;
//   if (n < 12) {
//     return result;
//   }
//   const stringNum = String(n);
//   if (stringNum.length > 2) {
//     const strArr = stringNum.split("");
//     const lastNum = strArr.pop();
//     let preLastNum = strArr.pop();
//     if (preLastNum === lastNum) {
//       const newPreLast = strArr.pop();
//       strArr.push(preLastNum);
//       preLastNum = newPreLast;
//     }
//     const begin = strArr.join("");

//     const newNum = parseInt(begin + lastNum + preLastNum);
//     if (newNum > parseInt(stringNum)) {
//       result = newNum;
//     }
//   } else {
//     if (parseInt(stringNum[1] + stringNum[0]) > parseInt(stringNum)) {
//       result = parseInt(stringNum[1] + stringNum[0]);
//     }
//   }
//   return result;
// }
// console.log(nextBigger(7));
// console.log(nextBigger(513));
// console.log(nextBigger(414));
// console.log(nextBigger(144));
// console.log(nextBigger(99999));

//codewars

// 19.01
// Напиши функцию, которая группирует массив объектов по значению указанного ключа.
// const groupArr = <T>(arr: T[], key: keyof T) => {
//   const resultGroups = {};

//   arr.forEach(el => {
//     const keyGroupValue = el[key];
//     if (resultGroups.hasOwnProperty(keyGroupValue as string)) {
//       resultGroups[keyGroupValue as string].push(el);
//     } else {
//       resultGroups[keyGroupValue] = [el];
//     }
//   });
//   return resultGroups;
// };

// 20.01
// Реализуй функцию flatten, которая превращает вложенный массив в плоский (с возможностью указания глубины).
export const flatten = (arr: any[], depth = 1) => {
  let depthStep = 0;
  const resultArr = [];

  const checkElemByArray = (array: any[]) => {
    array.forEach(el => {
      if (Array.isArray(el) && depthStep < depth) {
        depthStep++;
        checkElemByArray(el);
      } else {
        resultArr.push(el);
      }
    });
  };
  checkElemByArray(arr);
  return resultArr;
};

// Реализуй функцию memoize(fn), которая кеширует результаты вызовов.
export const memoize = (fn: Function) => {
  const mapCache = new Map();
  const weakCache = new WeakMap();

  return function (...args) {
    let isAnyArgObj = false,
      isAnyArgNull = false,
      isAnyArgNaN = false,
      isAllArgsPrimitive = true;

    const argsLikeAKey = [];
    const objectsArgs = [];
    args.forEach(el => {
      if (typeof el === "object") {
        if (el) {
          objectsArgs.push(el);
        } else {
          isAnyArgNull = true;
        }
        isAnyArgObj = true;
        isAllArgsPrimitive = false;
      } else if (el !== el && typeof el === "number") {
        isAnyArgNaN = true;
        isAllArgsPrimitive = false;
      } else {
        argsLikeAKey.push(el);
      }
    });
    const resultCache = new Map(),
      resultWeakCache = new Map();

    if (isAnyArgObj && !isAnyArgNull) {
      objectsArgs.forEach(key => {
        if (!weakCache.has(key)) {
          weakCache.set(key, new Map());
        }
        resultWeakCache.set("result", weakCache.get(key));
      });
      if (isAnyArgNaN) {
        args.forEach(arg => arg === arg && argsLikeAKey.push(arg));
        argsLikeAKey.forEach(key => {
          if (!mapCache.has(key)) {
            mapCache.set(key, new Map());
          }
          resultCache.set("result", mapCache.get(key));
        });
      } else {
        args.forEach(key => {
          if (!mapCache.has(key)) {
            mapCache.set(key, new Map());
          }
          resultCache.set("result", mapCache.get(key));
        });
      }
    } else if (!isAllArgsPrimitive && isAnyArgNaN) {
      args.forEach(arg => arg === arg && argsLikeAKey.push(arg));
      argsLikeAKey.forEach(key => {
        if (!mapCache.has(key)) {
          mapCache.set(key, new Map());
        }
        resultCache.set("result", mapCache.get(key));
      });
    } else {
      args.forEach(key => {
        if (!mapCache.has(key)) {
          mapCache.set(key, new Map());
        }
        resultCache.set("result", mapCache.get(key));
      });
    }
    if (resultCache.has("result")) {
      return resultCache.get("result");
    } else if (resultWeakCache.has("result")) {
      return resultWeakCache.get("result");
    } else {
      const result = fn(...args);
      resultCache.set("result", result);
      return result;
    }
  };
  // example
  //       const cache = new Map();

  //   return function (...args) {
  //     let node = cache;

  //     for (const arg of args) {
  //       if (!node.has(arg)) {
  //         node.set(arg, new Map());
  //       }
  //       node = node.get(arg);
  //     }

  //     if (node.has('result')) {
  //       return node.get('result');
  //     }

  //     const result = fn.apply(this, args);
  //     node.set('result', result);
  //     return result;
  //   };
};
