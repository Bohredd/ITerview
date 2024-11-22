import { useParams } from "react-router-dom";

export const Payment = () => {
    const { id } = useParams();

    return <div>Payment cart {id}</div>;
}

export default Payment;