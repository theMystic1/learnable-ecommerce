function ShopDet({ data }) {
  const { thumbnail } = data;
  return (
    <div className="details--desc">
      <div>
        <h2>the quick fox jumps over</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          ratione enim quod laborum debitis, voluptates nesciunt, earum error ut
          excepturi, odio quam soluta ex ea non quisquam tempora? Eos sunt ipsa
          deleniti quos sequi expedita porro unde aut id officiis. Id,
          accusantium est. Sint molestias vel incidunt praesentium sunt corporis
          totam in voluptate ipsum eum, amet saepe, quidem natus beatae.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
          pariatur reprehenderit consequatur ratione repellendus tenetur
          expedita amet, enim optio autem ipsam aliquid ex placeat sapiente
          tempora dolorum impedit unde! Nihil blanditiis, ut sit laboriosam
          quam, vero, veritatis a tempora tenetur voluptas deleniti ullam
          exercitationem laborum repellendus placeat totam quae assumenda.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nam
          distinctio eveniet expedita rem quidem cumque labore corporis aliquam,
          optio accusantium sunt dolorum velit, ea sapiente reiciendis.
          Corporis, maxime unde?
        </p>
      </div>

      <img src={thumbnail} alt="" />
    </div>
  );
}

export default ShopDet;
