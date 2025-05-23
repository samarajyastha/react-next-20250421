import Spinner from "../Spinner";
import { PiMoneyWavyDuotone } from "react-icons/pi";
import { confirmOrder } from "@/api/orders";
import { toast } from "react-toastify";
import { useState } from "react";

function CashOnDelivery({ order }) {
  const [loading, setLoading] = useState(false);

  function confirmPayment() {
    const orderId = order._id;

    setLoading(true);

    confirmOrder(orderId, {
      status: "completed",
      transactionId: crypto.randomUUID(),
      paymentMethod: "cash",
    })
      .then((response) => {
        console.log("cash on delivery confirmed");
      })
      .catch((error) => toast.error(error.response.data, { autoClose: 750 }))
      .finally(() => setLoading(false));
  }

  return (
    <button
      onClick={confirmPayment}
      type="button"
      disabled={loading}
      class="flex items-center gap-2 focus:outline-none text-white bg-emerald-800 hover:opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 disabled:opacity-80"
    >
      Cash on delivery
      {loading ? <Spinner className="h-5 w-5" /> : <PiMoneyWavyDuotone />}
    </button>
  );
}

export default CashOnDelivery;
