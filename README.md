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

## Acessando o Container do App via Bash

Para entrar no container do app e interagir com os arquivos ou executar comandos diretamente dentro do ambiente do container, use o seguinte comando:

```
docker exec -it app bash
```

Esse comando realiza o seguinte:

	•	docker exec: Executa um comando em um container em execução.
	•	-it: Combinação de -i e -t para interação interativa e alocação de um terminal tty, respectivamente.
	•	app: Nome do serviço definido no seu docker-compose.yaml que corresponde ao container do app.
	•	sh: O comando que você quer executar dentro do container, neste caso, iniciar o shell.

Depois de executar este comando, você estará dentro do container e poderá navegar pelos diretórios, visualizar arquivos, editar configurações ou executar comandos de desenvolvimento.

Para sair do bash, digite `exit`.

## Limpeza

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