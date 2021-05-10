import React from 'react'

const Weather=(props)=>{
    return (
        <div className="container"> 
        <div className="cards pt-4">
            <h1>{props.city} {props.country}</h1>
            <h5 className="py-4">
                <i className={`wi ${props.icon} display-1`}/>
            </h5>
            {props.temp?<h1 className="py-2">{props.temp}&deg;C</h1>:null}
            {props.temp_min?<span className="px-4">{props.temp_min}&deg;C</span>:null}
            {props.temp_max?<span className="px-4">{props.temp_max}&deg;C</span>:null}
            
            <h4 className="py-3">{props.description}</h4>
        </div>
        </div>
    )
}

export default Weather