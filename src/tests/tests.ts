// Напиши функцию, которая группирует массив объектов по значению указанного ключа.
// Реализуй функцию flatten, которая превращает вложенный массив в плоский (с возможностью указания глубины).

// Реализуй функцию, которая возвращает сумму при множественных вызовах: sum(1)(2)(3) == 6.
// Напиши свой вариант Function.prototype.bind — с поддержкой передачи контекста и частичных аргументов.
// Реализуй функцию deepClone, которая делает глубокую копию объекта.
// Реализуй простую версию EventEmitter с методами on, off и emit.
// Объясни порядок вывода в консоль для кода с промисами и setTimeout — в браузере и в Node.js.
// Реализуй функцию memoize(fn), которая кеширует результаты вызовов.
// Реализуй функцию compose или pipe, которая объединяет несколько функций в одну.
// Реализуй функцию для глубокого сравнения двух объектов (deepEqual).
// Реализуй LRU-кеш фиксированного размера с методами get и set.
// Реализуй функцию, которая делает retry вызова асинхронной функции заданное количество раз при ошибке.
// Реализуй простейшую версию fetch с таймаутом (например, timeoutFetch(url, ms)).
// Реализуй функцию, которая последовательно выполняет список асинхронных функций и возвращает результат всех.
// Реализуй функцию, которая объединяет несколько отсортированных массивов в один отсортированный.
// Реализуй функцию limitConcurrency(tasks, limit), которая выполняет задачи с ограничением числа параллельных промисов.
// Реализуй собственную реализацию функции reduce.
// Напиши собственную реализацию Promise.allSettled.
// В TypeScript: реализуй утилиту DeepReadonly<T>, делающую все поля рекурсивно readonly.
// В TypeScript: реализуй тип, который из строки "/user/:id/post/:postId" извлекает тип { id: string; postId: string }.
// Реализуй функцию, которая объединяет несколько отсортированных асинхронных итераторов (AsyncIterator) в один общий поток, сохранив порядок.
// Реализуй упрощённую версию собственного Promise (с поддержкой then, catch и finally)

// Напиши функцию, которая принимает массив чисел и возвращает их сумму.
const sumArrItems = (arr: number[]) => {
  //1 вариант
  // return arr.reduce((acc,el)=>acc+=el,0)

  //2 вариант
  let sum = 0;
  // arr.forEach(el=>sum+=el)
  // return sum

  //3 вариант
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      // i++
      continue;
    }
    sum += arr[i];
  }
  return sum;
};

// 19.12
// Реализуй функцию, которая переворачивает строку задом наперёд.
const reverseString = (str: string) => {
  //1 var
  // return str.split('').reverse().join()

  //2var
  let resStr = "";
  str.split("").forEach(char => (resStr += char));
  return resStr;
};

// Дан массив чисел. Верни новый массив, где каждое число умножено на 2.
const doubleArr = (arr: number[]) => {
  //1 var
  // return arr.map(el=>el*2)

  const resArr: number[] = [];
  arr.forEach(el => resArr.push(el * 2));
  return resArr;
};

// Реализуй функцию, которая проверяет, является ли строка палиндромом.
const isPolindrom = (str: string) => {
  //1 var
  // return str===str.split('').reverse().join('')

  //2 var
  let checkStr = "";
  for (let i = str.length; i > 0; i--) {
    checkStr += str[i];
  }
  return checkStr === str;
};

// Напиши функцию, которая возвращает массив уникальных значений из исходного массива.

const getUnicArr = (arr: any[]) => {
  //1 var
  // const setArr= new Set(arr)
  // return Array.from(setArr)

  //2 var
  const testObj: {[key: string]: string} = {};
  arr.forEach(el => (testObj[el] = ""));
  return Object.keys(testObj);
};

// 22.12
// Реализуй функцию, которая находит самое часто встречающееся значение в массиве.
const findNeo = arr => {
  const testObj = {};
  arr.forEach(el => {
    const key = String(el);
    testObj[key] ? testObj[key]++ : (testObj[key] = 1);
  });
  const result = Object.entries(testObj).sort((a, b) => b[1] - a[1]);

  return result[0][0];
};

// Реализуй простую функцию debounce(fn, delay), которая ограничивает частоту вызовов функции.
const debounce = (fn, delay) => {
  const timer = setTimeout(() => {
    fn();
    clearTimeout(timer);
  }, delay);
};

// Реализуй функцию throttle(fn, delay).
const throttle = (fn: () => void, delay: number) => {
  let isThrottle = false,
    lastUpdate = 0;

  return () => {
    const currentTime = Date.now();
    if (!isThrottle && currentTime - lastUpdate >= delay) {
      fn();
      lastUpdate = currentTime;
      isThrottle = true;
      setTimeout(() => (isThrottle = false), delay);
    }
  };
};
