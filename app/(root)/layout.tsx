import MobileNab from "@/components/MobileNab";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const loggedIn = {firstName:"Guy", lastName:"Mahota"}
  return (
     <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedIn}/>

        <div className="flex size-ful flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
              <div> 
                <MobileNab user={loggedIn}/> 
              </div>
          </div>
           {children}
        </div>
       
    </main>
    
  );
}
