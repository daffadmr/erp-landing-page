const Contact = () => {
  return (
    <div className="contact-section flex flex-col items-center gap-5">
      <h2 className="border px-5 py-2 rounded-3xl border-indigo-500">
        Our Contact
      </h2>
      <div className="flex justify-center flex-col items-center lg:flex-row gap-5 lg:gap-20 pb-20">
        <div className="desc max-w-md flex flex-col gap-2">
          <h1 className="font-bold text-center lg:text-justify">Ready to Get Started?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            sequi mollitia aut itaque at vero numquam suscipit eius eaque
            debitis nemo voluptas, quibusdam voluptate in commodi! Iste tempore
            assumenda corrupti.
          </p>
        </div>
        <div className="form-group w-full max-w-md md:w-[60vw] lg:w-[30vw]">
          <div className="flex">
            <input
              type="text"
              name="name"
              className="form-control w-[80%] p-2 rounded-md rounded-r-none border-r-0 border-2"
              id="nama"
              placeholder="Your email"
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 active:scale-95 w-[20%] py-2 rounded-l-none rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
