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
        display: flex;
    }
`;

const Header = styled.h1`
    font-size: 28px;
`;

const Button = styled.button`
    background: var(--color-main);
    color: white;
    outline: none;
    border: none;
    padding: 0.7em 1.3em;
    margin-right: 5px;
    border-radius: 5px;
    font-family: inherit;
    cursor: pointer;

    &:hover {
        background: #008000;
    }
`;

const Text = styled.p``;

const Home = () => {
    const history = useHistory();

    return (
        <>
            <Section className="top">
                <Container>
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
                    </Container>
                </Fade>
            </Section>
        </>
    );
};

export default Home;
