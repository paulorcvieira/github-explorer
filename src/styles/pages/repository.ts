import styled from 'styled-components';
import { shade } from 'polished';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export const Back = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-gray-400);
  transition: color 0.2s;

  &:hover {
    color: ${shade(0.2, '#A8A8B3')};
  }
`;

export const IconArrowLeft = styled(FiChevronLeft)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
`;

export const RepositoryInfo = styled.section`
  margin-top: 5rem;
`;

export const RepositoryInfoHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;

  @media (max-width: 500px) {
    width: 5rem;
    height: 5rem;
  }
`;

export const Info = styled.div`
  margin-left: 1.5rem;
`;

export const Name = styled.strong`
  font-size: 2.25rem;
  color: var(--color-gray-300);

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p`
  font-size: 1.12rem;
  color: var(--color-gray-400);
  margin-top: 0.25rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Status = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 2.5rem;
`;

export const List = styled.li`
  & + li {
    margin-left: 5rem;
  }
`;

export const ListTitle = styled.strong`
  display: block;
  font-size: 2.25rem;
  color: var(--color-gray-300);

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

export const ListSubtitle = styled.span`
  display: block;
  margin-top: 0.25rem;
  color: var(--color-gray-400);

  @media (max-width: 500px) {
    font-size: 0.81rem;
  }
`;

export const Issues = styled.div`
  margin-top: 5rem;
`;

export const IssuesContent = styled.div`
  margin: 0 1rem;
  flex: 1;
`;

export const GitIssues = styled.a`
  background: var(--color-gray-200);
  border-radius: 0.31rem;
  width: 100%;
  padding: 1.5rem;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;

  transition: transform 0.2s;

  & + a {
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

export const IssuesTitle = styled.strong`
  font-size: 1.25rem;
  color: var(--color-gray-600);

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const IssuesDescription = styled.p`
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
