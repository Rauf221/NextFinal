import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className=" font-semibold text-white ">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium text-white" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-white">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
