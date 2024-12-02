const Grid = () => {
  return (
    <div>
      <div className="  bg-secondary w-100">
        <h1 className=" container bg-black text-light ">
          Welcome to our Snack
        </h1>
        <div className="container text-center mt-4">
          <div className="row">
            <div className="col-12 col-md-4">
              <img src="images/img1.jpg" alt="" className="m-3" />
              <h3 className="m-3">Burger Big</h3>
            </div>
            <div className="col-12 col-md-4">
              <img src="images/img1.jpg" alt="" className="m-3" />
              <h3 className="m-3">Burger Big</h3>
            </div>
            <div className="col-12 col-md-4">
              <img src="images/img1.jpg" alt="" className="m-3" />
              <h3 className="m-3">Burger Big</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
