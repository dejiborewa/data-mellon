import React, { useState, useEffect } from "react";
import { Container, Loader } from "./bar";
import { Text } from "./pie";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const StackedBar = () => {
    const [data, setData] = useState(null);

    const getSalesPerCategory = (data, category) => {
        let profits = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i]["Category"] === category) {
                profits = profits + Number(data[i]["Sales"]);
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

            const ctx = document.getElementById("stackedBar").getContext("2d");

            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [2014, 2015, 2016],
                    datasets: [
                        {
                            label: "Office Supplies",
                            data: [
                                getSalesPerCategory(
                                    data_2014,
                                    "Office Supplies"
                                ),
                                getSalesPerCategory(data_2014, "Furniture"),
                                getSalesPerCategory(data_2014, "Technology"),
                            ],
                            backgroundColor: ["rgba(255, 99, 132)"],
                            borderColor: ["rgb(255, 99, 132)"],
                            borderWidth: 1,
                        },

                        {
                            label: "Furniture",
                            data: [
                                getSalesPerCategory(
                                    data_2015,
                                    "Office Supplies"
                                ),
                                getSalesPerCategory(data_2015, "Furniture"),
                                getSalesPerCategory(data_2015, "Technology"),
                            ],
                            backgroundColor: ["rgba(255, 159, 64)"],
                            borderColor: ["rgb(255, 159, 64)"],
                            borderWidth: 1,
                        },

                        {
                            label: "Technology",
                            data: [
                                getSalesPerCategory(
                                    data_2016,
                                    "Office Supplies"
                                ),
                                getSalesPerCategory(data_2016, "Furniture"),
                                getSalesPerCategory(data_2016, "Technology"),
                            ],
                            backgroundColor: ["rgb(75, 192, 192)"],
                            borderColor: ["rgb(75, 192, 192)"],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                        },
                    },
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
                <Text>Sales per Category</Text>
                <canvas id="stackedBar" />
            </Container>
        </Container>
    );
};

export default StackedBar;
