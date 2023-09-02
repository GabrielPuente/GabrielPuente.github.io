function Populate(){
    Career();
    Certificates();
}

class Carrer {
    constructor(title, company, period, description) {
        this.title = title;
        this.company = company;
        this.period = period;
        this.description = description;
    }
}

class Certificate {
    constructor(pathImage, pathCertificate, description) {
        this.pathImage = pathImage;
        this.pathCertificate = pathCertificate;
        this.description = description;
    }
}


function Career(){

    const careerItau = new Carrer("Software Engineer", "Itau", "04/2022 - Atual", "Especialista em back-end, utilizando serviços da AWS como: ECS, Fargate, EC2, S3, Lambda, CloudFront, API Gateway, DynamoDB, RDS e etc. Desenvolvimento em .net legados e modernos. Buscando otimização de custos com desempenho, aplicações tolerantes a falhas.");
    const carrerThunders = new Carrer(".Net Software Engineer", "Thunders", "11/2020 - 04/2022", "Arquitetura em Microservices. NET Core. Arquitetura de mensageria com RabbitMQ. SOLID, CQRS, DDD. Mediator, Command Pattern. Docker, Azure DevOps. Banco de dados: SQL Server e MySQL. ORM: Entity Framework e Dapper.");
    const carrerAmaris = new Carrer(".Net Software Engineer", "Amaris", "08/2020 - 11/2020", "Desenvolvimento e sustentação de sistemas feitos com ASP .Net Core WebApi, ASP.Net Core MVC, Javascript, Entity Framework e SQL Server.");
    const carrerNetza = new Carrer(".Net Developer", "Netza", "02/2020 – 08/2020", "Desenvolvimento e sustentação de sistemas feitos com ASP .Net Core WebApi, ASP.Net Core MVC, Javascript, Entity Framework e SQL Server.");
    const carrerVm2 = new Carrer("Junior .Net Developer", "Agência VM2", "07/2018 - 02/2020", "Desenvolvimento e sustentação de sistemas feitos com ASP.Net Web Forms, ASP.NET MVC, Javascript /Jquery e SQL Server, HTML5 e CSS3.");
    const carrerInforware = new Carrer("Estagio", "Inforware Informática", "03/2018 - 07/2018", "Suporte tecnico para cliente final com a plataforma de software desenvolvida pela empresa para controle de estoque, com foco principal no cliente de varejo.");

    var careerList = [];

    careerList.push(careerItau);
    careerList.push(carrerThunders);
    careerList.push(carrerAmaris);
    careerList.push(carrerNetza);
    careerList.push(carrerVm2);
    careerList.push(carrerInforware);

    let html = `<header><h2>Carreira</h2></header>`;
    
    let cont = 0;

    careerList.forEach(carrer => {
        if(cont == 0)
            html += `<div class="row">`;

        html += `<div class="col-4 col-12-mobile">
                    <article class="item card">
                        <header>
                            <h2>${carrer.title}</h2>
                            <hr />
                            <small>${carrer.company} ${carrer.period}</small>
                        </header>
                        <p class="description">
                            ${carrer.description}
                        </p>
                    </article>
                </div>`;

        cont++;
        
        if(cont == 3)
        {
            html += "</div> <br />"
            cont = 0
        }

    });

    html += `</div>
            <br />`;

    document.getElementById("career-content").innerHTML = html;
}

function Certificates(){

    const posGraduation = new Certificate("\images\\certificates\\Pos-graduacao.png", "\images\\certificates\\Pos-graduacao.png", "Experiência gratificante e cheia de aprendizado, passando por conteúdos como microfrontend, microservices, escalabilidade, tolerância a falhas, monitoramento, mensageria, orquestração, etc. Componentes de nuvem nas plataformas Azure e AWS.");
    const graduation = new Certificate("\images\\certificates\\Diploma.jpg", "\images\\certificates\\Diploma.png", "Faculdade de engenharia da computação que comecei em 2014, foi meu primeiro contato com programação. Desde cedo gostei de participar das maratonas de programação e adorava os desafios que eram passados.");
    const softwareArchitect = new Certificate("\images\\certificates\\Arquiteto-de-Software.png", "https://desenvolvedor.io/certificado/62f20438-933f-4e08-9987-9d57b615c041","Abrange 3 cursos: Fundamentos de arquitetura de software, dominando testes de software e molegagem de dominios ricos.");
    const softwareArchitectFundamentals = new Certificate("\images\\certificates\\Fundamentos-de-Arquitetura-de-Software.png", "https://desenvolvedor.io/certificado/c2f2f93d-27a1-4786-9f1e-8fd1b53030af", "OOP, SOLID, Dependency Injection, Clean Code, Design Patterns como: Abstract Factory, Facade, Strategy, Command, Observer, etc. Arquitetura de Software como: 3-Tier Architecture, Onion Architecture, Hexagonal Architecture, Event Sourcing, DDD, etc.");
    const masteringSoftwareTesting = new Certificate("\images\\certificates\\Dominando-os-Testes-de-Software.png", "https://desenvolvedor.io/certificado/a20bde49-1673-4875-bb5a-a2030e3ab28d", "Porque testar, Testes de Unidade, TDD - Test Driven Development, Testes de Integração BDD, Testes Automatizados e Testes de Carga.");
    const richDomainModeling = new Certificate("\images\\certificates\\Modelagem-de-Dominios-Ricos.png", "https://desenvolvedor.io/certificado/9b09dc11-878a-4735-8688-96b3e4febe55", "Oque é Linguagem Ubíqua, Modelagem Estratégica, Estilos e Padrões Arquiteturais, Modelagem Tática, CQRS e Event Sourcing.");
    const NetCoreEnterpriseApplications = new Certificate("\images\\certificates\\ASP.NET-Core-Enterprise-Applications.png", "https://desenvolvedor.io/certificado/3f716c62-5428-40a2-8c20-198620a43b7d", "Construção de API, utilizando autenticação e autorização com JWT e claims, modelagem com DDD, comunicação entre apis com rabbitMQ, utilizando dapper para consultas, mock de Gateway de pagamento, Deploy e Docker.");
    const masteringEntityFramework = new Certificate("\images\\certificates\\Dominando-o-Entity-Framework-Core.png", "https://desenvolvedor.io/certificado/3be19695-23d9-46d1-ad3b-2e3b44fc4c93", "DeepDive, tipos de consultas, modelando dominio, EF Functions,Interceptação,Transações, UDFs (Funções definidas pelo usuário) e Migrations. Apps MultiTenant Padrão Repository & UoW e Diagnostics.");
    const identityServerFundamentals = new Certificate("\images\\certificates\\Fundamentos-de-IdentityServer4.png", "https://desenvolvedor.io/certificado/53536042-69e0-4f9f-a857-34fa475b0068", "Conceito de SSO, JWT e OAuth 2.0. OpenId Connect, e construindo uma aplicação.");
    const introDevops = new Certificate("\images\\certificates\\Introducao-ao-DevOps.png", "https://desenvolvedor.io/certificado/400b8977-5afb-4e1e-9f0c-3dd0bb149640", "Oque é devops, cultura devops, Ci, CD, tipos testes e tipos monitoramento. Conceito de DevSecOps.");
    const introEntityFramework = new Certificate("\images\\certificates\\Introducao-ao-Entity-Framework-Core.png", "https://desenvolvedor.io/certificado/17c37d61-20be-4a58-a220-98161dfe6a2f", "Historia do ORM e preparação do ambiente. Ensinando como usar o localDB e configurção de connections strings.");
    const richDomainModeling2 = new Certificate("\images\\certificates\\Modelando-Dominios-Ricos.png", "https://balta.io/certificados/d992e868-cf8a-40ab-80f6-ca6dcb8be039", "SOLID, OOP, DDD e CQRS para modelar um contexto de pagamentos, e vou te acompanhar na jornada de transformação de domínios anêmicos para domínios ricos.");
    const applicationInsights = new Certificate("\images\\certificates\\Monitorando-Aplicacoes-com-Application-Insights.png", "https://balta.io/certificados/c1c2d111-25e6-4889-968e-7b161d0c7ebf", "Importância do gerenciamento e monitoramento da aplicação, para detectar gargalos e picos de consumo de recursos.");
    const restNetCoreWebApi = new Certificate("\images\\certificates\\REST-com-ASP.NET-Core-WebAPI.png", "https://desenvolvedor.io/certificado/c76da62d-edeb-4d21-92e4-9297b7cfdf0c", "Introdução ao protocolo HTTP, rest vs soap e arquitetura rest. Criado app net6, configurações de rotas, visões sobre DTOs e ViewModels. Padronização de response. Implantação de autenticação com JWT e autorização baseade em claims.");
    const sqlForDev = new Certificate("\images\\certificates\\SQL-para-Desenvolvedores.png", "https://desenvolvedor.io/certificado/1699112c-aedf-47f6-b558-544fe33ed8c9", "Passando por criação de view, procedures e functions. Utilização de PK e FK. Funcoes das clausulas e operadoes, tipos de joins e beckups.");
    const introNetCor = new Certificate("\images\\certificates\\Iniciando-com-ASP.Net-Core.png", "https://desenvolvedor.io/certificado/106797ba-f1c8-4845-ab81-48dd3bc992e7", "Apresenta a linguagem e seu surgimento, tambem ensina o uso do .net cli, bem como preparação de ambiente e gerenciamento de verões.");

    var certificates = [];

    certificates.push(posGraduation);
    certificates.push(graduation);
    certificates.push(softwareArchitect);
    certificates.push(softwareArchitectFundamentals);
    certificates.push(masteringSoftwareTesting);
    certificates.push(richDomainModeling);
    certificates.push(NetCoreEnterpriseApplications);
    certificates.push(masteringEntityFramework);
    certificates.push(identityServerFundamentals);
    certificates.push(introDevops);
    certificates.push(introEntityFramework);
    certificates.push(richDomainModeling2);
    certificates.push(applicationInsights);
    certificates.push(restNetCoreWebApi);
    certificates.push(sqlForDev);
    certificates.push(introNetCor);

    let html = `<header><h2>Certificados</h2></header>`;
    
    let cont = 0;

    certificates.forEach(certificate => {
        if(cont == 0)
            html += `<div class="row">`;

        html += `<div class="col-4 col-12-mobile">
                        <article class="item card">
                            <a href="${certificate.pathCertificate}"
                                target="_blank" class="image fit">
                                <img src="${certificate.pathImage}"/>
                            <p class="description">
                                ${certificate.description}
                            </p>
                        </article>
                    </div>`;

        cont++;
        
        if(cont == 3)
        {
            html += "</div> <br />"
            cont = 0
        }

    });

    html += `</div>
            <br />`;

    document.getElementById("certificates-content").innerHTML = html;
}