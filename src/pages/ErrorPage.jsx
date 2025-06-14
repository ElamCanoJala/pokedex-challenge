import "./ErrorPage.css";
import ButtonAction from "../components/atoms/ButtonAction";
import notFountImage from "../assets/404.svg";

const NotFound = () => {
  return (
    <div className="error-container">
      <img src={notFountImage} alt="404 Not found" className="error-img" />
      <p className="text">Page not found</p>
      <ButtonAction style={"back-to-home red-btn"} text="Back to home" />
    </div>
  );
};
export default NotFound;
