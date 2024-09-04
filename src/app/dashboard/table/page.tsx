import Breadcrumb from "@/Admin/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/Admin/components/Layouts/DefaultLayout";

import Card from "@/Admin/components/Tables/Card";
const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        <Card />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
