import React, { useState, useEffect } from "react";
import { Container, Loader } from "./bar";
import Nav from "./nav";
import { Text } from "./pie";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const TimeSeries = () => {
    const [data, setData] = useState(null);

    const getMonthlyProfits = (data, month, params) => {
        let profits = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i]["Order Date"].substr(0, 2).replace("/", "") === month) {
                profits = profits + Number(data[i][`${params}`]);
            }
        }
        return profits;
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
                type: "line",
                data: {
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    datasets: [
                        {
                            label: "Total Profits in each year",
                            data: [
                                getMonthlyProfits(data_2014, "1", "Profit"),
                                getMonthlyProfits(data_2014, "2", "Profit"),
                                getMonthlyProfits(data_2014, "3", "Profit"),
                                getMonthlyProfits(data_2014, "4", "Profit"),
                                getMonthlyProfits(data_2014, "5", "Profit"),
                                getMonthlyProfits(data_2014, "6", "Profit"),
                                getMonthlyProfits(data_2014, "7", "Profit"),
                                getMonthlyProfits(data_2014, "8", "Profit"),
                                getMonthlyProfits(data_2014, "9", "Profit"),
                                getMonthlyProfits(data_2014, "10", "Profit"),
                                getMonthlyProfits(data_2014, "11", "Profit"),
                                getMonthlyProfits(data_2014, "12", "Profit"),
                            ],
                            backgroundColor: ["rgba(255, 99, 132)"],
                            borderColor: ["rgb(255, 99, 132)"],
                            fill: false,
                            tension: 0.1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                },
            });

            new Chart(ctx2, {
                type: "line",
                data: {
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    datasets: [
                        {
                            label: "Total Profits in each year",
                            data: [
                                getMonthlyProfits(data_2015, "1", "Profit"),
                                getMonthlyProfits(data_2015, "2", "Profit"),
                                getMonthlyProfits(data_2015, "3", "Profit"),
                                getMonthlyProfits(data_2015, "4", "Profit"),
                                getMonthlyProfits(data_2015, "5", "Profit"),
                                getMonthlyProfits(data_2015, "6", "Profit"),
                                getMonthlyProfits(data_2015, "7", "Profit"),
                                getMonthlyProfits(data_2015, "8", "Profit"),
                                getMonthlyProfits(data_2015, "9", "Profit"),
                                getMonthlyProfits(data_2015, "10", "Profit"),
                                getMonthlyProfits(data_2015, "11", "Profit"),
                                getMonthlyProfits(data_2015, "12", "Profit"),
                            ],
                            backgroundColor: ["rgba(255, 159, 64)"],
                            borderColor: ["rgba(255, 159, 64)"],
                            fill: false,
                            tension: 0.1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                },
            });

            new Chart(ctx3, {
                type: "line",
                data: {
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    datasets: [
                        {
                            label: "Total Profits in each year",
                            data: [
                                getMonthlyProfits(data_2016, "1", "Profit"),
                                getMonthlyProfits(data_2016, "2", "Profit"),
                                getMonthlyProfits(data_2016, "3", "Profit"),
                                getMonthlyProfits(data_2016, "4", "Profit"),
                                getMonthlyProfits(data_2016, "5", "Profit"),
                                getMonthlyProfits(data_2016, "6", "Profit"),
                                getMonthlyProfits(data_2016, "7", "Profit"),
                                getMonthlyProfits(data_2016, "8", "Profit"),
                                getMonthlyProfits(data_2016, "9", "Profit"),
                                getMonthlyProfits(data_2016, "10", "Profit"),
                                getMonthlyProfits(data_2016, "11", "Profit"),
                                getMonthlyProfits(data_2016, "12", "Profit"),
                            ],
                            backgroundColor: ["rgba(255, 205, 86)"],
                            borderColor: ["rgba(255, 205, 86)"],
                            fill: false,
                            tension: 0.1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                },
            });

            new Chart(ctx4, {
                type: "line",
                data: {
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    datasets: [
                        {
                            label: "Total Profits in each year",
                            data: [
                                getMonthlyProfits(data_2017, "1", "Profit"),
                                getMonthlyProfits(data_2017, "2", "Profit"),
                                getMonthlyProfits(data_2017, "3", "Profit"),
                                getMonthlyProfits(data_2017, "4", "Profit"),
                                getMonthlyProfits(data_2017, "5", "Profit"),
                                getMonthlyProfits(data_2017, "6", "Profit"),
                                getMonthlyProfits(data_2017, "7", "Profit"),
                                getMonthlyProfits(data_2017, "8", "Profit"),
                                getMonthlyProfits(data_2017, "9", "Profit"),
                                getMonthlyProfits(data_2017, "10", "Profit"),
                                getMonthlyProfits(data_2017, "11", "Profit"),
                                getMonthlyProfits(data_2017, "12", "Profit"),
                            ],
                            backgroundColor: ["rgba(75, 192, 192)"],
                            borderColor: ["rgba(75, 192, 192)"],
                            fill: false,
                            tension: 0.1,
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
                    <Text>Profit time series, 2014</Text>
                    <canvas id="pieChart" />
                </Container>

                <Container className="chart">
                    <Text>Profit time series, 2015</Text>
                    <canvas id="pieChart2" />
                </Container>

                <Container className="chart">
                    <Text>Profit time series, 2016</Text>
                    <canvas id="pieChart3" />
                </Container>

                <Container className="chart">
                    <Text>Profit time series, 2017</Text>
                    <canvas id="pieChart4" />
                </Container>
            </Container>
        </Container>
    );
};

export default TimeSeries;
