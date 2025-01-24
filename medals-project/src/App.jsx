import React, { useState } from 'react';
import MedalForm from './components/MedalForm';
import MedalList from './components/MedalList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const addCountryHandler = (e) => {
    e.preventDefault();

    if(!country.trim()){
      alert("국가명을 입력해주세요.")
      return;
    }

    const newCountry = {
      id: crypto.randomUUID(),//고유한 식별자를 생성하는 함수
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };
    const goldSorted = [...countries, newCountry].sort((a, b) => b.gold - a.gold);
    setCountries(goldSorted);
    setCountry('');
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const deleteCountryhandler = (id) => {
    const deleteCountry = countries.filter((country) => country.id !== id);
    setCountries(deleteCountry);
  };

  const updateCountryHandler = (e) => {
    e.preventDefault();
    const newCountries = countries.map((item) => {
      if (item.country === country) {
        return { ...item, gold, silver, bronze };
      }
      return item;
    });
    const goldSorted = newCountries.sort((a, b) => b.gold - a.gold);
    setCountries(goldSorted);
  };

  return (
    <div>
      <h2>2024 파리 올림픽</h2>
      <MedalForm
        country={country}
        setCountry={setCountry}
        gold={gold}
        setGold={setGold}
        silver={silver}
        setSilver={setSilver}
        bronze={bronze}
        setBronze={setBronze}
        addCountryHandler={addCountryHandler}
        updateCountryHandler={updateCountryHandler}
      />
      <MedalList countries={countries} deleteCountryhandler={deleteCountryhandler} />
    </div>
  );
};

export default App;
