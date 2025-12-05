import Sidebar from '../client/Sidebar';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Sidebar />

      <div className="page-content pl-[220px] pr-6 py-6 transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

export default MainTemplate;
