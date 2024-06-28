import { latestTechnologies } from "../../utils/techSvgs";
import SlidingCarousel from "../carousel/SlidingCarousel";


const TechShowcase: React.FC = () => {

  return (
    <>
      <div className="sm:w-3/4 w-full flex justify-center">
        <SlidingCarousel items={latestTechnologies} />
      </div>
    </>
  );
};
export default TechShowcase;
