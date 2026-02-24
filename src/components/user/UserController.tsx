import React, { useEffect, useRef, useState } from "react";
import { User } from "../../types";
import { Box, Grid } from "@mui/material";
import "./UserController.css";

const UserController = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [users, setUsers] = useState<User[]>([]);

    const [showColors, setShowColors] = useState<boolean>(true);
    const [filterByCountry, setFilterByCountry] = useState<boolean>(false);

    const originalUsers = useRef([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(
            "https://randomuser.me/api/?results=10&seed=ecsa&page=" +
                currentPage
        )
            .then((res) => {
                if (!res.ok) throw Error("Ha habido un error");
                return res.json();
            })
            .then((res) => {
                setUsers(users.concat(res.results));
                originalUsers.current = originalUsers.current.concat(
                    res.results
                );
            })
            .catch((err) => {
                setError(err);
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [currentPage]);

    if (error) return <>{error}</>;
    if (loading) return <>Cargando...</>;

    const filteredByCountry = filterByCountry
        ? users.toSorted((a, b) =>
              a.location.country.localeCompare(b.location.country)
          )
        : users;

    const handleDelete = (email: string) => {
        const newUsers = users.filter((user) => user.email !== email);
        setUsers(newUsers);
    };

    const handleRestore = () => setUsers(originalUsers.current);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box display={"flex"} justifyContent={"center"}>
                        <button
                            className="btn"
                            onClick={() => {
                                setShowColors((prevState) => !prevState);
                            }}
                        >
                            Colorear filas
                        </button>
                        <button
                            className="btn"
                            onClick={() => {
                                setFilterByCountry((prevState) => !prevState);
                            }}
                        >
                            {!filterByCountry
                                ? "Ordenar por país"
                                : "Desordenar por país"}
                        </button>
                        <button className="btn" onClick={handleRestore}>
                            Restaurar usuarios borrados
                        </button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <table width="1200px">
                            <thead>
                                <tr>
                                    <th>Foto</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>País</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody
                                className={
                                    showColors ? "table--showColors" : ""
                                }
                            >
                                {filteredByCountry.map((user) => (
                                    <tr key={user.login.uuid}>
                                        <td>
                                            <img src={user.picture.thumbnail} />
                                        </td>
                                        <td>{user.name.first}</td>
                                        <td>{user.name.last}</td>
                                        <td>{user.location.country}</td>
                                        <td>
                                            <button
                                                className="btn"
                                                onClick={() => {
                                                    handleDelete(user.email);
                                                }}
                                            >
                                                Borrar
                                            </button>
                                            <button
                                                className="btn"
                                                onClick={() => {}}
                                            >
                                                Editar nombre
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <button
                            className="btn"
                            onClick={() => {
                                setCurrentPage((prevState) => prevState + 1);
                            }}
                        >
                            Cargar más...
                        </button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default UserController;
