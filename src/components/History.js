import img from "../images/katale.jpg";
import image from "../images/sigiri.jpg";
import pic from "../images/matooke.jpg";

export default function History() {
  return (
    <section className="flex flex-col justify-center items-center bg-black shadow-md min-h-screen">
      <div className=" px-4 mt-0 py-0">
        <div className="mt-0 py-0">
          <h2 className="antialiased text-white text-center text-4xl font-semibold ">
            History
          </h2>
          <p className="antialiased text-white text-sm leading-loose mt-6 ">
            Uganda, located in East Africa, has a rich history of monarchies
            ruling the country before the arrival of British explorers and
            missionaries in the late 1800s. Among these monarchies, the Buganda
            Kingdom stood out due to its strategic location along Lake Victoria,
            which was the source of the Nile river and the gold rush of the time
            during the colonial era.
          </p>
        </div>
        <div>
          <h2 className="antialiased text-white text-center text-4xl font-semibold mt-6">
            Life
          </h2>
          <div className="flex gap-2 mt-10">
            <div>
              <img
                className="max-w-full object-cover object-center shadow-sm"
                src={img}
                alt="lady selling in the market"
              />
            </div>
            <div>
              <img
                className="max-w-full object-cover object-center shadow-sm"
                src={image}
                alt="stove"
              />
            </div>
            <div>
              <img
                className="max-w-full object-cover object-center shadow-sm"
                src={pic}
                alt="platains"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
