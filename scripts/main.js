var myImage = document.querySelector("img");                      /*  переменная соотносится с объектом img  */

myImage.onclick = function () {                                   /* определяется фунуция выполняемая при нажатии кнопкой мыши на объект img */
  var mySrc = myImage.getAttribute("src");                        /* переменная получает значение аттрибута src объекта img */
  if (mySrc === "images/firefox-icon.jpg") {                      /* изменить значение аттрибута src объекта img на другое, в нашем случае смена картинки*/
    myImage.setAttribute("src", "images/fire.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.jpg");
  }
};

var myButton = document.querySelector("button");                  /* переменная соотносится с объектом button   */
var myHeading = document.querySelector("h1");                     /* переменная соотносится с объектом h1 */

function setUserName() {                                          /* определяется фунуция выполняемая при нажатии кнопкой мыши на объект button, в нашем случае ввод имени в заголовок */
  var myName = prompt("Please enter your name.");                 /* вызов функции для ввода имени   */
  localStorage.setItem("name", myName);                           /* запись имени в память*/
  myHeading.textContent = "Mozilla is cool, " + myName;           /* изменение содержания объекта h1, в нашем случае заголовка */
}

if (!localStorage.getItem("name")) {                              /* если имя для заголовка не сохранено вызвать функцию ввода имени в заголовок, иначе использовать сохраненное имя для заголовка   */
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {                                 /* определяется какая функция выполняется при нажатии button*/
  setUserName();
};
