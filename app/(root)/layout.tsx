import Bottombar from "@/components/shared/Bottombar";
import Topbar from "@/components/shared/Topbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      <main className="w-full min-h-screen flex justify-center bg-[#101010]">
        <div className="w-[1240px] flex flex-col mt-20 max-md:py-10 max-md:px-10 pt-20 px-80">
          {children}</div>
      </main>
      <Bottombar />
    </>
  );
};

export default Layout;
