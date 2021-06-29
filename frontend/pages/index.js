import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { getWords } from '../services/ConvertService';

import { useQuery } from 'react-query';

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
        width: 25rem;
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
    background-color: whitesmoke;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 3rem;
    overflow: auto;
    .word {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1rem;
    }
`;

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export default function Home() {
    const [number, setNumber] = useState();
    const [words, setWords] = useState([]);
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
        setWords(data);
    }

    return (
        <HomeStyles>
            <FormStyles onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Enter number"
                    onChange={(e) => setNumber(e.target.value)}
                />
                <button className="convert-btn" type="submit">
                    Convert
                </button>
            </FormStyles>
            <WordsStyles>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    words?.map((word, index) => (
                        <span key={index} className="word">
                            {word}
                        </span>
                    ))
                )}
            </WordsStyles>
        </HomeStyles>
    );
}
