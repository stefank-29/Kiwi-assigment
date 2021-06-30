import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { getWords } from '../services/ConvertService';
import { useQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import ClipLoader from 'react-spinners/ClipLoader';

const HomeStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
`;

const HeaderStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 100%;
    .title {
        color: var(--black);
        font-size: 4.5rem;
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        text-align: center;
        margin-bottom: 2rem;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        input {
            width: 17rem;
            padding: 1rem;
            margin-right: 2rem;
            border-radius: 3px;
            border: 1px solid #0080ff;
            outline: none;
            font-size: 1.5rem;
            font-family: 'Roboto', sans-serif;
            color: var(--black);
            font-weight: 700;
            transition: all 0.3s ease-in-out;
            :focus {
                border: transparent;
                box-shadow: inset 0 0 0px 2px #0073e6;
            }
        }
        .upper-form {
            display: flex;
            align-items: center;
        }
        input[type='checkbox'] {
            width: auto;
            margin-right: 1.2rem;
        }
        .filter {
            display: flex;
            align-items: center;
            margin-top: 3.5rem;
            align-self: flex-start;
            font-size: 1.8rem;
            color: var(--black);
        }
        .input-div {
            position: relative;
            .error {
                position: absolute;
                left: 0;
                top: 4.5rem;
                color: #990000;
            }
        }
        .convert-btn {
            padding: 1rem 1.5rem;
            background-color: var(--kiwi);
            color: white;
            border-radius: 5px;
            border: none;
            font-size: 1.5rem;
            font-weight: bold;
            font-family: 'Roboto', sans-serif;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            :hover {
                background-color: #008071;
            }
        }
    }
`;
const WordsStyles = styled.div`
    width: 100%;
    height: 50rem;
    padding: 3rem;
    background-color: whitesmoke;
    box-shadow: 0 0 4px 1px var(--kiwi);
    overflow: auto;
    margin-top: 5rem;
    .scroll {
        position: relative;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 3.8rem;
    }

    .word {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1rem;
        font-family: 'Roboto', sans-serif;
        font-size: 1.8rem;
    }
    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
    }
    .no-results {
        font-size: 2.5rem;
        font-family: 'Roboto', sans-serif;
    }
    @media all and (max-width: 900px) {
        .scroll {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    @media all and (max-width: 650px) {
        .scroll {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media all and (max-width: 450px) {
        height: 45rem;
        .scroll {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

export default function Home() {
    const [number, setNumber] = useState('');
    const [filter, setFilter] = useState(false);
    const [inputError, setInputError] = useState(false);
    const [words, setWords] = useState(null);
    const [limit, setLimit] = useState(100);

    const { isLoading, data, refetch } = useQuery(
        ['getWords', { number: number, filter: filter }],
        getWords,
        {
            refetchOnWindowFocus: false,
            enabled: false,
        }
    );

    async function handleSubmit(e) {
        e.preventDefault();

        if (number == '') {
            setInputError(true);
            return;
        }
        setInputError(false);
        const { data } = await refetch();
        setWords(data);
    }

    function handleCheckbox(e) {
        if (e.target.checked === true) {
            setFilter(true);
        } else {
            setFilter(false);
        }
    }

    function fetchData() {
        setLimit(limit + 100);
    }

    return (
        <HomeStyles>
            <HeaderStyles>
                <h1 className="title">Number to Words</h1>
                <form onSubmit={handleSubmit}>
                    <div className="upper-form">
                        <div className="input-div">
                            <input
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Enter number"
                                type="text"
                                maxLength="14"
                                onInput={(e) =>
                                    (e.target.value = e.target.value.replace(
                                        /[^0-9]/g,
                                        ''
                                    ))
                                }
                            />
                            {inputError && (
                                <span className="error">
                                    Please enter the number
                                </span>
                            )}
                        </div>
                        <button className="convert-btn" type="submit">
                            Convert
                        </button>
                    </div>
                    <div className="filter">
                        <input
                            type="checkbox"
                            id="check"
                            onChange={handleCheckbox}
                        />
                        <label htmlFor="check">Include only real words</label>
                    </div>
                </form>
            </HeaderStyles>
            <WordsStyles id="scrollable">
                {isLoading ? (
                    <div className="loader">
                        <ClipLoader
                            color="rgb(0, 173, 152)"
                            loading={isLoading}
                            size={100}
                        />
                    </div>
                ) : words ? (
                    words?.length !== 0 ? (
                        <InfiniteScroll
                            className="scroll"
                            dataLength={limit}
                            next={fetchData}
                            hasMore={true}
                            scrollableTarget="scrollable"
                        >
                            {words?.slice(0, limit).map((word, index) => (
                                <span key={index} className="word">
                                    {word}
                                </span>
                            ))}
                        </InfiniteScroll>
                    ) : (
                        <div className="loader">
                            <p className="no-results">
                                There are no words for inserted number...
                            </p>
                        </div>
                    )
                ) : (
                    <div className="loader">
                        <p className="no-results">
                            The words will appear here when you convert.
                        </p>
                    </div>
                )}
            </WordsStyles>
        </HomeStyles>
    );
}
