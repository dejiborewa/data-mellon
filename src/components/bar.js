import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "./nav";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const Container = styled.div`
    &.app-container {
        padding: 1em;
    }

    &.loader {
        width: 100%;
        height: 80vh;
    }

    &.chart-container {
        padding: 0 1em;
    }

    &.chart {
        margin-bottom: 2em;
    }

    &.loading {
        width: 100%;
        height: 100%;
        border: 3px solid var(--color-main);
        border-color: var(--color-main) transparent var(--color-main)
            transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }

    @media (min-width: 768px) {
        &.app-container {
            padding: 2em;
        }

        &.chart-container {
            padding: 0 5em;
        }

        &.chart {
            margin-bottom: 5em;
        }
    }

    @media (min-width: 1024px) {
        &.chart-container {
            padding: 0 30em;
        }

        &.chart {
            margin-bottom: 10em;
        }
    }
`;

export const LoaderInner = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 3em;
    height: 3em;
    transform: translate(-50%, -50%);
`;

function Bar() {
    const [data, setData] = useState(null);

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

            const ctx = document.getElementById("barChart").getContext("2d");
            const ctx2 = document.getElementById("barChart2").getContext("2d");

            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [2014, 2015, 2016, 2017],
                    datasets: [
                        {
                            label: "Total Sales in each year",
                            data: [
                                getTotal(data_2014, "Sales"),
                                getTotal(data_2015, "Sales"),
                                getTotal(data_2016, "Sales"),
                                getTotal(data_2017, "Sales"),
                            ],
                            backgroundColor: [
                                "rgba(255, 99, 132)",
                                "rgba(255, 159, 64)",
                                "rgba(255, 205, 86)",
                                "rgba(75, 192, 192)",
                            ],
                            borderColor: [
                                "rgb(255, 99, 132)",
                                "rgb(255, 159, 64)",
                                "rgb(255, 205, 86)",
                                "rgb(75, 192, 192)",
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                },
            });

            new Chart(ctx2, {
                type: "bar",
                data: {
                    labels: [2014, 2015, 2016, 2017],
                    datasets: [
                        {
                            label: "Total Profit in each year",
                            data: [
                                getTotal(data_2014, "Profit"),
                                getTotal(data_2015, "Profit"),
                                getTotal(data_2016, "Profit"),
                                getTotal(data_2017, "Profit"),
                            ],
                            backgroundColor: [
                                "rgba(255, 99, 132)",
                                "rgba(255, 159, 64)",
                                "rgba(255, 205, 86)",
                                "rgba(75, 192, 192)",
                            ],
                            borderColor: [
                                "rgb(255, 99, 132)",
                                "rgb(255, 159, 64)",
                                "rgb(255, 205, 86)",
                                "rgb(75, 192, 192)",
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                },
            });
        };

        fetchData().catch((err) => {
            console.log(err);
        });
    }, [data]);

    if (!data) {
        return <Loader />;
    }

    return (
        <Container className="app-container">
            <Nav />
            <Container className="chart-container">
                <Container className="chart">
                    <canvas id="barChart" />
                </Container>

                <Container className="chart">
                    <canvas id="barChart2" />
                </Container>
            </Container>
        </Container>
    );
}

export const Loader = () => {
    return (
        <Container className="app-container">
            <Nav />
            <Container className="loader">
                <LoaderInner>
                    <Container className="loading"></Container>
                </LoaderInner>
            </Container>
        </Container>
    );
};

export default Bar;
