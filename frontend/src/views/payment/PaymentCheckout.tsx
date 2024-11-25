import axios from "axios";
import { Plans } from "../../types/payment/Plans";
import { useState, useEffect, useRef } from "react";
import { CustomNavbar } from "../../components/home/Navbar";

const PaymentCheckout = () => {
  const [plan, setPlan] = useState<Plans | null>(null);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null); 
  const iframeRef = useRef<HTMLIFrameElement | null>(null); 

  const user_token = localStorage.getItem("authToken");

  useEffect(() => {
    const selectedPlan = localStorage.getItem("selectedPlan");
    if (selectedPlan) {
      setPlan(JSON.parse(selectedPlan));
    }
  }, []);

  useEffect(() => {
    if (plan && user_token) {
      const payload = {
        plan_id: plan.id,
        user_token: user_token,
      };

      const fetchPaymentUrl = async () => {
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/payment/api/generate_plan_payment/",
            payload
          );

          if (response.data && response.data.url) {
            setPaymentUrl(response.data.url);
          } else {
            console.error("No 'url' returned in the response.");
          }
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            console.error("Error Response Data:", error.response.data);
          } else {
            console.error("Error Message:", (error as Error).message);
          }
        }
      };

      fetchPaymentUrl();
    }
  }, [plan, user_token]); 

  console.log("Payment URL:", paymentUrl);
  console.log("Plan:", plan);
  console.log("User Token:", user_token);
  console.log("Iframe Ref:", iframeRef.current);

  return (
    <>
      <CustomNavbar />
      <div style={{ height: "100vh", width: "100%", margin: 0, padding: 0 }}>
        {paymentUrl && (
          <iframe
            ref={iframeRef}
            src={paymentUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Payment Page"
            style={{
              display: "block",
              border: "none",
              height: "100%",
              width: "100%",
            }}
          ></iframe>
        )}
      </div>
    </>
  );
};

export default PaymentCheckout;
