import Link from "./Link";

const AffiLinks = () => {
  return (
    <>
      <div className="font-sans font-semibold pl-20 mt-10 text-[26px] pb-1">
        Affiliate Links
      </div>
      <div className="flex flex-wrap justify-center">
        <Link pageName={"Homepage"} PageId={0} ReqId={"AD1234142"} />
        <Link pageName={"Regestration"} PageId={1} ReqId={"AD1234142"} />
        <Link pageName={"LogIn"} PageId={2} ReqId={"AD1234142"} />
      </div>
    </>
  );
};

export default AffiLinks;
