import React from "react";
import Card from 'react-bootstrap/Card';
import Name from "./MesComposants/Name";
import Price from "./MesComposants/Price";
import Description from "./MesComposants/Description";
import Image from "./MesComposants/Image";
import 'bootstrap/dist/css/bootstrap.min.css';
function ProductCard({ monProduit }) {
    return (
        <>
            <Card style={{ width: '18rem', margin: "25px" }}>
                <Image />
                <Card.Body>
                    <Name />
                    <Price />
                    <Description />
                </Card.Body>
            </Card>
        </>
    );
};
export default ProductCard;
