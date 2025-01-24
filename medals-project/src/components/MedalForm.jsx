import React from 'react';

const MedalForm = ({ country, setCountry, gold, setGold, silver, setSilver, bronze, setBronze, addCountryHandler, updateCountryHandler }) => {
    return (
        <form>
            <label htmlFor="country">국가명</label>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="국가 입력"/>
            <label htmlFor="gold">금메달</label>
            <input type="number" min={0} value={gold} onChange={(e) => setGold(Math.max(0, e.target.value))} />
            <label htmlFor="silver">은메달</label>
            <input type="number" min={0} value={silver} onChange={(e) => setSilver(Math.max(0, e.target.value))} />
            <label htmlFor="bronze">동메달</label>
            <input type="number" min={0} value={bronze} onChange={(e) => setBronze(Math.max(0, e.target.value))} />
            <Button type="button" onClick={addCountryHandler}>
                국가 추가
            </Button>
            <Button type="button" onClick={updateCountryHandler}>
                업데이트
            </Button>
        </form>
    );
};

// 버튼 컴포넌트
const Button = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>;
};

export default MedalForm;
