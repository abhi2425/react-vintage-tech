import React, { useRef, useState } from "react";
import "./Checkout.css";
import FormInput from "../../Components/FormInput/FormInput";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
import { useCartContext } from "../../Contexts/CartContext/CartContext";
import { useUserContext } from "../../Contexts/UserContext";
import submitOrder from "../../Utils/submitOrder";
//import { GoCreditCard } from "react-icons/go";
import { useHistory } from "react-router";

const Checkout = () => {
  const { cartItems, totalCount, totalPrice } = useCartContext();
  const {
    userData: { token },
    alert,
    setAlert,
  } = useUserContext();
  const [name, setName] = useState("");
  // const [error, setError] = useState({
  //   isError: true,
  //   message: "",
  // });
  const nameRef = useRef();
  const history = useHistory();

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (name) {
      const orders = {
        OrderPlacedBy: name,
        cartItems,
        totalCount,
        totalPrice,
      };
      setAlert({
        isAlert: true,
        type: "pending",
        message: "😴 Submitting Your Order...Please Wait!",
      });
      const response = await submitOrder(orders, token);
      if (response) {
        setAlert({
          isAlert: true,
          type: "success",
          message: "🤩 Purchase Complete!!",
        });
        history.push("/");
      } else {
        setAlert({
          isAlert: true,
          type: "danger",
          message: "😞 Something Went Wrong...Please try again!",
        });
      }
    }
    // else if (name.length < 4) {
    //   setError({
    //     isError: true,
    //     message: "Too Short Name",
    //   });
    // }
  };
  if (!cartItems.length) {
    return <EmptyCart />;
  }
  return (
    <main className="page">
      <section className="pageSection">
        <header className="checkout">Checkout</header>
        <form className="form" onSubmit={(e) => onSubmitHandler(e)}>
          <div className="totalOrder">
            Order Total-:
            <span className="span">$ {totalPrice.toFixed(2)}</span>
          </div>
          <FormInput
            label="Name"
            type="text"
            onChangeHandler={onNameChangeHandler}
            value={name}
            reference={nameRef}
          />
          {/* {error.isError ? (
            <p className="errorMessageForm">{error.message}</p>
          ) : null} */}
          {name.length > 3 && (
            <input type="submit" value="Submit" className="submitButton" />
          )}
        </form>
      </section>
    </main>
  );
};

export default Checkout;
