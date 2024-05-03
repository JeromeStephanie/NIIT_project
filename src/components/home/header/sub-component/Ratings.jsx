export default function Ratings() {
  return (
    <div className="flex justify-center w-full absolute top-[90%] tracking-wide">
      <div className="flex items-center justify-center gap-14">
        <div className="customShadow bg-white flex items-center justify-center flex-col w-60 py-4 rounded-xl">
          <h1 className="text-3xl font-medium">10M+</h1>
          <p className="text-sm text-gray-400">Total Customers</p>
        </div>

        <div className="customShadow bg-white flex items-center justify-center flex-col w-60 py-4 rounded-xl">
          <h1 className="text-3xl font-medium">01+</h1>
          <p className="text-sm text-gray-400">Years Of Experience</p>
        </div>

        <div className="customShadow bg-white flex items-center justify-center flex-col w-60 py-4 rounded-xl">
          <h1 className="text-3xl font-medium">12k</h1>
          <p className="text-sm text-gray-400">Total Destination</p>
        </div>

        <div className="customShadow bg-white flex items-center justify-center flex-col w-60 py-4 rounded-xl">
          <h1 className="text-3xl font-medium">4.8</h1>
          <p className="text-sm text-gray-400">Ratings</p>
        </div>
      </div>
    </div>
  );
}
