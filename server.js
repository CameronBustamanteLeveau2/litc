// server.js (VERSIÓN MEJORADA)
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());

// --- DATOS DE LOS PERSONAJES (ACTUALIZADOS Y CORREGIDOS) ---
const personajes = [

  {
    id: 2,
    name: "Skylar",
    info: "Skylar never had any ill intent when he would partake in such a hobby. When these photos were discovered by fellow classmate and class monitor, Baek Cirrus, he was filled with a sense of dread that he would tell Chan-il.",
    image_src: "assets/avatar1.png",
    avatar_src: "assets/avatar1.png"
  },
  {
    id: 3,
    name: "Cirrus",
    info: "Cirrus maintains a front of being fun, outgoing, kind, and friendly to his friends and at school. Beneath that, however, he is observant, possessive, manipulative, and impulsive — a complex person who hides his true self.",
    image_src: "assets/avatar2.png",
    avatar_src: "assets/avatar2.png"
  },
  {
    id: 4,
    name: "Yang Ri-In",
    info: "She is a friend of Cirrus and the sister of Da-In. It’s been hinted in season 1 that her contact name in Cirrus’ phone is 'Gorilla'. Cirrus trusted her and told her about Skylar and him taking photos of Chanil.",
    image_src: "assets/avatar3.png",
    avatar_src: "assets/avatar3.png"
  },
  {
    id: 5,
    name: "Chan-il",
    info: "A member of the photography club like Yeon Skylar. He learned from his friend Baek Cirrus that Skylar had been secretly taking photos of him.",
    image_src: "assets/avatar4.png",
    avatar_src: "assets/avatar4.png"
  },
    {
    id: 1,
    name: "Candy",
    info: "Candy is Cirrus' beloved dog — his loyal friend and source of comfort since childhood. Always by Cirrus' side, Candy brings him calm and joy through difficult moments.",
    image_src: "assets/dog-image.png",
    avatar_src: "assets/perre.png"
  },
  {
    id: 6,
    name: "Jiwoon",
    info: "One of Skylar's close friends. He enjoys spending time with Skylar and Cirrus.",
    image_src: "assets/avatar6.png",
    avatar_src: "assets/avatar6.png"
  },
  {
    id: 7,
    name: "Minwoo",
    info: "Minwoo saw Skylar as a brother and was unaware that Skylar was developing feelings for him. As a result, he didn't realize that his actions could be sending mixed signals.",
    image_src: "assets/avatar7.png",
    avatar_src: "assets/avatar7.png"
  },
  {
    id: 8,
    name: "Jisu",
    info: "Jisu is the fifth and current stepmother of Cirrus. Cirrus is trying to drive her out of the house, leading to a manipulative contest between them to assert dominance.",
    image_src: "assets/avatar8.png",
    avatar_src: "assets/avatar8.png"
  }
];

// --- RUTA DE LA API ---
app.get('/api/personajes', (req, res) => {
  res.json(personajes);
});

// --- INICIO DEL SERVIDOR ---
app.listen(port, () => {
  console.log(`🚀 API de Personajes corriendo en http://localhost:${port}`);
});
