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

    &.backgroundText {
        padding-right: 5em;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin: 0;
    }

    @media (min-width: 768px) {
        &.charts {
            display: flex;
        }

        &.backgroundText {
            padding-right: 10em;
        }
    }
`;

const Header = styled.h1`
    font-size: 40px;
    margin-bottom: .3em;

    @media (min-width: 768px) {
        font-size: 50px;
    }
`;

const Button = styled.button`
    background: var(--color-main);
    color: white;
    outline: none;
    border: none;
    padding: 0.7em;
    margin-right: 5px;
    border-radius: 5px;
    font-family: inherit;
    cursor: pointer;

    &:hover {
        background: #008000;
    }

    @media (min-width: 768px) {
        padding: 0.7em 1.2em;
    }
`;

const Text = styled.p`
    margin-top: 0;
    font-size: 16px;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

const Home = () => {
    const history = useHistory();

    return (
        <>
            <Section className="top">
                <Container className="backgroundText">
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
