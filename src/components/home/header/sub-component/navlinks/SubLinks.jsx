import { Link } from "react-router-dom";

export default function SubLinks() {
  return (
    <Link to={"/login"} className="px-5 py-3 rounded-[2rem] text-black bg-white text-sm tracking-wide">Login</Link>
  )
}
