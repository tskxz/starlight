// import Link from "next/link";
import SideNav from "../navigation/side";

const Navigation = () => {
  return (
    <div className="flex bg-starlight-blue">
      <SideNav />
      {/* <Link href="/user/applications">Applications</Link>
        <Link href="/user/profile">Profile</Link> */}
    </div>
  );
};

export default Navigation;
