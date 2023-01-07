const AddReview = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <form className="add-review-form text-semibold w-full border-none focus:border-none" onSubmit={submitHandler}>
      {/* <div className="user-offline"></div> */}
      <div className="add-review-container inline-block w-full mt-8">
        <label htmlFor="name"></label>
        <input
          className="py-4 px-4 w-full rounded-md border-primary border-[1px]"
          id="name"
          type="text"
          name="name"
          placeholder="Anto"
          required
        />
      </div>
      <div className="add-review-container">
        <label htmlFor="review"></label>
        <textarea
          className="mt-4 py-4 h-40 px-4 w-full rounded-md border-primary border-[1px]"
          id="review"
          name="review"
          placeholder="Example: Amazing Restaurant!"
          required
        ></textarea>
      </div>
      <button className="add-review-button mt-4 py-2 px-4 bg-primary text-white rounded-lg border-none" type="submit">
        Add Review
      </button>
    </form>
  );
};

export default AddReview;
