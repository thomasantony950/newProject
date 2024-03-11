import React from 'react';
import { MenuItem, Menu } from 'semantic-ui-react';
import { useNavigate } from 'react-router';

export default function Header(){
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate("/product");
    }
    
    return(<div>
         <Menu>
            <MenuItem
            name='product'
            // active={activeItem === 'product'}
            onClick={handleItemClick}
            >
            Products
            </MenuItem>
        </Menu>
    </div>)
}