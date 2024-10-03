import { useEffect, useState } from "react";

const History = () => {
  const [more, setMore] = useState(true);
  const [payments, setPayments] = useState([
    {
      reqDate: 14,
      resDate: 15,
      amount: "1282$",
      method: "Apple Pay",
      address: 812345432633,
    },
    {
      reqDate: 14,
      resDate: 15,
      amount: "1282$",
      method: "Apple Pay",
      address: 812345432633,
    },
    {
      reqDate: 14,
      resDate: 15,
      amount: "1282$",
      method: "Apple Pay",
      address: 812345432633,
    },
  ]);

  return (
    <div className="relative flex justify-center pt-4 pb-6">
      <table className="w-[900px] text-[13px] mt-1 border-gray-400 border-[1px] text-center">
        <thead className="h-10 text-[14px] text-white bg-[#4B5563]">
          <tr>
            <th>No</th>
            <th>Request Date</th>
            <th>Withdrawal Date</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody className="text-[14px]">
          {payments?.map((payment, index) => (
            <tr
              key={index}
              className={`even:bg-gray-100 h-10 ${
                index > 1 && more && "hidden"
              }`}
            >
              <td>{index + 1}</td>
              <td>{payment.reqDate}</td>
              <td>{payment.resDate}</td>
              <td>{payment.amount}</td>
              <td>{payment.method}</td>
              <td>{payment.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {payments?.length > 2 && (
        <button
          onClick={() => setMore(!more)}
          className="absolute bottom-0 text-[green] underline absolute left-[50%] -translate-x-[50%] text-[15px]"
        >
          {more ? "more" : "less"}
        </button>
      )}
    </div>
  );
};

export default History;
