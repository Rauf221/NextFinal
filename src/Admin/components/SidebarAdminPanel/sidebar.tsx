
import { FiHome, FiUsers, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-64 min-h-[699px] bg-white dark:bg-gray-900 dark:text-white flex flex-col justify-between">
      <div>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold">Admin Panel</h1>
        </div>
        <nav className="mt-8">
          <ul>
            <li className="my-2">
              <a href="/" >
                <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded dark:text-gray-200 dark:hover:bg-gray-700 transition-all">
                  <FiHome className="mr-2" />
                  Dashboard
                </a>
              </a>
            </li>
            <li className="my-2">
              <a href="/users" >
                <a className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200 rounded dark:text-gray-400 dark:hover:bg-gray-700 transition-all">
                  <FiUsers className="mr-2" />
                  Users
                </a>
              </a>
            </li>
            <li className="my-2">
              <a href="/settings" >
                <a className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200 rounded dark:text-gray-400 dark:hover:bg-gray-700 transition-all">
                  <FiSettings className="mr-2" />
                  Settings
                </a>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
