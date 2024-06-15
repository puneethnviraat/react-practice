import React from 'react';

const Filteredlist = ({ filteredUsers }) => {
  return (
    <div className="">
      <ul className="">
        {filteredUsers.map((fname, index) => {
          return (
            <li className="" key={index}>
              {fname.firstName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filteredlist;
