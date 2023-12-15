import { StaticImageData } from "next/image";
import actorAImg from "../../public/images/cast/Actor A.png";
import actorBImg from "../../public/images/cast/Actor B.png";
import actorCImg from "../../public/images/cast/Actor C.png";
import actorDImg from "../../public/images/cast/Actor D.png";
import actorEImg from "../../public/images/cast/Actor E.png";
import actorFImg from "../../public/images/cast/Actor F.png";
import actorGImg from "../../public/images/cast/Actor G.png";

export type Cast = {
  name: string;
  desc: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export const cast: Cast[] = [
  {
    name: "Actor A",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut enim. Tellus elementum sagittis vitae et leo. Proin libero nunc consequat interdum varius. Interdum varius sit amet mattis vulputate enim nulla. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Consequat nisl vel pretium lectus quam id. Donec ultrices tincidunt arcu non sodales. Cras sed felis eget velit aliquet sagittis id consectetur. ",
    image: {
      src: actorAImg,
      alt: "Picture of Actor A",
    },
  },
  {
    name: "Actor B",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut enim. Tellus elementum sagittis vitae et leo. Proin libero nunc consequat interdum varius. Interdum varius sit amet mattis vulputate enim nulla. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Consequat nisl vel pretium lectus quam id. Donec ultrices tincidunt arcu non sodales. Cras sed felis eget velit aliquet sagittis id consectetur. ",
    image: {
      src: actorBImg,
      alt: "Picture of Actor B",
    },
  },
  {
    name: "Actor C",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut enim. Tellus elementum sagittis vitae et leo. Proin libero nunc consequat interdum varius. Interdum varius sit amet mattis vulputate enim nulla. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Consequat nisl vel pretium lectus quam id. Donec ultrices tincidunt arcu non sodales. Cras sed felis eget velit aliquet sagittis id consectetur. ",
    image: {
      src: actorCImg,
      alt: "Picture of Actor C",
    },
  },
  {
    name: "Actor D",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut enim. Tellus elementum sagittis vitae et leo. Proin libero nunc consequat interdum varius. Interdum varius sit amet mattis vulputate enim nulla. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Consequat nisl vel pretium lectus quam id. Donec ultrices tincidunt arcu non sodales. Cras sed felis eget velit aliquet sagittis id consectetur. ",
    image: {
      src: actorDImg,
      alt: "Picture of Actor D",
    },
  },
  {
    name: "Actor E",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut enim. Tellus elementum sagittis vitae et leo. Proin libero nunc consequat interdum varius. Interdum varius sit amet mattis vulputate enim nulla. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Consequat nisl vel pretium lectus quam id. Donec ultrices tincidunt arcu non sodales. Cras sed felis eget velit aliquet sagittis id consectetur. ",
    image: {
      src: actorEImg,
      alt: "Picture of Actor E",
    },
  },
  {
    name: "Actor F",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut enim. Tellus elementum sagittis vitae et leo. Proin libero nunc consequat interdum varius. Interdum varius sit amet mattis vulputate enim nulla. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Consequat nisl vel pretium lectus quam id. Donec ultrices tincidunt arcu non sodales. Cras sed felis eget velit aliquet sagittis id consectetur. ",
    image: {
      src: actorFImg,
      alt: "Picture of Actor F",
    },
  },
  {
    name: "Actor G",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut enim. Tellus elementum sagittis vitae et leo. Proin libero nunc consequat interdum varius. Interdum varius sit amet mattis vulputate enim nulla. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Consequat nisl vel pretium lectus quam id. Donec ultrices tincidunt arcu non sodales. Cras sed felis eget velit aliquet sagittis id consectetur. ",
    image: {
      src: actorGImg,
      alt: "Picture of Actor G",
    },
  },
];
