import { Plans } from "../../../types/payment/Plans";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export const Cart = () => {

    const [plan, setPlan] = useState<Plans | null>(null);

    useEffect(() => {
        const selectedPlan = localStorage.getItem("selectedPlan");
        if (selectedPlan) {
            setPlan(JSON.parse(selectedPlan));
        }
    }, []);


    if (!plan) {
        return <div>No plan selected</div>;
    }

    console.log("Selected plan: ", plan);

  return (
    <div>
      <p>{plan.title}</p>
      <p>{plan.price}</p>
      <Button variant="primary" href="/payment">Checkout</Button>
    </div>
  );
};

export default Cart;
