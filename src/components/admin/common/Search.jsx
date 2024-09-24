import member from "../manage/manager.json";

const Search = ({ setMembers, setFltSignal }) => {
  const handleSearch = (e) => {
    const filter = member?.filter(
      (t) =>
        t.email.toUpperCase().includes(e) ||
        t.name.toUpperCase().includes(e) ||
        t.country.toUpperCase().includes(e) ||
        t.role.toUpperCase().includes(e)
    );
    setMembers(filter);
    if (e !== "") {
      setFltSignal(true);
    } else {
      setFltSignal(false);
    }
  };
  return (
    <>
      <div className=" relative">
        <input
          onChange={(e) => handleSearch(e.target.value.toUpperCase())}
          className="border-gray-600 border-[1px] rounded-full outline-none focus:ring-1 focus:ring-gray-400 pl-8 pr-3  py-1 "
          placeholder="Search anything"
          type="search"
        />
        <img
          className="w-4 absolute left-3 top-1/2 -translate-y-1/2"
          src="/image/icon/search.svg"
        />
      </div>
    </>
  );
};

export default Search;
