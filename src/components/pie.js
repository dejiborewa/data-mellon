import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Loader } from "./bar";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const Text = styled.p`
    width: max-content;
    background-color: #444;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    color: white;
    margin-left: auto;
    margin-right: auto;
`;

const Pie = () => {
    const [data, setData] = useState(null);

    const getTotalPerRegion = (data, params, region) => {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            if (data[i]["Region"] === region) {
                total = total + Number(data[i][`${params}`]);
            }
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

            const ctx = document.getElementById("pieChart").getContext("2d");
            const ctx2 = document.getElementById("pieChart2").getContext("2d");
            const ctx3 = document.getElementById("pieChart3").getContext("2d");
            const ctx4 = document.getElementById("pieChart4").getContext("2d");

            new Chart(ctx, {
                type: "pie",
                data: {
                    labels: ["East", "West", "Central", "South"],
                    datasets: [
                        {
                            label: "Total Sales in each year",
                            data: [
                                getTotalPerRegion(data_2014, "Sales", "East"),
                                getTotalPerRegion(data_2014, "Sales", "West"),
                                getTotalPerRegion(
                                    data_2014,
                                    "Sales",
                                    "Central"
                                ),
                                getTotalPerRegion(data_2014, "Sales", "South"),
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
                type: "pie",
                data: {
                    labels: ["East", "West", "Central", "South"],
                    datasets: [
                        {
                            label: "Total Sales in each year",
                            data: [
                                getTotalPerRegion(data_2015, "Sales", "East"),
                                getTotalPerRegion(data_2015, "Sales", "West"),
                                getTotalPerRegion(
                                    data_2015,
                                    "Sales",
                                    "Central"
                                ),
                                getTotalPerRegion(data_2015, "Sales", "South"),
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

            new Chart(ctx3, {
                type: "pie",
                data: {
                    labels: ["East", "West", "Central", "South"],
                    datasets: [
                        {
                            label: "Total Sales in each year",
                            data: [
                                getTotalPerRegion(data_2016, "Sales", "East"),
                                getTotalPerRegion(data_2016, "Sales", "West"),
                                getTotalPerRegion(
                                    data_2016,
                                    "Sales",
                                    "Central"
                                ),
                                getTotalPerRegion(data_2016, "Sales", "South"),
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

            new Chart(ctx4, {
                type: "pie",
                data: {
                    labels: ["East", "West", "Central", "South"],
                    datasets: [
                        {
                            label: "Total Sales in each year",
                            data: [
                                getTotalPerRegion(data_2017, "Sales", "East"),
                                getTotalPerRegion(data_2017, "Sales", "West"),
                                getTotalPerRegion(
                                    data_2017,
                                    "Sales",
                                    "Central"
                                ),
                                getTotalPerRegion(data_2017, "Sales", "South"),
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
        <Container className="chart-container">
            <Container className="chart">
                <Text>Sales per Region in 2014</Text>
                <canvas id="pieChart" />
            </Container>

            <Container className="chart">
                <Text>Sales per Region in 2015</Text>
                <canvas id="pieChart2" />
            </Container>

            <Container className="chart">
                <Text>Sales per Region in 2016</Text>
                <canvas id="pieChart3" />
            </Container>

            <Container className="chart">
                <Text>Sales per Region in 2017</Text>
                <canvas id="pieChart4" />
            </Container>
        </Container>
    );
};

export default Pie;
