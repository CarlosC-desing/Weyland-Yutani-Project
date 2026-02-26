import Yautja from "../assets/images/Yautja.png";

export const Hola = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <img
        src={Yautja}
        alt="Yautja"
        className="w-full max-w-2xl rounded-lg shadow-2xl border border-green-900/50"
      />
    </div>
  );
};
