import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../services/api';

import logoImg from '../assets/img/logo.svg';

import {
  Container,
  Header,
  Logo,
  Back,
  IconArrowLeft,
  RepositoryInfo,
  RepositoryInfoHeader,
  Avatar,
  Info,
  Name,
  Description,
  Status,
  List,
  ListTitle,
  ListSubtitle,
  Issues,
  IssuesContent,
  GitIssues,
  IssuesTitle,
  IssuesDescription,
  IconArrowRight,
} from '../styles/pages/repository';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  id: number;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });

    // async function loadData(): Promise<void> {
    //   const [res_repository, res_issues] = await Promise.all([
    //     api.get(`repos/${params.repository}`),
    //     api.get(`repos/${params.repository}/issues`),
    //   ]);
    // }

    // loadData();
  }, [params.repository]);

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt={params.repository} />
        <Back to="/">
          <IconArrowLeft />
          Voltar
        </Back>
      </Header>

      {repository ? (
        <RepositoryInfo>
          <RepositoryInfoHeader>
            <Avatar
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <Info>
              <Name>{repository.full_name}</Name>
              <Description>{repository.description}</Description>
            </Info>
          </RepositoryInfoHeader>
          <Status>
            <List>
              <ListTitle>{repository.stargazers_count}</ListTitle>
              <ListSubtitle>Stars</ListSubtitle>
            </List>
            <List>
              <ListTitle>{repository.forks_count}</ListTitle>
              <ListSubtitle>Forks</ListSubtitle>
            </List>
            <List>
              <ListTitle>{repository.open_issues_count}</ListTitle>
              <ListSubtitle>Issues abertas</ListSubtitle>
            </List>
          </Status>
        </RepositoryInfo>
      ) : (
        <p>Carregando...</p>
      )}

      <Issues>
        {issues.map(issue => (
          <GitIssues key={issue.id} href={issue.html_url}>
            <IssuesContent>
              <IssuesTitle>{issue.title}</IssuesTitle>
              <IssuesDescription>{issue.user.login}</IssuesDescription>
            </IssuesContent>

            <IconArrowRight />
          </GitIssues>
        ))}
      </Issues>
    </Container>
  );
};

export default Repository;
