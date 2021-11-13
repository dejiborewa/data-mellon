import React from "react";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const Section = styled.section`
    &.top {
        height: 70%;
    }
`;

export const Container = styled.div`
    &.charts {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
    }

    @media (min-width: 768px) {
        &.charts {
            display: flex;
        }
    }
`;

const Header = styled.h1`
    font-size: 40px;
`;

const Button = styled.button`
    background: var(--color-main);
    color: white;
    outline: none;
    border: none;
    padding: 0.7em 1.2em;
    margin-right: 5px;
    border-radius: 5px;
    font-family: inherit;
    cursor: pointer;

    &:hover {
        background: #008000;
    }
`;

const Text = styled.p`
    font-size: 24px;
`;

const Home = () => {
    const history = useHistory();

    return (
        <>
            <Section className="top">
                <Container className="top-text">
                    <Header>Welcome to SkyHigh Marketing</Header>
                    <Text>Visualizate our data with the charts below</Text>
                </Container>
            </Section>
            <Section className="bottom">
                <Fade top>
                    <Container className="charts">
                        <Button onClick={() => history.push("/bar-charts")}>
                            Bar Charts
                        </Button>

                        <Button onClick={() => history.push("/pie-charts")}>
                            Pie Charts
                        </Button>

                        <Button onClick={() => history.push("/time-series")}>
                            Time Series
                        </Button>

                        <Button onClick={() => history.push("/stacked-bar")}>
                            Stacked Bars
                        </Button>

                        <Button onClick={() => history.push("/tables")}>
                            Tables
                        </Button>
                    </Container>
                </Fade>
            </Section>
        </>
    );
};

export default Home;
