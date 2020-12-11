# Surf Finance Subgraph

Surf subgraph queries the following events and entities occuring within the Surf's main token and Whirlpool contract:
- transaction data
- token information
- supply information 

The GraphQL schema is currently in rudimentary form and under development. 

## Setup
### Prerequisites

- Global Yarn Packages
    - ganache-cli
    - truffle
    - graph-cli
- Docker

### Subgraph

Clone the balancer subgraph

```
git clone git@github.com:nekineznanec/surf-subgraph.git
```

Update factory address in subgraph.yaml to the one listed as part of the deploy

Install dependencies

```
yarn
```

Generate the Graph code

```
yarn codegen
```

Create local node

```
yarn create:local
```

Deploy locally

```
yarn deploy:local
```

Any updates can be made to this repo and re-running `yarn deploy:local` without needing to re-initialize the environment.