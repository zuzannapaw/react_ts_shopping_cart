import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isCartOpen: boolean;
  cartItems: {
    id: number;
    quantity: number;
  }[];
};

export const ShoppingCart = ({ isCartOpen, cartItems }: ShoppingCartProps) => {
  const { closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isCartOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <Stack className="d-flex flex-column align-items-center gap-2 ">
            <div style={{ fontSize: "1.1rem", fontWeight: "500" }}>
              Nothing Here!{" "}
            </div>
            <div className="text-muted">Add Product To Your Cart</div>
          </Stack>
        ) : (
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((acc, cartItem) => {
                  const item = storeItems.find(
                    (item) => item.id === cartItem.id
                  );
                  return acc + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};
