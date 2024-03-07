import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
const Heading = ({ className, title }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 `}>
      {title && <h2 className="h2">{title}</h2>}
      <div className="flex flex-wrap gap-10 mb-10">
        {benefits.map((item) => (
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] 
            md:max-w-[24rem]"
            style={{ backgroundImage: `url(${item.backgroundUrl})` }}
            key={item.id}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">{item.title}</h5>
              <p className="body-2 mb-6 text-n-3">{item.text}</p>
              <div className="flex items-center mt-auto">
                <img
                  src={item.iconUrl}
                  alt={item.title}
                  width={48}
                  height={48}
                />
                <p
                  className="ml-auto font-code text-xs font-bold
                 text-n-1 tracking-wider uppercase"
                >
                  Explore more
                </p>
                <Arrow />
              </div>
            </div>
            {item.light && <GradientLight />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heading;
