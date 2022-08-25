
# Character card

В рамках разработки игры периодически нужно печатать таблички, отображающие свойства объектов. Вам нужно реализовать функцию, которая для переданного объекта возвращает массив его свойств со значениями,отсортированный по свойствам (порядок сортировки свойств - второй аргумент). Т.е. сначала идёт сортировка по тому, как указано в массиве сортировки, для тех ключей, для которых в массиве сортировки нет записи, сортировка идёт в алфавитном порядке.

***

In games you need to print cards with object properties, for example proporties of *character*. Here is the function which returns array of properties with values of passed object. The 1st param of function is object and the 2nd order of sort by keys.

Passed object example:

```js
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
```

Sort order of proporties:

```js
["name", "level"]
```

Example of func call:

```js
orderByProps(obj, ["name", "level"])
```

Example of output:

```js
[
  {key: "name", value: "мечник"}, // the first value of second passed arg
  {key: "level", value: 2}, // the second value of second passed arg
  {key: "attack", value: 80}, // in alphabet order
  {key: "defence", value: 40}, // in alphabet order
  {key: "health", value: 10} // in alphabet order
]
```
