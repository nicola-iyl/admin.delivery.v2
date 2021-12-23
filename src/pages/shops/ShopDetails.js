import React from "react";

const ShopDetails = ({shop}) => {
  return(
    <div>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item w-50"><strong>Ragione Sociale</strong>:</li>
        <li className="list-group-item w-50">{ shop.ragione_sociale }</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item w-50"><strong>Insegna</strong>:</li>
        <li className="list-group-item w-50">{ shop.insegna }</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item w-50"><strong>Dominio</strong>:</li>
        <li className="list-group-item w-50">{ shop.dominio }</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item w-50"><strong>Nome</strong>:</li>
        <li className="list-group-item w-50">{ shop.name }</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item w-50"><strong>Email</strong>:</li>
        <li className="list-group-item w-50">{ shop.email }</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item w-50"><strong>Città</strong>:</li>
        <li className="list-group-item w-50">{ shop.citta }</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item w-50"><strong>Indirizzo</strong>:</li>
        <li className="list-group-item w-50">{ shop.indirizzo }</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item w-50"><strong>Cap</strong>:</li>
        <li className="list-group-item w-50">{ shop.cap }</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item w-50"><strong>Tel.</strong>:</li>
        <li className="list-group-item w-50">{ shop.tel }</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item w-50"><strong>Whatsapp</strong>:</li>
        <li className="list-group-item w-50">{ shop.whatsapp }</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item w-50"><strong>P. Iva</strong>:</li>
        <li className="list-group-item w-50">{ shop.p_iva }</li>
      </ul>
    </div>
  );
}

export default ShopDetails;