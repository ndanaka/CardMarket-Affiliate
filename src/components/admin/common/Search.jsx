import HomeApi from "../../../api/homeApi";

const Search = ({ setMembers, setFltSignal, searchHolder, role }) => {
  const { GetMembers } = HomeApi();

  const handleSearch = async (e) => {
    const res = await GetMembers(role);
    const members = res.data.members;

    const filter = members.filter(
      (member) =>
        member.fullName.toUpperCase().includes(e) ||
        member.country.toUpperCase().includes(e) ||
        member.email.toUpperCase().includes(e) ||
        member.role.toUpperCase().includes(e)
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
      <input
        onChange={(e) => handleSearch(e.target.value.toUpperCase())}
        className="border-gray-600 border-[1px] rounded-full outline-none focus:ring-1 focus:ring-gray-400 pl-8 pr-3 py-1 "
        placeholder={searchHolder}
        type="search"
      />
      <img
        className="w-4 absolute left-3 top-1/2 -translate-y-1/2"
        src="/image/icon/search.svg"
      />
    </>
  );
};

export default Search;
