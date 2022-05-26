import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { prisma } from "../lib/prisma";
import { signOut, useSession } from "next-auth/react";
import styled from "styled-components";

interface FormData {
    id: string;
    brand: string;
    title: string;
    category: string;
    content: string;
}

interface Carros {
    carros: {
        id: string;
        carBrand: string;
        carName: string;
        carModel: string;
        carDescription: string;
    }[];
}

const AddItem = ({ carros }: Carros) => {
    const [form, setForm] = useState<FormData>({ id: "", brand: "", title: "", category: "", content: "" });

    const { data: session } = useSession();

    console.log("session", session);

    const router = useRouter();

    const refreshData = () => {
        router.replace(router.asPath);
    };

    const create = async (data: FormData) => {
        try {
            fetch("http://localhost:3000/api/anadir", {
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            }).then(() => {
                if (data.id) {
                    deleteCar(data.id);
                    setForm({ id: "", brand: "", title: "", category: "", content: "" });
                    refreshData();
                } else {
                    setForm({ id: "", brand: "", title: "", category: "", content: "" });
                    refreshData();
                }
            });
        } catch (error) {
            console.log("Fail :(");
        }
    };

    const deleteCar = async (id: string) => {
        try {
            fetch(`http://localhost:3000/api/carro/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "DELETE",
            }).then(() => refreshData());
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (data: FormData) => {
        try {
            create(data);
        } catch (error) {
            console.log("Fail :(");
        }
    };

    return (
        <AddContainer>
            {session ? (
                <div>
                    <button onClick={() => signOut()}>Sign out</button>
                    <h1>Añade un carro a la lista!</h1>
                    <FormContainer>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit(form);
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Marca"
                                value={form.brand}
                                onChange={(e) => setForm({ ...form, brand: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Modelo"
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Categoria"
                                value={form.category}
                                onChange={(e) => setForm({ ...form, category: e.target.value })}
                            />
                            <textarea
                                placeholder="Descripcion"
                                value={form.content}
                                onChange={(e) => setForm({ ...form, content: e.target.value })}
                            />

                            <button type="submit">Añadir +</button>
                        </form>
                    </FormContainer>

                    <ListContainer>
                        <ListHolder>
                            {carros.map((carro) => (
                                <ListItem key={carro.id}>
                                    <h3>{carro.carBrand}</h3>
                                    <h4>{carro.carName}</h4>
                                    <h4>{carro.carModel}</h4>
                                    <p>{carro.carDescription}</p>
                                    <button onClick={() => deleteCar(carro.id)}>X</button>
                                    <button
                                        onClick={() =>
                                            setForm({
                                                id: carro.id,
                                                brand: carro.carBrand,
                                                title: carro.carName,
                                                category: carro.carModel,
                                                content: carro.carDescription,
                                            })
                                        }
                                    >
                                        Modificar
                                    </button>
                                </ListItem>
                            ))}
                        </ListHolder>
                    </ListContainer>
                </div>
            ) : (
                <div>
                    <button onClick={() => router.push("api/auth/signin")}>Sign in</button>
                </div>
            )}
        </AddContainer>
    );
};

export default AddItem;

export const getServerSideProps: GetServerSideProps = async () => {
    const carros = await prisma.carsModels.findMany({
        select: {
            id: true,
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

const AddContainer = styled.div`
    max-width: 500px;
    margin: 10px auto;
`;

const FormContainer = styled.div`
    form {
        display: flex;
        flex-direction: column;

        input[type="text"] {
            height: 25px;
            margin-bottom: 8px;
        }

        textarea {
            height: 75px;
            margin-bottom: 8px;
        }

        button {
            width: 80px;
            margin: 0 auto;
        }
    }

    h1 {
        text-align: center;
    }
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
