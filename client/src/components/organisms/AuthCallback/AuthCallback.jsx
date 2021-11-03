import { useHistory } from "react-router-dom";

const AuthCallback = () => {
  let history = useHistory();
  // get the access token from the url query params
  // TODO: this will fail in old browser need to make it backward compatible
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const { accessToken } = params;

  // set the token in session to authenticate the user
  if (accessToken) {
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("loginTime", ~~(Date.now() / 1000));
  }

  history.push("/");
  return <></>;
};

export default AuthCallback;
