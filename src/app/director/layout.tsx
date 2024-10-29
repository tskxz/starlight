import Navigation from "@/components/global/navigation/side";
import { links } from "@/data/director/navigation";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full">
      <Navigation links={links} />
      {children}
    </div>
  );
};

export default Layout;
