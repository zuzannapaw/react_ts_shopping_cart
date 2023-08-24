import { Button } from "react-bootstrap";

type IncrementDecrementItemProps = {
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  id: number;
  quantity: number;
};

export const IncrementDecrementItem = ({
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
  id,
  quantity,
}: IncrementDecrementItemProps) => {
  return (
    <div
      className="d-flex align-items-center flex-column"
      style={{ gap: ".5rem" }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ gap: ".5rem" }}
      >
        <Button
          style={{ cursor: "pointer" }}
          onClick={() => decreaseCartQuantity(id)}
        >
          -
        </Button>
        <div>
          <span className="fs-3">{quantity}</span> in cart
        </div>
        <Button
          style={{ cursor: "pointer" }}
          onClick={() => increaseCartQuantity(id)}
        >
          +
        </Button>
      </div>
      <Button
        style={{ cursor: "pointer" }}
        onClick={() => removeFromCart(id)}
        variant="danger"
        size={"sm"}
      >
        Remove
      </Button>
    </div>
  );
};
