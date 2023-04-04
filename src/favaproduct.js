import React from "react";

function Item (){
    let url1 = "./pr_images/heart1.png";
    let url2 = "./pr_images/heart2.png";

    const [product, setProduct] = React.useState({
        img: "./pr_images/heart1.png",
        title: "Leather boots",
        description: "Comfortable yellow boots.",
        isFav: false
    })

    let url = product.isFav ? url2 : url1;

    function toggle(){
        setProduct(prevProduct => ({
                ...prevProduct, 
                isFav: !product.isFav
            }))
    }
    return(
        <div className="card">
            <div>
                <img src="./logo512.png" className="image"></img>
                <img src={url} className="icon" onClick={toggle}></img>
            </div>
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

function Products (){

    return(
        <div className="products">
            <Item />
        </div>
    )
}

export default Products;