import React from 'react';

const MedalItem = ({ country, deleteCountryhandler }) => {
    return (
        <tr>
            <td>{country.country}</td>
            <td>{country.gold}</td>
            <td>{country.silver}</td>
            <td>{country.bronze}</td>
            <td>
                <button onClick={() => deleteCountryhandler(country.id)}>삭제</button>
            </td>
        </tr>
    );
};

export default MedalItem;
