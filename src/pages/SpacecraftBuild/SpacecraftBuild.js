import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SpacecraftBuild.module.css";
import { LoadingContext } from "../../context/LoadingProvider";
import SpaceTravelApi from "../../services/SpaceTravelApi";

function SpacecraftBuild() {
  const INITIAL_SPACECRAFT = {
    name: "",
    capacity: "",
    description: "",
    pictureUrl: "",
  };
  const [spacecraft, setSpacecraft] = useState(INITIAL_SPACECRAFT);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { enableLoading, disableLoading } = useContext(LoadingContext);

  function validateInput(name) {
    return name.trim() !== "";
  }

  function checkIfNumber(num) {
    return !isNaN(num);
  }

  function handleChangeOfFormInput(event) {
    const { name, value } = event.target;
    setSpacecraft({
      ...spacecraft,
      [name]: value,
    });

    setErrors((errors) => ({
      ...errors,
      [name]: "",
    }));
  }

  async function handleSubmitOfForm(event) {
    //submit the form using the API
    event.preventDefault();
    //static async buildSpacecraft ({name, capacity, description, pictureUrl = undefined})
    let { name, capacity, description, pictureUrl } = spacecraft;
    let inputErrors = {};

    //try to refactor all these if statements
    if (!validateInput(name)) {
      inputErrors.name = "Input is required";
    }

    if (!validateInput(description)) {
      inputErrors.description = "Description is required";
    }

    if (!validateInput(pictureUrl)) {
      inputErrors.pictureUrl = "Picture URL is required";
    }

    if (!validateInput(capacity)) {
      inputErrors.capacity = "Capacity is required";
    }

    if (!checkIfNumber(capacity)) {
      inputErrors.capacity = "Capacity must be a number.";
    }

    if (Object.keys(inputErrors).length > 0) {
      setErrors(inputErrors);
    } else {
      enableLoading();
      await SpaceTravelApi.buildSpacecraft({
        name,
        capacity,
        description,
        pictureUrl,
      });
      disableLoading();
      setErrors({});
    }
  }

  function handleClickOfBack() {
    navigate(-1);
  }

  return (
    <>
      <button className={styles["button__back"]} onClick={handleClickOfBack}>
        Back 👈
      </button>
      <div>
        <form onSubmit={handleSubmitOfForm}>
          <div className={styles["form"]}>
            <div className={styles["form__inputs"]}>
              <div className={styles["form__inputContainer"]}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={spacecraft.name}
                  onChange={handleChangeOfFormInput}
                  autoComplete="off"
                />
                {errors.name && (
                  <div className={styles["error"]}>{errors.name}</div>
                )}
              </div>

              <div className={styles["form__inputContainer"]}>
                <input
                  type="text"
                  name="capacity"
                  placeholder="Capacity"
                  value={spacecraft.capacity}
                  onChange={handleChangeOfFormInput}
                  autoComplete="off"
                />
                {errors.capacity && (
                  <div className={styles["error"]}>{errors.capacity}</div>
                )}
              </div>

              <div className={styles["form__inputContainer"]}>
                <textarea
                  name="description"
                  placeholder="Description"
                  value={spacecraft.description}
                  onChange={handleChangeOfFormInput}
                />
                {errors.description && (
                  <div className={styles["error"]}>{errors.description}</div>
                )}
              </div>

              <div className={styles["form__inputContainer"]}>
                <input
                  type="text"
                  name="pictureUrl"
                  placeholder="Picture URL"
                  value={spacecraft.pictureUrl}
                  onChange={handleChangeOfFormInput}
                  autoComplete="off"
                />
                {errors.pictureUrl && (
                  <div className={styles["error"]}>{errors.pictureUrl}</div>
                )}
              </div>
            </div>

            <div className={styles["submitContainer"]}>
              <div className={styles["errorContainer"]}></div>

              <div className={styles["button__submit"]}>
                <button type="submit" onClick={handleSubmitOfForm}>
                  Build 🏗️
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SpacecraftBuild;
