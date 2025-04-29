async function ReviewByIdPage({ params }) {
  const { productId, reviewId } = await params;

  return (
    <div>
      Review of product id: {productId} with review id: {reviewId}
    </div>
  );
}

export default ReviewByIdPage;
