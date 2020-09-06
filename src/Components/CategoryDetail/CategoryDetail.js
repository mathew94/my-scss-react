import React from 'react';


const CategoryDetail = (props) => {
    const {name, category} = props.product;
    
    return (
        <div>
            <h4>This is your Category Detail</h4>
            <h6>Selected Product : {name} {category}</h6>
        </div>
    );
};

export default CategoryDetail;