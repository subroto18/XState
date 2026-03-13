import Layout from "../common/Layout";
import Select from "../../ui/Select";
import useCountry from "../../hooks/useCountry";
import Styles from "./Home.module.css";
import { useState } from "react";
import useStates from "../../hooks/useStates";
import useCity from "../../hooks/useCity";

const Index = () => {
  const { loading, countries, error } = useCountry();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const {
    loading: stateLoading,
    states,
    error: stateError,
  } = useStates(selectedCountry);

  const {
    loading: cityLoading,
    cities,
    error: cityError,
  } = useCity(selectedCountry, selectedState);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  return (
    <Layout>
      <div className={Styles.container}>
        <Select
          id="country"
          label="Select Country"
          value={selectedCountry}
          onChange={handleCountryChange}
          disabled={loading && error ? true : false}
          options={countries}
        />

        <Select
          id="state"
          label="Select State"
          value={selectedState}
          onChange={handleStateChange}
          disabled={stateLoading && stateError ? true : false}
          options={selectedCountry ? states : []}
        />

        <Select
          id="city"
          label="Select City"
          value={selectedCity}
          onChange={handleCityChange}
          disabled={cityLoading && cityError ? true : false}
          options={selectedState ? cities : []}
        />
      </div>
      {selectedCountry && selectedState && selectedCity && (
        <p className={Styles.selectedText}>
          You selected{" "}
          <span className={Styles.selectedCountry}>{selectedCountry}, </span>
          <span className={Styles.selectedState}>
            {selectedState}, {selectedCity}
          </span>
        </p>
      )}
    </Layout>
  );
};

export default Index;
