import React from 'react';
import { MenuItem, Menu } from 'semantic-ui-react';
import { useNavigate } from 'react-router';

export default function Header({productCategory}){
    const navigate = useNavigate();

    const handleItemClick = (category) => {
        productCategory(category);
        navigate("/product");
    }
    
    return(<div>
         <Menu>
            <MenuItem
            name='mens'
            // active={activeItem === 'product'}
            onClick={handleItemClick("men")}
            >
            Mens
            </MenuItem>
            <MenuItem
            name='womens'
            // active={activeItem === 'product'}
            onClick={handleItemClick("women")}
            >
            Womens
            </MenuItem>
            <MenuItem
            name='jewellary'
            // active={activeItem === 'product'}
            onClick={handleItemClick("jewellary")}
            >
            Jewellary
            </MenuItem>
        </Menu>
    </div>)
}