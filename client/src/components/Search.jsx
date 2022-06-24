import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Select from 'react-select';

function Search({locations, handleMapMove}) {
  const [selectedOption, setSelectedOption] = useState(null);
  let thisRoute = useLocation();
  let navigate = useNavigate();

  const handleUpdate = (selectedOption) => {
    if (!thisRoute.pathname.startsWith('/map')) {
      let idx = locations.findIndex(l => {
        return l.id === selectedOption.value
      });
      let link = `/forecast/${idx}`;
      console.log(link);
      navigate(link);
      navigate(0);
    }

    setSelectedOption(selectedOption);
    handleMapMove(selectedOption.data);
  }

  const names = locations.map(location => {
    return {
      label: location.name,
      value: location.id,
      data: location,
    }
  });

  return (
    <div className='search-bar w-80'>
      <Select
        placeholder="Search locations..."
        options={names}
        onChange={handleUpdate}
        menuPortalTarget={document.querySelector('body')}
        menuPostiion={'fixed'}
        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
      />
    </div>
  )
}

export default Search;
