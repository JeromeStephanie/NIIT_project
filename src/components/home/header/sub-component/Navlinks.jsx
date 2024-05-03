import Logo from "../../../../helper/logo";
import Links from "./navlinks/Links";
import SubLinks from "./navlinks/SubLinks";

export default function Navlinks() {
  return (
    <div className="flex items-center justify-between">
        <Logo/>
        <Links/>
        <SubLinks/>
    </div>
  )
}
