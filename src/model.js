import image from "./assets/image.jpeg";
import { TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from "./classes/blocks.js";

export const model = [
  new TitleBlock("Конструктор JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #20002c, #cbb4d4)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
      "border-radius": "30px",
    },
    alt: "Cat",
  }),
  new ColumnsBlock(["Исааку Ньютону приписывают изобретение кошачьей двери", "Кошки могут изменить свое «мяу», чтобы манипулировать человеком. Они имитируют голос ребёнка, когда нуждаются в пище, например", "Сейчас в мире живет свыше 500 миллионов домашних кошек. Самая «кошачья» страна — это Австралия: на 10 человек приходится 9 кошек."], {
    styles: {
      background: "linear-gradient(to right, #20002c, #cbb4d4)",
      padding: "2rem",
      color: "#fff",
      "font-weight": "bold",
    },
  }),
  new TextBlock("Кошка не может вскарабкаться на дерево вниз головой из-за устройства когтей. Для того, чтобы спуститься с дерева, ей нужно отступать, пятясь задом.", {
    styles: {
      background: "linear-gradient(to right, #20002c, #cbb4d4)",
      padding: "1rem",
      "font-weight": "bold",
      color:'lightgray'
    },
  }),
];
