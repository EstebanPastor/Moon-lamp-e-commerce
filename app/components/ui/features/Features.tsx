import Image from "next/image";
import transparentMoonlap from "@/public/transparentmoonlamp.png";
import {
  BsBatteryCharging,
  BsFillBrightnessHighFill,
  BsFillChatHeartFill,
} from "react-icons/bs";

const Features = () => {
  return (
    <>
      <section className="py-25">
        <div className="w-[89%] m-auto max-w-[1400px] grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-5">
          <div>
            <ul className="space-y-10">
              <li>
                <div className="flex gap-2 items-center text-xl font-bold text-dark">
                  <h3>Battery life</h3>
                  <div>
                    <BsBatteryCharging />
                  </div>
                </div>
                <p>Duration of 12 hours with a single charge.</p>
              </li>
              <li>
                <div className="flex gap-2 items-center text-xl font-bold text-dark">
                  <h3>A lot of brightness</h3>
                  <div>
                    <BsFillBrightnessHighFill />
                  </div>
                </div>
                <p>Eco friendly and made with 100% recyclable materials.</p>
              </li>
              <li>
                <div className="flex gap-2 items-center text-xl font-bold text-dark">
                  <h3>Eco friendly</h3>
                  <div>
                    <BsFillChatHeartFill />
                  </div>
                </div>
                <p>Really powerful light, with 16 different colors.</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={transparentMoonlap}
              height={500}
              width={500}
              alt="transparent-moonlamp"
            />
            <p>¡A lot of products to choose from!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
