import { GetServerSideProps } from "next";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { prisma } from "../lib/prisma";

interface Carros {
    carros: {
        carBrand: string;
        carName: string;
        carModel: string;
        carDescription: string;
    }[];
}

interface CarList {
    carBrand: string;
    carName: string;
    carModel: string;
    carDescription: string;
}

const Home = ({ carros }: Carros) => {
    const [uniqueBrands, setUniqueBrands] = useState<any>([]);
    const [carList, setCarList] = useState<Array<CarList>>([
        { carBrand: "", carName: "", carModel: "", carDescription: "" },
    ]);
    useEffect(() => {
        const key = "carBrand";
        setUniqueBrands([...new Map(carros.map((item) => [item[key], item])).values()]);
        setCarList(carros);
    }, []);
    return (
        <MainContainer>
            <Title>
                <h3>Selecciona una marca</h3>
                <DropDownHolder>
                    <select
                        aria-label="marcas"
                        onChange={(e) => {
                            e.preventDefault();
                            console.log(e.target.value);
                            setCarList(carros.filter((c) => c.carBrand === e.target.value));
                        }}
                    >
                        <option value="">Selecciona una marca</option>
                        {uniqueBrands.map((marca: any) => (
                            <option value={marca.carBrand}>{marca.carBrand}</option>
                        ))}
                    </select>
                </DropDownHolder>
            </Title>
            <ListContainer>
                <ListHolder>
                    {carList.map((carro, i) => (
                        <ListItem key={i}>
                            <h3>{carro.carBrand}</h3>
                            <h4>{carro.carName}</h4>
                            <h4>{carro.carModel}</h4>
                            <p>{carro.carDescription}</p>
                        </ListItem>
                    ))}
                </ListHolder>
            </ListContainer>
        </MainContainer>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    const carros = await prisma.carsModels.findMany({
        select: {
            carBrand: true,
            carName: true,
            carModel: true,
            carDescription: true,
        },
    });

    return {
        props: {
            carros,
        },
    };
};

const MainContainer = styled.div`
    max-width: 300px;

    margin: 10px auto;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #141414;

    h3 {
        text-align: center;
        font-size: 16px;
    }
`;

const DropDownHolder = styled.div`
    height: 30px;
    margin: 0 auto 10px;
`;

const ListContainer = styled.div`
    margin-top: 10px;
`;

const ListHolder = styled.ul`
    list-style: none;
`;
const ListItem = styled.li`
    margin-bottom: 20px;
    border-bottom: 1px solid #141414;

    h3 {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 4px;
    }

    h4 {
        font-weight: 500;
        font-size: 16px;
        margin: 0;
    }

    p {
        font-size: 13px;
        font-weight: 500;
    }
`;
