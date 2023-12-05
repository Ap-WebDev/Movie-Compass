import { useRef } from "react";
import MovCard from "./MovCard";

const MovCol = ({movie , index}) => {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 800;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 800;
    }
  };

  return (
    <>
 
        <div className="MovColHor" key={index}>
          <h2>{movie.category}</h2>
          <div className="MovColData">
            <button className="LeftBtn" onClick={scrollLeft}>
              &lt;
            </button>
            <div
              ref={scrollRef}
              className="InMovList"
              style={{overflowX: "scroll",overflowY: "hidden", whiteSpace: "nowrap",}}
            >
              <MovCard movie={movie.data}/>
            </div>
            <button className="RightBtn" onClick={scrollRight}>
              &gt;
            </button>
          </div>
        </div>
    </>
  );
};

export default MovCol;
