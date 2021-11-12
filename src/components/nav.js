import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Container } from "./home";

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
`;

const Text = styled.h1`
    display: block;
    color: var(--color-main);
    margin-right: "0";
    font-weight: 900;
    cursor: pointer;
`;

const NavBarText = styled(Text)`
    display: inline-block;
    color: black;
    margin-left: ${(props) => (props.right ? "1.5em" : "")};
    font-weight: 400;
    cursor: pointer;
`;

const TextSmall = styled.p`
    display: inline;
    margin-left: 5px;
    vertical-align: top;
`;

const Modal = styled(Container)`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
`;

const Menu = styled(Container)`
    min-width: 70%;
    height: 100%;
    padding: 1em;
    background: var(--color-main);
    color: white;
`;

const CloseModal = styled(Container)`
    min-width: 30%;
    min-height: 100vh;
    background: #ccc;
    opacity: 0.5;
`;

const Dropdown = styled(Container)`
    position: relative;
    left: 1em;
`;

const MenuItem = styled(Container)`
    margin: 1em 0;
`;

const BoxContainer = styled(Container)`
    position: absolute;
    top: 85px;
    right: 20px;
    background: var(--color-main);
    color: white;
    border-radius: 8px;
`;

const BoxItem = styled(Container)`
    padding: 1em 2em 1em 1em;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
        background: #008000;
    }
`;

const Box = ({ setIsBoxOpen }) => {
    const history = useHistory();

    const handleBarClick = () => {
        setIsBoxOpen(false);
        history.push("/bar-charts");
    };

    const handlePieClick = () => {
        setIsBoxOpen(false);
        history.push("/pie-charts");
    };

    return (
        <BoxContainer onMouseLeave={() => setIsBoxOpen(false)}>
            <BoxItem onClick={handleBarClick}>
                <svg
                    style={{
                        display: "inline",
                        width: "16px",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                </svg>
                <TextSmall>Bar Chart</TextSmall>
            </BoxItem>
            <BoxItem onClick={handlePieClick}>
                <svg
                    style={{
                        display: "inline",
                        width: "16px",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    ></path>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    ></path>
                </svg>
                <TextSmall>Pie Chart</TextSmall>
            </BoxItem>
        </BoxContainer>
    );
};

const ChartDropdown = ({ setIsModalOpen }) => {
    const history = useHistory();

    const handleBarClick = () => {
        setIsModalOpen(false);
        history.push("/bar-charts");
    };

    const handlePieClick = () => {
        setIsModalOpen(false);
        history.push("/pie-charts");
    };

    return (
        <Dropdown>
            <MenuItem onClick={handleBarClick}>
                <svg
                    style={{
                        display: "inline",
                        width: "16px",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                </svg>
                <TextSmall>Bar Chart</TextSmall>
            </MenuItem>
            <MenuItem onClick={handlePieClick}>
                <svg
                    style={{
                        display: "inline",
                        width: "16px",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    ></path>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    ></path>
                </svg>
                <TextSmall>Pie Chart</TextSmall>
            </MenuItem>
        </Dropdown>
    );
};

const NavModal = ({ setIsModalOpen }) => {
    const [dropdown, setDropdown] = useState(false);
    const history = useHistory();

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const handleHomeClick = () => {
        setIsModalOpen(false);
        history.push("/");
    };

    return (
        <Modal>
            <CloseModal onClick={() => setIsModalOpen(false)} />
            <Menu>
                <MenuItem>
                    <svg
                        style={{
                            display: "inline",
                            width: "20px",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        ></path>
                    </svg>
                    <TextSmall onClick={handleHomeClick}>Home</TextSmall>
                </MenuItem>

                <MenuItem>
                    <svg
                        style={{ display: "inline", width: "20px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        ></path>
                    </svg>
                    <TextSmall onClick={toggleDropdown}>Charts</TextSmall>
                </MenuItem>
                {dropdown && <ChartDropdown setIsModalOpen={setIsModalOpen} />}
            </Menu>
        </Modal>
    );
};

function Nav() {
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [width, setWidth] = useState(
        window.innerWidth || document.documentElement.clientWidth
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const history = useHistory();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const openBox = () => {
        setIsBoxOpen(true);
    };

    const checkWidth = () => {
        setWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    useEffect(() => {
        window.onresize = checkWidth;
    });

    return (
        <>
            {width >= 768 ? (
                <>
                    <NavBar>
                        <Text onClick={() => history.push("/")}>skyhigh</Text>
                        <Container>
                            <NavBarText onClick={() => history.push("/")}>
                                Home
                            </NavBarText>
                            <NavBarText right onMouseEnter={openBox}>
                                Charts
                            </NavBarText>
                        </Container>
                    </NavBar>
                    {isBoxOpen && <Box setIsBoxOpen={setIsBoxOpen} />}
                </>
            ) : (
                <NavBar>
                    <Text onClick={() => history.push("/")}>skyhigh</Text>

                    <svg
                        onClick={() => openModal()}
                        style={{ width: "32px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                    {isModalOpen && (
                        <NavModal setIsModalOpen={setIsModalOpen} />
                    )}
                </NavBar>
            )}
        </>
    );
}

export default Nav;
