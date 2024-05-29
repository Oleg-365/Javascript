{
  /* <div id="block">
  <p>1</p>
  <p>2</p>
</div> */
}
// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>

const blockEl = document.querySelector("#block");
console.log(blockEl);

const paragraphEl = document.querySelector(".www");
console.log(paragraphEl);

const paragraphElAll = document.querySelectorAll(".www")[0];
console.log(paragraphElAll);

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/
// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

const linkEl = document.querySelector(".link");
linkEl.textContent = "link text js";
linkEl.href = "https://developer.mozilla.org/ru/";
console.log(linkEl);

// const imgEl = document.querySelector('.photo');
// imgEl.src = 'https://img.freepik.com/free-photo/cute-kitten-staring-out-window-playful-curiosity-generative-ai_188544-12520.jpg?t=st=1716917467~exp=1716921067~hmac=58d146af6784b4f94a38e3661111d089d96c3e0331a528ed1102ec87f4f01c6e&w=1380'

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

const divEl = document.querySelector(".content");
const parEl = document.createElement("p");
parEl.textContent = "Новый текстовый элемент";
divEl.appendChild(parEl);
parEl.remove();

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

const newButtonEl = document.createElement("button");
newButtonEl.textContent = "Волшебная кнопка";
divEl.appendChild(newButtonEl);
let count = 0;
newButtonEl.onclick = function () {
  count++;
  console.log(`Нажато ${count} раз`);
};

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const newButtonEl2 = document.createElement("button");
newButtonEl2.textContent = "Отправить";
divEl.appendChild(newButtonEl2);

newButtonEl2.onclick = function () {
  newButtonEl2.textContent = "Текст отправлен";
  newButtonEl2.style.width = "230px";
};
console.dir(newButtonEl2);
