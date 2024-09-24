const TimeFrame = ({ year, month, setTimeFrame }) => {
  const handleTimeFrame = (e) => {
    setTimeFrame((t) => ({
      ...t,
      year: e,
    }));
    if (e == 0) {
      setTimeFrame((t) => ({
        ...t,
        month: e,
      }));
    }
  };

  return (
    <>
      <div className="flex items-center mb-7">
        <span className="font-semibold">Year Frame: </span>
        <select
          className="border-[1px] ml-3 border-gray-600 bg-gray-100 px-2 rounded-sm font-semibold"
          onChange={(e) => handleTimeFrame(e.target.value)}
        >
          <option value={0}>Select</option>
          {year?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className="font-semibold ml-5">Month Frame: </span>
        <select
          className="border-[1px] ml-3 border-gray-600 bg-gray-100 px-2 rounded-sm font-semibold"
          onChange={(e) =>
            setTimeFrame((t) => ({
              ...t,
              month: e.target.value,
            }))
          }
        >
          <option value={0}>Select</option>
          {month?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default TimeFrame;
