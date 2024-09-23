import Register from "../../../auth/Register";


const AddUser = () => {
  return (
    <>
      <div className="flex justify-center ]">
        <div className="w-[500px]">
          <Register
            title={"ADD USER"}
            label={"Add"}
          />
        </div>
      </div>
    </>
  );
};
export default AddUser;
