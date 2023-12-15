import React from "react";
import Details from "../components/Details";

const text: React.ReactNode = (
  <p className="text-md">
    Angkara centers on the life of Ken Arok, a young thug determined to be more
    than just a feather in the air. Under the tutelage of an ascetic named
    Lohgawe, Arok pursues his dream to become the reformer of his society and
    his love of a lifetime, Ken Dedes, the beautiful wife of his superior, local
    chieftain Tunggul Ametung. His thirst for power involves those around him,
    including an esteemed keris bladesmith, Mpu Gandring, his best friend and
    fellow guard, Kebo Ijo, and Kebo Ijo's wife, Sasmi.
    <br />
    <br />
    Unfortunately, as Arok rises to become a great leader for his people, he
    sows the seeds of hatred and vengeance among those closest to him,
    particularly his crown prince Anusapati, who is always in the company of a
    palace maid, Mahisa Dewi, and a former advisor, Ki Pengalasan.
    <br />
    <br />
    The musical chronicles Arok's triumphs and regrets in his journey to
    ultimately discover what is truly important in his life.
  </p>
);

export default function page() {
  return <Details name="angkara" text={text} />;
}
