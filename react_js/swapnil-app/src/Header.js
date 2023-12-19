import React from 'react';

function Header(props) {
    // props.show();
    // console.log(props);
    return (
        <div>
            <div className='alert alert-light'>
                <nav className="navbar navbar-light bg-light">
                    <strong> Im at Head {props.person.name}-{props.person.age} </strong>
                    <button onClick={props.showDetails}>Show</button>
                    <strong>{props.names[0]}-{props.names[1]}-{props.names[2]}</strong>
                    <h1>
                        Names
                    </h1>
                    <ul>
                        {props.names.map(function(names){
                            return (
                                <li>{names}</li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
