import { Plans } from "../../../types/payment/Plans";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchData from "../../../functions/FetchData";
import { Button } from "react-bootstrap";

export const Cart = () => {

    const { id } = useParams();
    const [plan, setPlan] = useState<Plans>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useFetchData<Plans>({
        method: "GET",
        app_name: "plans",
        url: `plan/`,
        id : id,
        setData: setPlan,
        setLoading: setIsLoading,
        setError,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!plan) {
        return <div>No plan found</div>;
    }

    


  return (
    <div>
      <p>{plan.title}</p>
      <p>{plan.price}</p>
      <Button variant="primary" href="/payment">Checkout</Button>
    </div>
  );
};

export default Cart;
