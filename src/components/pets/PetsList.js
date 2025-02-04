import PetsListNav from "./PetsListNav";
import "./PetsList.css";
import { Redirect, Route } from "react-router-dom";

import pets from "../../data/pets";
import Cats from "./Cats";
import Dogs from "./Dogs";

const PetsList = () => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />

      <section className="pets-list">
        {/* All cats section */}
        <Route path="/pets/cats" component={Cats} />
      
        {/* All dogs section */}
        <Route path="/pets/dogs" component={Dogs} />
        <Redirect to="/pets/cats" />
      </section>
    </section>
  );
};

export default PetsList;
