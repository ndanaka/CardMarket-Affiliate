import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Pagination = ({ pages, results, setCount, count }) => {
  const { t } = useTranslation();
  const [page, setPage] = useState([]);

  useEffect(() => {
    const toArray = Array.from({ length: pages }, (_, index) => index + 1);
    setPage(toArray);
  }, [pages]);

  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 pt-5">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            className=" inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => count >= 2 && setCount((t) => t - 1)}
          >
            {t("Previous")}
          </button>
          <button
            className=" ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => count <= pages - 1 && setCount((t) => t + 1)}
          >
            {t("Next")}
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">{pages}</span> of{" "}
              <span className="font-medium">{results}</span> results
            </p>
          </div>
          <div>
            <nav
              aria-label="Pagination"
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            >
              <button className=" inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <img
                  src="/image/icon/first.png"
                  className="w-5 mr-2"
                  onClick={() => setCount(1)}
                />
                <img
                  onClick={() => count >= 2 && setCount((t) => t - 1)}
                  src="/image/icon/previous.png"
                  className="w-5 "
                />
              </button>
              {page?.map((item, index) =>
                item >= pages - 2 ||
                (item >= count && item <= count + 3) ||
                (count > pages - 8 && item > pages - 8) ? (
                  <button
                    key={index}
                    className={` ${
                      item === count && "bg-indigo-600 text-white"
                    } py-2 w-10 text-center text-sm font-semibold ring-1 ring-inset ring-gray-300 `}
                    onClick={() => {
                      setCount(item);
                    }}
                  >
                    {item}
                  </button>
                ) : (
                  item === pages - 3 && (
                    <div
                      key={index}
                      className="items-center w-10 text-center py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                    >
                      ...
                    </div>
                  )
                )
              )}
              <button className=" inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 ">
                <img
                  src="/image/icon/previous.png"
                  className="w-5 mr-2 rotate-180"
                  onClick={() => count <= pages - 1 && setCount((t) => t + 1)}
                />
                <img
                  src="/image/icon/first.png"
                  className="w-5 rotate-180"
                  onClick={() => setCount(pages)}
                />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
