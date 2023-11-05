import { useParallax } from "react-scroll-parallax";

const ImageRorate = () => {
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      rotate: [0, 360],
    };
  return (
    <div>
      <div ref={parallax.ref} className="spinner">
        😵‍💫
        <div className="diamond">💎</div>
        <div className="clown">🤡</div>
        <div className="money">💰</div>
        <div className="hand">👌🏻</div>
      </div>
    </div>
  );
};

export default ImageRorate;
