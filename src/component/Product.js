import React from "react";

function Product(props) {
  console.log(props);
  return (
    <>
      <div className="pt-5 container-fluid">
        <div className="mt-5 border-dark container">
          <div className="row">
            <div className="col-5">
              <h2 className="text-black">
                {props.productList.name}{" "}
                <span className="badge bg-secondary">
                  {" "}
                  ₹ {props.productList.price}
                </span>{" "}
              </h2>
              <h2 className="text-black">
              Number of Quntity is:  {props.productList.quantity}
              </h2>
            </div>
            <div className="col-3">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info">
                  -
                </button>
                <button type="button" class="btn btn-primary">
                  {props.productList.quantity}
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onChange={() => {
                    props.increamentQuantity(props.index);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-4">
              {props.productList.price * props.productList.quantity}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
