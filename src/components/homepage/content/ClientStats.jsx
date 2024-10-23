import { useEffect, useState, useRef } from "react";

import formatPrice from "../../../utils/formatPrice";

import HomeApi from "../../../api/homeApi";

const ClientStats = ({ affId, period }) => {
  const [clients, setClients] = useState();
  const [more, setMore] = useState(true);

  const { op, GetClients } = HomeApi();

  useEffect(() => {
    setMore(true);
    getClients();
  }, [period]);

  const getClients = async () => {
    try {
      const res = await GetClients(affId, period);
      setClients(res.data.clientData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-[900px]:w-full w-[35%]">
        <div className="font-sans font-semibold text-gray-500 text-lg">
          {period}'s Clients
        </div>
        <table className=" w-[100%] text-[13px] mt-1 border-gray-400 border-[1px] text-center rounded-3xl ">
          <thead className="h-10 text-[14px] text-white bg-[#4B5563]">
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Deposit</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {clients?.length === 0 ? (
              <tr>
                <td colSpan={3}>No client data</td>
              </tr>
            ) : (
              clients?.map((item, index) => (
                <tr
                  key={index}
                  className={`even:bg-gray-100 h-10 ${
                    index > 2 && more && "hidden"
                  }`}
                >
                  <td>{item.name}</td>
                  <td>{item.country}</td>
                  <td>¥{formatPrice(item.payment)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {clients?.length > 3 && (
          <button
            onClick={() => setMore(!more)}
            className="text-[green] underline absolute left-[50%] -translate-x-[50%] text-[15px]"
          >
            {more ? "more" : "less"}
          </button>
        )}
      </div>
    </>
  );
};

export default ClientStats;
