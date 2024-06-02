import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/");
  }
  return (
    <div className="logo" onClick={handleNavigate}>
      Bandage
    </div>
  );
}

export default Logo;
