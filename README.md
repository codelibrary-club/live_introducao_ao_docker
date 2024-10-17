# Node.js and Redis Example with Docker

Este projeto demonstra uma aplicação Node.js simples que usa Redis para armazenar o número de visitas a uma página. A aplicação e o banco de dados Redis são conteinerizados usando Docker.

## Pré-requisitos

Antes de começar, você precisa ter o Docker e o Docker Compose instalados em sua máquina. Para instalar o Docker, você pode seguir as instruções no [site oficial do Docker](https://docs.docker.com/get-docker/). Para o Docker Compose, você pode seguir as instruções em [Docker Compose](https://docs.docker.com/compose/install/).

## Estrutura do Projeto

- **Dockerfile**: Define as instruções para criar a imagem do container para a aplicação Node.js.
- **docker-compose.yaml**: Define os serviços, redes e volumes necessários para rodar a aplicação Node.js e o Redis.
- **package.json**: Contém as dependências e scripts necessários para a aplicação Node.js.
- **app.js**: O código fonte da aplicação Node.js.
- **README.md**: Este arquivo.

## Configuração

Para configurar o projeto, você só precisa clonar este repositório e garantir que todas as dependências estejam corretamente configuradas conforme descrito nos pré-requisitos.

## Executando a Aplicação

Para rodar a aplicação, execute o seguinte comando no diretório do projeto:

```bash
docker-compose up --build
```

Isso vai construir as imagens, se necessário, e iniciar os containers. Acesse a aplicação através do navegador em http://localhost:3000 para ver o número de visitas, que é incrementado a cada recarga da página.

Limpeza

Para parar e remover os containers, a rede criada e os volumes, execute o comando:

```
docker-compose down
```

Se desejar remover as imagens também, você pode adicionar a flag --rmi all ao comando anterior:

```
docker-compose down --rmi all
```

## Contribuições

Contribuições são bem-vindas! Para contribuir, por favor, abra um pull request para revisão.

## Licença

Este projeto é distribuído sob a licença Apache. Veja o arquivo LICENSE para mais detalhes.