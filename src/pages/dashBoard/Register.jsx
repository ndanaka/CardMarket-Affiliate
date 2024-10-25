import { useTranslation } from "react-i18next";

import RegisterForm from "../../components/auth/RegisterForm";
import RegComment from "../../components/sign/RegComment";

const Register = () => {
  const { t } = useTranslation();

  return (
    <div className=" flex justify-center">
      <div className="p-4 w-[400px]">
        <RegisterForm type={"register"} role={"Affiliate"} />
      </div>
      <div className="border-l-[1px] border-l-gray-300 pl-5 ml-5 max-sm:hidden pr-4 mt-2">
        <RegComment
          order={1}
          title={t("regCommentTitle1")}
          content={t("regCommentDesc1")}
        />
        <RegComment
          order={2}
          title={t("regCommentTitle2")}
          content={t("regCommentDesc2")}
        />
        <RegComment
          order={3}
          title={t("regCommentTitle3")}
          content={t("regCommentDesc3")}
        />
        <RegComment
          order={4}
          title={t("regCommentTitle4")}
          content={t("regCommentDesc4")}
        />
      </div>
    </div>
  );
};

export default Register;
