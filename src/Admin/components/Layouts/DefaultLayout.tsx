import Sidebar from '../SidebarAdminPanel/sidebar';
import Header from '../HeaderAdminPanel';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-800">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
