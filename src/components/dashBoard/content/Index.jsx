import { useAtom } from "jotai";

import Advertise from "./Advertise";
import Sign from "./Sign";
import Testimonials from "./Testimonials";

import { tokenWithPersistenceAtom } from "../../../atoms";

const Content = () => {
  const [token] = useAtom(tokenWithPersistenceAtom);

  return (
    <>
      <Advertise />
      {!token && <Sign />}
      <Testimonials />
    </>
  );
};

export default Content;
