import CartItem from "./CartItem";

function Profile() {
  const username = "Pekka";

  return (
    <>
      <h2>Hello {username}!</h2>
      <p>Here you can view your previous orders:</p>
      <h2>Order id: {}</h2>
      <p>Ordered: {}</p>
      <p>Items:</p>
      <hr className="hrdashed" />
      <CartItem />
      <CartItem />
      <CartItem />
    </>
  );
}

export default Profile;
