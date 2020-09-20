import React, { useState, useEffect, FormEvent } from 'react';
import api from '../services/api';

import logoImg from '../assets/img/logo.svg';

import {
  Container,
  Logo,
  Title,
  Form,
  Input,
  Button,
  Repositories,
  Box,
  Repository,
  ButtonDelete,
  IconDelete,
  Avatar,
  Info,
  Name,
  Description,
  IconArrowRight,
  Error,
} from '../styles/pages/dashboard';

interface Request {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Request[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Request>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([repository, ...repositories]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro ao buscar por esse repositório');
    }
  }

  function handleRemoveRepository(id: number) {
    const removedRepository = repositories.filter(
      repository => repository.id !== id,
    );
    setRepositories(removedRepository);
  }

  return (
    <Container>
      <Logo src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <Input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o autor/nome do repositório"
        />
        <Button type="submit">Pesquisar</Button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Box>
            <ButtonDelete
              type="button"
              onClick={() => handleRemoveRepository(repository.id)}
            >
              <IconDelete />
            </ButtonDelete>
            <Repository
              key={repository.id}
              to={`/repository/${repository.full_name}`}
            >
              <Avatar
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <Info>
                <Name>{repository.full_name}</Name>
                <Description>{repository.description}</Description>
              </Info>
              <IconArrowRight />
            </Repository>
          </Box>
        ))}
      </Repositories>
    </Container>
  );
};

export default Dashboard;
