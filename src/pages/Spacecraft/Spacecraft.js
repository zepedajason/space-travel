import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import styles from "./Spacecraft.module.css";
import { LoadingContext } from "../../context/LoadingProvider";
import SpaceTravelApi from "../../services/SpaceTravelApi";

function Spacecraft() {
  const [spacecraft, setSpacecraft] = useState();
  const { id } = useParams();
  const { enableLoading, disableLoading } = useContext(LoadingContext);

  useEffect(() => {
    // todo get spacecraft from the API using the ID from the route (very similar to what we did in Planets.js)
    async function runGetSpacecrafts() {
      let res = (await SpaceTravelApi.getSpacecraftById({ id })).data;
      setSpacecraft(res);
    }

    runGetSpacecrafts();
  }, [enableLoading, disableLoading]);

  return (
    spacecraft && (
      <div className={styles["spacecraft"]}>
        <div className={styles["spacecraft__imageContainer"]}>
          {spacecraft.pictureUrl ? (
            <img
              src={spacecraft.pictureUrl}
              alt={`The spacecraft ${spacecraft.name}`}
              className={styles["spacecraft__image"]}
            />
          ) : (
            <span className={styles["spacecraft__image--default"]}>🚀</span>
          )}
        </div>

        <div className={styles["spacecraft__infoContainer"]}>
          <div className={styles["spacecraft__info"]}>
            <div className={styles["spacecraft__infoHeader"]}>
              Name: {spacecraft.name}
            </div>

            <div className={styles["spacecraft__infoHeader"]}>
              Capacity: {spacecraft.capacity}
            </div>
          </div>

          <div className={styles["spacecraft__info"]}>
            <div className={styles["spacecraft__infoHeader"]}>Description:</div>
            <div className={styles["spacecraft__infoText"]}>
              {spacecraft.description}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Spacecraft;
