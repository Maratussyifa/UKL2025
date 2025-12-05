import "./globals.css";
import Sidebar from "@/components/client/Sidebar";

export const metadata = {
  title: "Mar'atussyifa Ussakinah",
  description: "UKL template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#eef1f4] min-h-screen">

        {/* Fixed Sidebar */}
        <div className="fixed left-0 top-0 h-full w-56">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="ml-56 p-10 min-h-screen">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>

      </body>
    </html>
  );
}