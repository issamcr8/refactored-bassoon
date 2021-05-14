import React from 'react'


function Item(props) {

    return (
        <div className='col-sm-3 m-5'> 
            <div className='card '>
                    <div className='card-header'>

                       <img className='card-group' src={props.img} alt='' />

                    </div>
           
                   <div className='card-body' 
                   style={{backgroundColor: props.Website? 'blue' : 'yellow' }}>
           
                       <h2> {props.FullName}</h2>
                       <p> {props.Professional}</p>
                       <p> {props.Numberphone}</p>
                       <p> {props.Email}</p>
                       <p> {props.Website}</p>
           
                   </div>
            </div>
        </div>
    );

}

export default Item;