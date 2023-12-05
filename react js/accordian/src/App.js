// App.js
import React, { useState } from 'react';
import Display from './Display';

function App() {
  const bioDataArray = [
    "i'm harshal. I'm bad baoyyy",
    "i'm Shashank. I'm bad baoyyy",
    "i'm Milind. I'm bad baoyyy",
    "i'm Prabhuu. I'm bad baoyyy",
    
    
  ];

  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleAccordionClick = (personIndex) => {
    setSelectedPerson(selectedPerson === personIndex ? null : personIndex);
  };

  return (
    <div className="App">
      <div className="accordion">
        {bioDataArray.map((bioData, index) => (
          <div className="card" key={index}>
            <div className="card-header" id={`heading${index}`}>
              <h2 className="mb-0">
                <button
                  className={`btn btn-link ${selectedPerson === index ? '' : 'collapsed'}`}
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collapse${index}`}
                  aria-expanded={selectedPerson === index ? 'true' : 'false'}
                  aria-controls={`collapse${index}`}
                  onClick={() => handleAccordionClick(index)}
                >
                  Person {index + 1}
                </button>
              </h2>
            </div>
            <div
              id={`collapse${index}`}
              className={`collapse ${selectedPerson === index ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-parent=".accordion"
            >
              <div className="card-body">
                <Display bioData={bioData} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


