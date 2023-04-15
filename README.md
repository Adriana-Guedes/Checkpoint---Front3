<h1 align="center">
            <img  align="center" alt="react" height="200" width="200" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
  </h1>           

# <g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji> 
Certified Tech Developer - Front End III : Prática Integradora

#Integrantes
- Adriana Guedes
- Gabrielle Araujo
- Juliana Novais
- Larissa Santos
- Laiane Barbalho
- Washington Conceição



### Tecnologias:

- React;



Exame Final de Frontend III

## Índice
* [Requisitos](#requisitos)
  * [Condições mínimas de aprovação](#condições-mínimas-de-aprovação)
  * [Aspectos que modificam o valor da nota final](#aspectos-que-modificam-o-valor-da-nota-final)
* [Funcionalidades](#funcionalidades)
* [Desenvolvimento](#desenvolvimento)
* [API](#api)
* [Entrega](#entrega)
  * [Formato de Entrega](#formato-de-entrega)


## Requisitos

É essencial clonar este projeto em um repositório para poder trabalhar. Não serão aceitos projetos que tenham sido realizados sem partir deste modelo.

```
# Clone o repositório para o seu computador
git clone https://github.com/DigitalHouseBrasil/CTD-FE3-Checkpoint2-Template

# Entre na pasta do projeto
cd CTD-FE3-Checkpoint2-Template

# Elimine os links do repositório de DH
git remote rm origin

# Adicione seu projeto a sua conta do github, ajuste o link para seu nome de usuário e repositório
git remote add origin https://github.com/<nomedousuario>/<nomedoprojeto>

# Envie o repositório para o github
git push -u origin main
```
### Condições mínimas de aprovação

As seguintes condições são requisitos mínimos necessários para a aprovação final:

* **Cumprir todas as funcionalidades obrigatórias**
* As bibliotecas necessárias para fazer o desenvolvimento já está no package.json
* O projeto deve ser desenvolvido utilizando Javascript com React.JS.
* O projeto deve contar com ao menos 5 testes unitários escritos para a aplicação. Para isso, deve ser feito com Jest e React Testing Library. Será considerado a importância desses testes como em um projeto real.
* Se espera que a página de login, contenha os fluxos de validação necessários (mínimo 2 validações), para um submit correto do formulário.
* Nos casos em que é requirido fazer uma estilização, deverá realizar tendo em vista o tema do contexto global. 

### Aspectos que modificam o valor da nota final

Os seguintes aspetos são extra ao requisito de aprovação mínima que serão tidos em conta para a majoração da nota final, desde que a sua correta implementação:

**Validações**
* Será valorizada a adição de validações de fluxos alternativos ao normal (mais de duas validações) e o correto tratamento de erros em diferentes situações.

**Testing unitário**
* Será avaliado o uso correto dos testes unitários e o aumento do número de testes adicionados (mais de 5 casos de teste).

**Estilos**
* O estilo de outras seções do App será valorizado (fora do estilo obrigatório das rotas baseadas no tema)

**Boas Práticas**
* Atenção especial será dada ao uso de boas práticas, melhorias de desempenho (implementando useMemo) e reutilização de código

## Funcionalidades

Ver [Funcionalidades](docs/funcionalidades.md).
    
## Desenvolvimento

Ver [Desenvolvimento](docs/desenvolvimento.md).

## API

A API que será utilizada será:
```https://dhodonto.ctdprojetos.com.br/```

Rota com a documentação (Swagger) da API para
```https://dhodonto.ctdprojetos.com.br/swagger-ui/index.html```

Rota para buscar os dentistas:
```https://dhodonto.ctdprojetos.com.br/dentista```

Rota para buscar os pacientes:
```https://dhodonto.ctdprojetos.com.br/paciente```

Rota para o login
```https://dhodonto.ctdprojetos.com.br/auth```

Para logar na aplicação, utilize:
* Login: dentistaAdmin
* Senha: admin123

## Entrega

### Formato de Entrega

O envio será aceito enviando o URL do seu repositório clonado e um link do seu projeto na Vercel/Netlify, etc

O link do Google Form para submissão será enviado pelo professor responsável pela comissão.

Boa sorte e sucesso!
