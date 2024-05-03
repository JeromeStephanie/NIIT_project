import Navlinks from "./sub-component/Navlinks";
import IntroText from "./sub-component/IntroText";
import SearchSort from "./sub-component/SearchSort";
import Ratings from "./sub-component/Ratings";

export default function Header() {
  return (
    <header className="w-full h-[85dvh] bg-red-400 hero_img overflow-hidden py-8 px-12 relative">
      <Navlinks />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <IntroText />
        <SearchSort />
      </div>
      <Ratings />
    </header>
  );
}
