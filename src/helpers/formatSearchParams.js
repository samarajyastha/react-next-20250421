function getFormattedParams(searchParams) {
  let query = "";

  const { sort, min, max } = searchParams;

  if (sort) query = `${query == "" ? "" : query + "&"}sort=${sort}`;

  if (min) query = `${query == "" ? "" : query + "&"}min=${min}`;

  if (max) query = `${query == "" ? "" : query + "&"}max=${max}`;

  return query;
}

export default getFormattedParams;
