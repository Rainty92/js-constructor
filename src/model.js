import image from "./assets/cat_javascript.png";
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from "./classes/blocks";

export const model = [
  new TitleBlock("Конструктор сайтов на чистом JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
      "user-select": "none",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "grid",
      "justify-content": "center",
    },
    alt: "Это картинка",
    imageStyles: {
      width: "500px",
      height: "auto",
    },
  }),
  new ColumnsBlock(
    [
      "JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript",
      "JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам",
      "Основные архитектурные черты: динамическая типизация, слабая типизация, автоматическое управление памятью, прототипное программирование, функции как объекты первого класса.",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new TextBlock("TEST TEXT", {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];