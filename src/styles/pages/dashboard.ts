import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiX } from 'react-icons/fi';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div``;

export const Logo = styled.img``;

export const Title = styled.h1`
  font-size: 3rem;
  color: var(--color-gray-300);
  max-width: 28.12rem;
  line-height: 3.5rem;

  margin-top: 5rem;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 2.5rem;
  max-width: 44.62rem;

  display: flex;

  border: 0.13rem solid var(--color-gray-800);
  border-radius: 0.5rem;

  ${props =>
    props.hasError &&
    css`
      border-color: var(--color-red-500);
    `}
`;

export const Error = styled.span`
  display: block;
  color: var(--color-red-500);
  margin-top: 0.5rem;

  @media (max-width: 500px) {
    font-size: 0.81rem;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 4.37rem;
  padding: 0 1.5rem;
  border: 0;
  border-radius: 0.31rem 0 0 0.31rem;
  color: var(--color-gray-800);
  background: var(--color-gray-200);

  &::placeholder {
    color: var(--color-gray-400);
  }

  &:focus {
    background: var(--color-white-300);
  }
`;

export const Button = styled.button`
  width: 13rem;
  height: 4.37rem;
  background: var(--color-purple-300);
  border: 0;
  border-radius: 0 0.31rem 0.31rem 0;
  color: var(--color-white-300);
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#8257e5')};
  }

  @media (max-width: 500px) {
    width: 8rem;
  }
`;

export const Repositories = styled.div`
  margin-top: 5rem;
  max-width: 44.62rem;
`;

export const Box = styled.div`
  background: var(--color-gray-200);
  border-radius: 0.31rem;
  width: 100%;
  padding: 1.5rem;
  display: block;

  display: flex;
  align-items: center;

  transition: transform 0.2s;

  & + div {
    margin-top: 1rem;
  }

  &:hover {
    background: var(--color-white-300);
    transform: translateX(0.3rem);
  }

  &:focus {
    background: var(--color-white-300);
  }
`;

export const Repository = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;

  text-decoration: none;
`;

export const ButtonDelete = styled.button`
  background: transparent;
  border: 0;
`;

export const IconDelete = styled(FiX)`
  width: 1.25rem;
  height: 1.25rem;
  color: var(--color-gray-500);
  margin-right: 0.93rem;
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const Info = styled.div`
  margin: 0 1rem;
  flex: 1;
`;

export const Name = styled.strong`
  font-size: 1.25rem;
  color: var(--color-gray-600);

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  font-size: 1.12rem;
  color: var(--color-gray-400);
  margin-top: 0.25rem;

  @media (max-width: 500px) {
    font-size: 0.81rem;
  }
`;

export const IconArrowRight = styled(FiChevronRight)`
  width: 1.25rem;
  height: 1.25rem;
  color: var(--color-gray-500);
  margin-left: auto;
`;
