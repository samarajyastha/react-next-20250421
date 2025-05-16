import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function ProductsDrawer({ showFilters = true, setShowFilters }) {
  const [sort, setSort] = useState(
    JSON.stringify({
      createdAt: -1,
    })
  );
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [minPrice, setMinPrice] = useState(0);

  const router = useRouter();

  function setFilters() {
    const params = new URLSearchParams();
    params.set("min", minPrice);
    params.set("max", maxPrice);
    params.set("sort", sort);

    router.push(`?${params.toString()}`);

    setShowFilters(false);
  }

  return (
    <div className={showFilters ? "block" : "hidden"}>
      <div
        onClick={() => setShowFilters(false)}
        className={`h-svh w-full bg-[#00000044] fixed top-0 left-0 right-0 bottom-0 z-30`}
      ></div>
      <div
        className={`fixed top-14 left-0 z-40 w-64 h-screen px-4 py-8 overflow-y-auto transition-transform bg-white dark:bg-gray-800  ${
          showFilters ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            Filter products
          </h4>
          <button
            onClick={() => setShowFilters(false)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <IoMdClose className="w-5 h-5 " />
          </button>
        </div>
        <div className="py-4 overflow-y-auto">
          <div className="pb-3">
            <label
              htmlFor="orderBy"
              className="font-semibold text-gray-500 dark:text-gray-400 text-sm uppercase inline-block pb-2"
            >
              Order by
            </label>
            <select
              id="orderBy"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setSort(e.target.value)}
            >
              <option
                value={JSON.stringify({
                  createdAt: -1,
                })}
              >
                Latest
              </option>
              <option
                value={JSON.stringify({
                  createdAt: 1,
                })}
              >
                Oldest
              </option>
              <option
                value={JSON.stringify({
                  price: -1,
                })}
              >
                Price: High to Low
              </option>
              <option
                value={JSON.stringify({
                  price: 1,
                })}
              >
                Price: Low to High
              </option>
              <option
                value={JSON.stringify({
                  name: 1,
                })}
              >
                Name: A-Z
              </option>
              <option
                value={JSON.stringify({
                  name: -1,
                })}
              >
                Name: Z-A
              </option>
            </select>
          </div>
          <div className="pb-3">
            <h5 className="font-semibold text-gray-500 dark:text-gray-400 text-sm uppercase mb-2">
              Price range
            </h5>
            <label
              htmlFor="min"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Minimum price:
            </label>
            <input
              type="number"
              name="min"
              id="min"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
              min={0}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <div className="h-2"></div>
            <label
              htmlFor="max"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Maximum price:
            </label>
            <input
              type="number"
              name="max"
              id="max"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="100000000"
              min={0}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          <button
            onClick={setFilters}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:opacity-80 disabled:opacity-80"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsDrawer;
