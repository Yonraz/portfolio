interface Img {
  url: string;
  name: string;
}
interface TechSummaryProps {
  imgArr: Img[];
}
const TechSummary: React.FC<TechSummaryProps> = ({ imgArr }) => {
  return (
    <div className="md:flex items-center w-full grid xs:grid-cols-3 sm:grid-cols-7 ">
      {imgArr.map((u) => (
        <figure key={u.url} className="w-10 md:mx-4 mx-2">
          <img src={u.url} alt={u.name} draggable={false} />
        </figure>
      ))}
    </div>
  );
};

export default TechSummary;
