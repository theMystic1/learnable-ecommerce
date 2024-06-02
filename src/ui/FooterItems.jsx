function FooterItems() {
  // Get In Touch

  const footerItems = [
    {
      header: "Company Info",

      info: ["  About Us", "Carrier", "  We are hiring", "Blog"],
    },

    {
      header: "Legal",
      info: ["  About Us", "Carrier", "  We are hiring", "Blog"],
    },
    {
      header: "Features",
      info: [
        "  Business Marketing",
        "  User Analytic",
        "  Live Chat",
        "  Unlimited Support",
      ],
    },
    {
      header: "Resources",
      info: ["  IOS & Android", " Watch a Demo", "  Customers", "API"],
    },
  ];
  //

  return (
    <div className="footer-item">
      {footerItems.map((item) => (
        <ul key={item.header}>
          <li>{item.header}</li>
          {item.info.map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ul>
      ))}

      <form className="footer-form">
        <h3> Your Email</h3>
        <span>
          <input type="email" placeholder="Enter email" />
          <button>Subscribe</button>
        </span>

        <p>Lore imp sum dolor Amit</p>
      </form>
    </div>
  );
}

export default FooterItems;
