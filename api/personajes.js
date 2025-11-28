export default function handler(req, res) {
  const personajes = [
    {
      id: 2,
      name: "Skylar",
      info: "Skylar never had any ill intent when he would partake in such a hobby...",
      image_src: "/assets/avatar1.png",
      avatar_src: "/assets/avatar1.png"
    },
    {
      id: 3,
      name: "Cirrus",
      info: "Cirrus maintains a front of being fun, outgoing...",
      image_src: "/assets/avatar2.png",
      avatar_src: "/assets/avatar2.png"
    },
    {
      id: 4,
      name: "Yang Ri-In",
      info: "She is a friend of Cirrus...",
      image_src: "/assets/avatar3.png",
      avatar_src: "/assets/avatar3.png"
    },
    {
      id: 5,
      name: "Chan-il",
      info: "A member of the photography club...",
      image_src: "/assets/avatar4.png",
      avatar_src: "/assets/avatar4.png"
    },
    {
      id: 1,
      name: "Candy",
      info: "Candy is Cirrus' beloved dog...",
      image_src: "/assets/dog-image.png",
      avatar_src: "/assets/perre.png"
    },
    {
      id: 6,
      name: "Jiwoon",
      info: "One of Skylar's close friends...",
      image_src: "/assets/avatar6.png",
      avatar_src: "/assets/avatar6.png"
    },
    {
      id: 7,
      name: "Minwoo",
      info: "Minwoo saw Skylar as a brother...",
      image_src: "/assets/avatar7.png",
      avatar_src: "/assets/avatar7.png"
    },
    {
      id: 8,
      name: "Jisu",
      info: "Jisu is the fifth and current stepmother of Cirrus...",
      image_src: "/assets/avatar8.png",
      avatar_src: "/assets/avatar8.png"
    }
  ];

  res.status(200).json(personajes);
}
