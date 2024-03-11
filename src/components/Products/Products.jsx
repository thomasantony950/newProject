import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Catergory from "../Catergory";

export default function Products() {
    const [productList, setProductList] = useState([]);
    const [category, setCategory] = useState([]);
    // useEffect(() => {
    //     axios.get("https://fakestoreapi.com/products").then((data) => {
    //         console.log(data);
    //         setProductList(data.data);
    //     });
    // }, []);
    // console.log("productList", productList);

    const productsByCategory = (category) => {
        const filtered = productList.filter(product => product.category.toLowerCase() === category.toLowerCase());
        setCategory(filtered);
    };

    useEffect(() => {
        (async () => {
            let result = await axios.get("https://fakestoreapi.com/products");
            setProductList(result.data);
        })()

    }, []);
    console.log("productList", productList);


    const handleChange = async () => {
        try {
            let result = await axios.get("https://fakestoreapi.com/products");
            setProductList(result.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                setProductList(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProductList(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <Catergory productCategory={productsByCategory} />
            {category.length > 0 ? (
                category.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} style={{ width: "20%", height: "20%" }} />
                        <p>${item.price}</p>
                    </div>
                ))
            ) : (
                ""
            )}
        </div>
    )
}


