//заходим в дефтузах в Приложения и видим четіре вида Хранилищ:
//1) Local Storege( Локальне сховище)- представдяє собою табличку : key, value ( пара ключ і значення)
//Local Storege зберігає дані в рамках нашого сайту майже назавжди
//коли ми його відкриваєм він нам дубблює сайт на якому ми знаходимся
// зберігаємо ті данні які е між рамками нашоі сесіі та ті які не є секьюрними
///Можемо зберігати всо окрім функцій
//в значення записуються тільки рядки

// Звертаємся до Local Storege та декількох його методів:
//1 додати значення setItem() приймає два параметра - назва ключа( перша колонка),
//  другий  - значення, те що ми хочемо зберігти між рамками сесіі
// localStorage.setItem("TEST_KEY", "Hello world");
// localStorage.setItem("TEST_KEY", JSON.stringify([1, 2, 3, 4])); //JSON.stringify-обовязково до масивів і обєктів
// console.log(JSON.parse(localStorage.getItem("TEST_KEY")));
// localStorage.setItem("TEST_KEY_1", JSON.stringify({ name: "Olga" }));
// console.log(JSON.parse(localStorage.getItem("TEST_KEY_1")));

// //2 отримати значення getItem()
// localStorage.getItem();
// // видалити  значення removeItem()
// localStorage.removeItem("TEST_KEY_1");
// // повністю очистити clear()
// localStorage.clear();

//2) Sassion Storage - відміна в тому , що данні зберігаються тільки під час сесіі( коли
// вкладку закриваєте данні зникають) Використовують для секюрних речей

const local = document.querySelector(".js-local");
const session = document.querySelector(".js-sassion");

local.addEventListener("click", () => {
  localStorage.setItem("local", "local save");
});
session.addEventListener("click", () => {
  sessionStorage.setItem("session", "session save");
});
