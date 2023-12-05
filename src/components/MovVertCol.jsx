import { useRef } from "react";
import MovVertCard from "./MovVertCard";

const MovCol = ({genre}) => {


  const scrollRef = useRef(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 1000;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 1000;
    }
  };

  return (
    <div className="MovColVert">
      <h2>{genre.genre || genre.Tv}</h2>
      <div className="MovColData">
        <button className="LeftBtn" onClick={scrollLeft}>
          &lt;
        </button>
        <div
          ref={scrollRef}
          className="InMovList"
          style={{
            overflow: "auto",
            whiteSpace: "nowrap",
          }}
        >
          <MovVertCard genre={genre.data}/>
        </div>
        <button className="RightBtn" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MovCol;
