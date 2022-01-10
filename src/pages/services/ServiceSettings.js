import React from "react";

const ServiceSettings = ({ service }) => {
  return (
    <div>
      { service.settingTypes.map(( item, i) => { return (
        <ul key={ item.id } className="list-group list-group-horizontal mb-1">
          <li className="list-group-item w-100"><strong>{ item.name }</strong>: { item.desc }</li>
        </ul>   
      ); }) }
    </div>
  );
}

export default ServiceSettings;