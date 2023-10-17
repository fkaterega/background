import img from "../images/lion.jpg";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center min-h-screen bg-black shadow-lg mt-32">
      <div>
        <h3 className="text-white text-3xl">History and Monarchies</h3>
        <div className="flex justify-center items-center mt-24">
          <img
            className="max-w-full w-60 object-cover object-center shadow-sm rounded-sm"
            src={img}
            alt="lion"
          />
        </div>
        <h3 className="text-white text-2xl text-center mt-6">
          Buganda Kingdom
        </h3>
        <p className="text-white text-center text-md mt-32">
          &copy;2023 Fred Katerega
        </p>
      </div>
    </footer>
  );
}
