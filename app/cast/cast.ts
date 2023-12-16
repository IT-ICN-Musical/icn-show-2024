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
    name: "Galih",
    desc: "Galih, fueled by a fervent desire for fame, sets out on a journey to Jakarta, leaving behind the familiarity of home. Alongside his sister Laras' pursuit of acting dreams, their divergent paths unfold against the backdrop of Indonesia's burgeoning music scene in the 1970s. As Galih faces harsh realities and shattered illusions in pursuit of stardom, will he discover that true fulfillment lies not in fame but in embracing the present moment? His journey raises a poignant question: Can one reconcile ambition with the simple joy of living?",
    image: {
      src: actorAImg,
      alt: "Picture of Galih",
    },
  },
  {
    name: "Laras",
    desc: "Laras embodies ambition and modernity, breaking societal norms to chase her dreams. Determined and fiercely independent, she pursued stardom in Jakarta, leaving behind familial ties. Yet, as her aspirations clashed with harsh realities, unraveling her facade of success, will Laras find a way back to the family she once left behind?",
    image: {
      src: actorBImg,
      alt: "Picture of Laras",
    },
  },
  {
    name: "Ayah",
    desc: "Ayah embodies tradition, upholding values while grappling with steering his children's aspirations amidst established norms. However, his opinion and authority are often overshadowed by Bunda, a traditional matriarch, who demanded strict adherence to cultural expectations. However, when Laras pursued her dreams, she softened, fostering tolerance. As they navigate heritage and personal ambitions, both Ayah and Ibu seek harmony, bridging differing aspirations and traditions to mend familial bonds.",
    image: {
      src: actorCImg,
      alt: "Picture of Ayah",
    },
  },
  {
    name: "Bunda",
    desc: "Ayah embodies tradition, upholding values while grappling with steering his children's aspirations amidst established norms. However, his opinion and authority are often overshadowed by Bunda, a traditional matriarch, who demanded strict adherence to cultural expectations. However, when Laras pursued her dreams, she softened, fostering tolerance. As they navigate heritage and personal ambitions, both Ayah and Ibu seek harmony, bridging differing aspirations and traditions to mend familial bonds.",
    image: {
      src: actorDImg,
      alt: "Picture of Bunda",
    },
  },
  {
    name: "Jamilah",
    desc: "The most mature among the trio. Jamilah  acts as the “leader” in the group (accommodating Jali who is slow witted, taming down Juki who gets emotional easily).",
    image: {
      src: actorGImg,
      alt: "Picture of Jamilah",
    },
  },
  {
    name: "Juki",
    desc: "The funniest in the group, but sometimes can be short-tempered. He always tried to see a funny side in everything. Always tried to cheer up the mood whenever he saw someone get sad. Sometimes get fed-up with Jali  because he can be too dumb sometimes",
    image: {
      src: actorEImg,
      alt: "Picture of Juki",
    },
  },
  {
    name: "Jali",
    desc: "Innocent boy. But he is rather slow-witted. Because of this, the other two sometimes make fun of him, but he would not take it into his heart and would just laugh it all away.",
    image: {
      src: actorFImg,
      alt: "Picture of Jali",
    },
  },
];
