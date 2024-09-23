// eslint-disable-next-line react/prop-types
const AppServerErr = ({children }) => {
    return (
      <>
        <small className="text-sm text-red-500">{children}</small>
      </>
    );
  };
  
  export default AppServerErr;
  