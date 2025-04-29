async function AllNewsPage({ params }) {
  const slug = (await params).slug;

  return (
    <div>
      <h1 className="text-5xl">News page</h1>
      <h2 className="text-3xl">{slug[0]}</h2>
      <h2 className="text-2xl">{slug[1]}</h2>
      <p>{slug[2]}</p>
    </div>
  );
}

export default AllNewsPage;
