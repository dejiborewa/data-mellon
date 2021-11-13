import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./nav";
import { Container, Loader } from "./bar";
import { Text } from "./pie";

const Table = styled.table`
    width: 100%;
    text-align: start;
    border-spacing: 0;
    border: 1px solid black;
`;

const TableHead = styled.th`
    padding: 1em 0 1em 1em;
    text-align: start;
    border-right: 1px solid black;
`;

const TableRow = styled.tr``;

const TableData = styled.td`
    padding: 1em 0 1em 1em;
    text-align: start;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
`;

const TableContainer = styled(Container)`
    margin-top: 4em;
`;

const Tables = () => {
    const [data, setData] = useState(null);
    const [table_data, setTableData] = useState(null);

    const getTotal = (data, params) => {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total = total + Number(data[i][`${params}`]);
        }
        return total;
    };

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    angular_test: "angular-developer",
                }),
            };
            const response = await fetch(
                "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",
                options
            );
            const data = await response.json();
            setData(data);

            const data_2014 = data.filter(
                (i) => Number(i["Order Date"].substr(5)) === 2014
            );
            const data_2015 = data.filter(
                (i) => Number(i["Order Date"].substr(5)) === 2015
            );
            const data_2016 = data.filter(
                (i) => Number(i["Order Date"].substr(5)) === 2016
            );
            const data_2017 = data.filter(
                (i) => Number(i["Order Date"].substr(5)) === 2017
            );

            setTableData([
                {
                    year: 2014,
                    sales: getTotal(data_2014, "Sales").toFixed(2),
                    profit: getTotal(data_2014, "Profit").toFixed(2),
                },
                {
                    year: 2015,
                    sales: getTotal(data_2015, "Sales").toFixed(2),
                    profit: getTotal(data_2015, "Profit").toFixed(2),
                },
                {
                    year: 2016,
                    sales: getTotal(data_2016, "Sales").toFixed(2),
                    profit: getTotal(data_2016, "Profit").toFixed(2),
                },
                {
                    year: 2017,
                    sales: getTotal(data_2017, "Sales").toFixed(2),
                    profit: getTotal(data_2017, "Profit").toFixed(2),
                },
            ]);
        };

        fetchData().catch((err) => {
            console.log(err);
        });
    }, [data, table_data]);

    if (!data) {
        return <Loader />;
    }

    return (
        <Container className="app-container">
            <Nav />
            <Container className="chart-container">
                <TableContainer>
                    <Text>Sales & Profits in each year</Text>
                    <Table>
                        <colgroup>
                            <col
                                style={{
                                    backgroundColor: "rgba(255, 99, 132)",
                                }}
                            />
                            <col
                                style={{
                                    backgroundColor: "rgba(255, 159, 64)",
                                }}
                            />
                            <col
                                style={{ backgroundColor: "rgb(255, 205, 86)" }}
                            />
                        </colgroup>
                        <TableRow>
                            <TableHead>Year</TableHead>
                            <TableHead sales>Sales</TableHead>
                            <TableHead profit>Profit</TableHead>
                        </TableRow>
                        {table_data?.map((data, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData>{data.year}</TableData>
                                    <TableData>{data.sales}</TableData>
                                    <TableData>{data.profit}</TableData>
                                </TableRow>
                            );
                        })}
                    </Table>
                </TableContainer>
            </Container>
        </Container>
    );
};

export default Tables;
