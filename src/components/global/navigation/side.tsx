import Link from "next/link";

const SideNav = () => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-[10%] flex-col items-center bg-starlight-blue text-white">
      {/* logo image */}
      <div className="mb-2 w-full bg-yellow-200 px-4 py-2 text-center text-black">
        Admin
      </div>
      <nav className="flex flex-col gap-4">
        <Link href="/user/applications">Applications</Link>
      </nav>
    </div>
  );
};

export default SideNav;
