function Loader() {
  return (
    <div className="w-full h-max rounded-2xl dark:shadow dark:shadow-amber-50 px-5 py-4 animate-pulse duration-150 ease-in-out">
      <div className="w-full h-36 dark:bg-gray-300"></div>
      <div className="py-3">
        <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-10 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300"></span>
        <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-10 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300"></span>
        <h2 className="h-6 w-2/3 bg-gray-300 my-2"></h2>

        <p className="my-4 bg-gray-200 w-1/3 h-4"></p>
        <button className="rounded shadow dark:shadow-white h-8 w-1/2 dark:bg-zinc-900"></button>
      </div>
    </div>
  );
}

function ProductsLoader() {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-8">
      <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader />
    </div>
  );
}

export default ProductsLoader;
