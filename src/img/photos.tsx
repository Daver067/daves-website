import Image from "next/image";
import python from "./languages/python.svg";
import cambodia from "./photos/cambodia.jpeg";
import engagement from "./photos/engagement.jpeg";
import cycle from "./photos/mountain_cycling.jpeg";
import family from "./photos/mountain_family.jpeg";
import running from "./photos/winter_running.jpeg";

const photos_img = {
  cambodia: <Image src={cambodia} width={7000} alt="temples" />,
  engagement: (
    <Image
      src={engagement}
      width={7000}
      alt="engagement photo on mountaintop"
    />
  ),
  cycle: <Image src={cycle} width={7000} alt="cycling on a mountain highway" />,
  family: (
    <Image
      src={family}
      width={7000}
      alt="family photo in snowy mountain valley"
    />
  ),
  running: <Image src={running} width={7000} alt="snow beard" />,
};

export default photos_img;
