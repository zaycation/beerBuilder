/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useQuery } from "react-query";
import PulseLoader from "react-spinners/PulseLoader";

function Beers({ setBeerId }) {
  const { isLoading, error, data } = useQuery("beers", () =>
    fetch(`https://api.punkapi.com/v2/beers?per_page=80`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    //console.log(process.env);
    return (
      <div className="text-center">
        <PulseLoader size={20} color="teal" />
      </div>
    );
  } else if (error) {
    return "Error!!";
  }

  return (
    <>
      <DropdownButton id="dropdown-item-button" title="Beers By Name">
        {data?.map((beer) => (
          <Dropdown.Item key={beer.name} onClick={() => setBeerId(beer.id)}>
            {beer.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
}

export default Beers;
