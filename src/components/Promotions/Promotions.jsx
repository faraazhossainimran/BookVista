import { BsFillCloudSunFill } from "react-icons/bs";
import { BsCupStraw } from "react-icons/bs";
import { GiTowel } from "react-icons/gi";
import { LiaUmbrellaSolid } from "react-icons/lia";

const Promotions = () => {
  return (
    <div className="bg-black md:h-[300px]">
      <div className="container mx-auto">
        <div className="grid grid-rows mx-4 md:grid-cols-4">
          <div>
            <div>
              <p className="text-5xl text-white pt-16 md:ml-20">
                <BsFillCloudSunFill></BsFillCloudSunFill>
              </p>
              <h3 className="text-3xl text-white pt-4">Private beach</h3>
              <p className="text-white mt-2">
                Here is the lorem ipsum passage followed by Boparai's
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-5xl text-white pt-16 md:ml-20">
                <BsCupStraw></BsCupStraw>
              </p>
              <h3 className="text-3xl text-white pt-4">Cabana service</h3>
              <p className="text-white mt-2">
              Here is the lorem ipsum passage followed by Boparai's
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-5xl text-white pt-16 md:ml-20">
                <GiTowel></GiTowel>
              </p>
              <h3 className="text-3xl text-white pt-4">Brand New Towels</h3>
              <p className="text-white mt-2">
              Here is the lorem ipsum passage followed by Boparai's
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-5xl text-white pt-16 md:ml-20">
                <LiaUmbrellaSolid></LiaUmbrellaSolid>
              </p>
              <h3 className="text-3xl text-white pt-4">Cabana service</h3>
              <p className="text-white mt-2 pb-8">
              Here is the lorem ipsum passage followed by Boparai's
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
