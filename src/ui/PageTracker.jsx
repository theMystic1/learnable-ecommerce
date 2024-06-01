import { useLocation, useParams } from "react-router-dom";

function PageTracker() {
  const location = useLocation();
  const { id } = useParams();

  const pathname = location.pathname;

  return pathname === "/products" && id === undefined ? (
    ""
  ) : (
    <div className="pageTracker">
      {id && (
        <>
          <p>Home</p>
          <p style={{ color: id ? "#cecece" : "#252b42" }}>{"> Shop"}</p>
        </>
      )}
      {pathname === "/cart" && (
        <>
          <p>Home</p>
          <p style={{ color: "#252b42" }}>{"> Shop"}</p>
          <p style={{ color: "#cecece" }}>{"> Shopping Cart"}</p>
        </>
      )}
    </div>
  );
}

export default PageTracker;
