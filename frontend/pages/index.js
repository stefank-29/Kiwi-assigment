import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { getWords } from '../services/ConvertService';
import { useQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const HomeStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
`;

const FormStyles = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 100%;
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
`;
const WordsStyles = styled.div`
    width: 100%;
    height: 50rem;
    padding: 3rem;
    background-color: whitesmoke;
    box-shadow: 0 0 4px 1px var(--kiwi);
    overflow: auto;

    .scroll {
        position: relative;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 50px;
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
        transform: translate(-50%, -50%);
    }
`;

export default function Home() {
    const [number, setNumber] = useState();
    const [words, setWords] = useState([]);
    const [limit, setLimit] = useState(100);

    const { isLoading, error, data, refetch } = useQuery(
        ['getWords', { number: number }],
        getWords,
        {
            refetchOnWindowFocus: false,
            enabled: false,
        }
    );

    async function handleSubmit(e) {
        e.preventDefault();

        const { data } = await refetch();
        console.log(data);
        setWords(data);
    }

    function fetchData() {
        setLimit(limit + 100);
        console.log('aaaa');
    }

    return (
        <HomeStyles>
            <FormStyles onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter number"
                    type="text"
                    maxLength="14"
                    onInput={(e) =>
                        (e.target.value = e.target.value.replace(/[^0-9]/g, ''))
                    }
                />
                <button className="convert-btn" type="submit">
                    Convert
                </button>
            </FormStyles>
            <WordsStyles id="scrollable">
                {isLoading ? (
                    <div className="loader">
                        <ClipLoader
                            color="rgb(0, 173, 152)"
                            loading={isLoading}
                            size={100}
                        />
                    </div>
                ) : (
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
                )}
            </WordsStyles>
        </HomeStyles>
    );
}
