import React, { useState } from 'react';
// import About from './About';

function Content(props) {
    const [name, setName] = useState('');
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    return (
        <div>
           
            <div className='alert alert-light' style={{ height: 'auto', backgroundColor: 'black', color: 'white' }}>
            {/* <About /> */}
                <p>
                    APNE SARE BHAIYO K NAAM

                    Swapnil
                    Swaraj
                    Shashank
                    Saurab
                    Vaibaba
                    Biba
                    Dosa
                    Leta
                    Ananta
                </p>

                <div>
                    <ul>
                        {props.deatils.map(function (p, index) {
                            return (
                                <li key={index}>{p.name}-{p.age}-{p.mobile}</li>
                            )
                        })}
                    </ul>
                </div>
                <input
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                ></input>
                <button className='btn btn-info' onClick={() => props.printName(name)}>
                    Nam bata
                </button>

                <div>
                    <input
                        value={num1}
                        onChange={(event) => {
                            setNum1(event.target.value);
                        }}
                    ></input>
                    <input
                        value={num2}
                        onChange={(event) => {
                            setNum2(event.target.value);
                        }}
                    ></input>
                   
                    <h1>{num1+num2}</h1>
                </div>
                
            </div>
            
        </div>
    );
}

export default Content;
