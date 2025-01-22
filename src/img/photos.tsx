import Image from "next/image";
import cambodia from "./photos/cambodia.jpeg";
import engagement from "./photos/engagement.jpeg";
import cycle from "./photos/mountain_cycling.jpeg";
import family from "./photos/mountain_family.jpeg";
import running from "./photos/winter_running.jpeg";

const photos_img = {
  cycle: (
    <Image
      src={cycle}
      height={1000}
      width={3000}
      alt="cycling on a mountain highway"
    />
  ),
  cambodia: <Image src={cambodia} width={7000} alt="temples" />,
  engagement: (
    <Image
      src={engagement}
      width={3000}
      alt="engagement photo on mountaintop"
    />
  ),
  family: (
    <Image
      src={family}
      width={3000}
      alt="family photo in snowy mountain valley"
    />
  ),
  running: <Image src={running} width={3000} alt="snow beard" />,
};

export default photos_img;
