import { useHistory } from "react-router-dom";

const SecuredRoute = ({ children }) => {
  let history = useHistory();
  const accessToken = sessionStorage.getItem("accessToken");
  const loginTime = sessionStorage.getItem("loginTime");
  const currentTimeStamp = ~~(Date.now() / 1000);

  // redirect if accessToken is not present
  // or session has passed 1 hr
  if (!accessToken || currentTimeStamp > loginTime + 60 * 60)
    history.push("/");

  return <>{children}</>;
};

export default SecuredRoute;
