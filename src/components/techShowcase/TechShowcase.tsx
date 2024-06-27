import { svgArray } from "../../utils/techSvgs";
import SlidingCarousel from "../carousel/SlidingCarousel";


const TechShowcase: React.FC = () => {
  return (
    <>
      <div className="w-3/4 flex justify-center">
        <SlidingCarousel items={svgArray} />
      </div>
    </>
  );
};
export default TechShowcase;
