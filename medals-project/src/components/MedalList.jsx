import React from 'react';
import MedalItem from './MedalItem';

const MedalList = ({ countries, deleteCountryhandler }) => {
    return (
        <div>
            {countries.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>국가명</th>
                            <th>금메달</th>
                            <th>은메달</th>
                            <th>동메달</th>
                            <th>액션</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country) => (
                            <MedalItem key={country.id} country={country} deleteCountryhandler={deleteCountryhandler} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>아직 추가된 국가가 없습니다. 메달을 추적하세요.</p>
            )}
        </div>
    );
};

export default MedalList;
