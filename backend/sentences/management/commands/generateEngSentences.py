from django.core.management.base import BaseCommand
from sentences.models import Sentences


class Command(BaseCommand):
    def handle(self, *args, **options):

        sentences = [
            "daily standup meeting",
            "backend developer tasks",
            "frontend development issues",
            "fullstack developer workload",
            "test driven development",
            "continuous integration pipeline",
            "continuous deployment process",
            "create a pull request",
            "resolve merge conflicts",
            "deployment pipeline error",
            "fix staging environment",
            "update production environment",
            "apply a hotfix",
            "switch feature branch",
            "submit a bug report",
            "address technical debt",
            "refactor legacy code",
            "write unit tests",
            "run integration tests",
            "perform end-to-end testing",
            "debugging a complex issue",
            "freeze code for deployment",
            "give standup updates",
            "resolve blocker issues",
            "coordinate with scrum master",
            "implement agile methodology",
            "update velocity chart",
            "review burn-down chart",
            "attend retrospective meeting",
            "plan the next sprint",
            "finalize user story",
            "define acceptance criteria",
            "rollback failed deployment",
            "integrate external APIs",
            "build RESTful services",
            "design microservices architecture",
            "run docker containers",
            "manage Kubernetes cluster",
            "fix server downtime issues",
            "handle database migration",
            "commit to version control",
            "clone git repository",
            "use a feature toggle",
            "perform peer programming session",
            "resolve linting errors",
            "optimize application performance",
            "identify memory leaks",
            "address scalability issues",
            "monitor cloud infrastructure",
            "set up CI/CD pipeline",
            "generate access tokens",
            "fix authorization failure",
            "clean up the codebase",
            "update technical documentation",
            "join the on-call rotation",
            "respond to incidents quickly",
            "enable logging and monitoring",
            "review service-level agreements",
            "ensure data persistence",
            "debug client-side rendering",
            "fix server-side rendering",
            "implement state management",
            "connect webhook integrations",
            "handle asynchronous processes",
            "design event-driven architecture",
            "apply dependency injection",
            "use singleton patterns",
            "update the design system",
            "get UI/UX feedback",
            "deliver minimum viable product",
            "test prototype designs",
            "align with stakeholders",
            "finalize OKRs and KPIs",
            "complete a code sprint",
            "work under deadline pressure",
            "reproduce a tricky bug",
            "set branch protection rules",
            "iterate continuous feedback loop",
            "perform load testing",
            "fix browser compatibility issues",
            "address CORS-related problems",
            "handle data serialization tasks",
            "analyze critical path dependencies",
            "optimize database queries",
            "design system implementation",
            "set up load balancer",
            "monitor application logs",
            "manage API rate limits",
            "handle OAuth authentication",
            "implement caching strategy",
            "build automated test suite",
            "perform security audit",
            "create user authentication flow",
            "debug memory leak in production",
            "improve code coverage",
            "optimize database schema",
            "add custom error handling",
            "setup reverse proxy",
            "refactor database queries",
            "manage API throttling",
            "check code coverage reports",
            "implement two-factor authentication",
            "write integration test for API",
            "use container orchestration",
            "build serverless functions",
            "integrate with third-party services",
            "handle cross-platform compatibility",
            "implement real-time data syncing",
            "create micro-frontends",
            "integrate GraphQL into application",
            "manage user session state",
            "deploy blue-green environment",
            "create a database backup strategy",
            "optimize cloud resource usage",
            "run stress testing",
            "implement feature flagging",
            "build server-side rendering app",
            "write database migration script",
            "create cron jobs for scheduled tasks",
            "set up event sourcing architecture",
            "integrate payment gateway",
            "handle webhooks for event notifications",
            "build a plugin architecture",
            "enable API versioning",
            "create batch jobs for data processing",
            "deploy on cloud platform",
            "optimize API response time",
            "implement server-side caching",
            "write shell scripts for automation",
            "create custom middleware",
            "implement event-driven microservices",
            "perform database optimization",
            "set up continuous testing",
            "integrate with identity provider",
            "implement role-based access control",
            "optimize frontend rendering performance",
            "enable multi-region deployment",
            "manage cloud secrets",
            "build progressive web app",
            "configure database indexes",
            "manage API lifecycle",
            "build analytics dashboard",
            "handle concurrency issues",
            "work with big data frameworks",
            "manage data privacy compliance",
            "build chatbot integrations",
            "use distributed tracing",
            "create fault-tolerant systems",
            "optimize media file delivery",
            "set up server monitoring tools",
            "build RESTful APIs with OAuth",
            "implement elasticsearch",
            "handle SQL injection vulnerabilities",
            "optimize static assets delivery",
            "integrate real-time notifications",
            "create custom analytics tracking",
            "implement JWT-based authentication",
            "deploy app using Kubernetes",
            "manage API documentation",
            "track application performance metrics",
            "configure content delivery network (CDN)",
            "implement data encryption at rest",
            "scale application horizontally",
            "manage application health checks",
            "optimize user experience for mobile",
            "handle data deserialization issues",
            "build reusable components library",
            "ensure GDPR compliance",
            "implement A/B testing for features",
            "optimize load time for web pages",
            "track user behavior analytics",
            "build data pipeline for ETL process",
            "set up application firewall",
            "build fault-tolerant cloud infrastructure",
            "use feature toggles for testing",
            "configure web application firewall",
            "track real-time application performance",
            "deploy microservices to the cloud",
            "optimize response time of API endpoints",
            "manage database replication",
            "automate infrastructure provisioning",
            "implement service mesh architecture",
            "build real-time web applications",
            "integrate third-party libraries",
            "design scalable cloud infrastructure",
            "monitor container health",
            "manage stateful applications",
            "deploy serverless architecture",
            "integrate with messaging queues",
            "manage session consistency",
            "implement multi-factor authentication",
            "optimize CDN performance",
            "track errors with Sentry",
            "setup multi-cloud infrastructure",
            "design high-availability systems",
            "build AI-powered applications",
            "manage container orchestration",
            "develop custom REST APIs",
            "ensure compliance with SOC2",
            "implement rate limiting for APIs",
            "use feature flags for gradual rollout",
            "handle serverless function failures",
            "optimize the deployment pipeline",
            "apply machine learning models",
            "manage network latency issues",
            "configure automatic scaling",
            "perform a vulnerability assessment",
            "build cloud-native applications",
            "use caching for database queries",
            "integrate with external authentication providers",
            "optimize load balancing algorithms",
            "configure DNS for high availability",
            "implement zero-trust security model",
            "track user activity logs",
            "build distributed systems",
            "implement logging and monitoring solutions",
            "perform API load testing",
            "manage API versioning",
            "apply security patches regularly",
            "build data pipelines with Kafka",
            "design distributed databases",
            "monitor API latency",
            "optimize image loading performance",
            "use Kubernetes for application deployment",
            "apply event-driven programming",
            "configure authentication via OAuth2",
            "ensure cloud cost optimization",
        ]

        translated_in_ptbr = [
            "reunião diária",  # daily standup meeting
            "tarefas de desenvolvedor backend",  # backend developer tasks
            "questões de desenvolvimento frontend",  # frontend development issues
            "carga de trabalho de desenvolvedor fullstack",  # fullstack developer workload
            "desenvolvimento orientado a testes",  # test driven development
            "pipeline de integração contínua",  # continuous integration pipeline
            "processo de deployment contínuo",  # continuous deployment process
            "criar uma pull request",  # create a pull request
            "resolver conflitos de merge",  # resolve merge conflicts
            "erro no pipeline de deployment",  # deployment pipeline error
            "corrigir ambiente de staging",  # fix staging environment
            "atualizar ambiente de produção",  # update production environment
            "aplicar um hotfix",  # apply a hotfix
            "alternar branch de funcionalidade",  # switch feature branch
            "enviar um relatório de bug",  # submit a bug report
            "lidar com dívida técnica",  # address technical debt
            "refatorar código legado",  # refactor legacy code
            "escrever testes unitários",  # write unit tests
            "executar testes de integração",  # run integration tests
            "realizar testes end-to-end",  # perform end-to-end testing
            "depuração de um problema complexo",  # debugging a complex issue
            "congelar código para deployment",  # freeze code for deployment
            "dar atualizações no standup",  # give standup updates
            "resolver problemas bloqueadores",  # resolve blocker issues
            "coordenar com o scrum master",  # coordinate with scrum master
            "implementar metodologia ágil",  # implement agile methodology
            "atualizar gráfico de velocidade",  # update velocity chart
            "revisar gráfico de burn-down",  # review burn-down chart
            "participar de reunião retrospectiva",  # attend retrospective meeting
            "planejar o próximo sprint",  # plan the next sprint
            "finalizar história de usuário",  # finalize user story
            "definir critérios de aceitação",  # define acceptance criteria
            "reverter deployment falhado",  # rollback failed deployment
            "integrar APIs externas",  # integrate external APIs
            "construir serviços RESTful",  # build RESTful services
            "desenhar arquitetura de microserviços",  # design microservices architecture
            "executar containers Docker",  # run docker containers
            "gerenciar cluster Kubernetes",  # manage Kubernetes cluster
            "corrigir problemas de downtime do servidor",  # fix server downtime issues
            "lidar com migração de banco de dados",  # handle database migration
            "commitar no controle de versão",  # commit to version control
            "clonar repositório git",  # clone git repository
            "usar um feature toggle",  # use a feature toggle
            "realizar sessão de programação em par",  # perform peer programming session
            "resolver erros de linting",  # resolve linting errors
            "otimizar desempenho de aplicação",  # optimize application performance
            "identificar vazamentos de memória",  # identify memory leaks
            "lidar com problemas de escalabilidade",  # address scalability issues
            "monitorar infraestrutura de nuvem",  # monitor cloud infrastructure
            "configurar pipeline CI/CD",  # set up CI/CD pipeline
            "gerar tokens de acesso",  # generate access tokens
            "corrigir falha de autorização",  # fix authorization failure
            "limpar o código",  # clean up the codebase
            "atualizar documentação técnica",  # update technical documentation
            "entrar na rotação de plantão",  # join the on-call rotation
            "responder rapidamente a incidentes",  # respond to incidents quickly
            "habilitar logging e monitoramento",  # enable logging and monitoring
            "revisar acordos de nível de serviço",  # review service-level agreements
            "garantir persistência de dados",  # ensure data persistence
            "depuração de renderização no cliente",  # debug client-side rendering
            "corrigir renderização no servidor",  # fix server-side rendering
            "implementar gerenciamento de estado",  # implement state management
            "conectar integrações de webhook",  # connect webhook integrations
            "lidar com processos assíncronos",  # handle asynchronous processes
            "desenhar arquitetura orientada a eventos",  # design event-driven architecture
            "aplicar injeção de dependência",  # apply dependency injection
            "usar padrões singleton",  # use singleton patterns
            "atualizar o sistema de design",  # update the design system
            "obter feedback de UI/UX",  # get UI/UX feedback
            "entregar produto mínimo viável",  # deliver minimum viable product
            "testar designs de protótipos",  # test prototype designs
            "alinhar com stakeholders",  # align with stakeholders
            "finalizar OKRs e KPIs",  # finalize OKRs and KPIs
            "completar um sprint de código",  # complete a code sprint
            "trabalhar sob pressão de prazo",  # work under deadline pressure
            "reproduzir um bug complicado",  # reproduce a tricky bug
            "definir regras de proteção de branch",  # set branch protection rules
            "iterar em um loop de feedback contínuo",  # iterate continuous feedback loop
            "realizar testes de carga",  # perform load testing
            "corrigir problemas de compatibilidade de navegador",  # fix browser compatibility issues
            "lidar com problemas relacionados ao CORS",  # address CORS-related problems
            "lidar com tarefas de serialização de dados",  # handle data serialization tasks
            "analisar dependências do caminho crítico",  # analyze critical path dependencies
            "otimizar consultas de banco de dados",  # optimize database queries
            "implementação do sistema de design",  # design system implementation
            "configurar balanceador de carga",  # set up load balancer
            "monitorar logs de aplicação",  # monitor application logs
            "gerenciar limites de taxa da API",  # manage API rate limits
            "lidar com autenticação OAuth",  # handle OAuth authentication
            "implementar estratégia de cache",  # implement caching strategy
            "construir suíte de testes automatizados",  # build automated test suite
            "realizar auditoria de segurança",  # perform security audit
            "criar fluxo de autenticação de usuário",  # create user authentication flow
            "depurar vazamento de memória em produção",  # debug memory leak in production
            "melhorar a cobertura de código",  # improve code coverage
            "otimizar o esquema de banco de dados",  # optimize database schema
            "adicionar tratamento de erro personalizado",  # add custom error handling
            "configurar proxy reverso",  # setup reverse proxy
            "refatorar consultas de banco de dados",  # refactor database queries
            "gerenciar limitação da taxa de API",  # manage API throttling
            "verificar relatórios de cobertura de código",  # check code coverage reports
            "implementar autenticação de dois fatores",  # implement two-factor authentication
            "escrever teste de integração para API",  # write integration test for API
            "usar orquestração de containers",  # use container orchestration
            "construir funções serverless",  # build serverless functions
            "integrar com serviços de terceiros",  # integrate with third-party services
            "lidar com compatibilidade entre plataformas",  # handle cross-platform compatibility
            "implementar sincronização de dados em tempo real",  # implement real-time data syncing
            "criar micro-frontends",  # create micro-frontends
            "integrar GraphQL na aplicação",  # integrate GraphQL into application
            "gerenciar o estado da sessão do usuário",  # manage user session state
            "implantar ambiente blue-green",  # deploy blue-green environment
            "criar estratégia de backup de banco de dados",  # create a database backup strategy
            "otimizar o uso de recursos na nuvem",  # optimize cloud resource usage
            "realizar testes de estresse",  # run stress testing
            "implementar controle de versão de funcionalidades",  # implement feature flagging
            "construir aplicativo de renderização no servidor",  # build server-side rendering app
            "escrever script de migração de banco de dados",  # write database migration script
            "criar jobs cron para tarefas agendadas",  # create cron jobs for scheduled tasks
            "configurar arquitetura de event sourcing",  # set up event sourcing architecture
            "integrar gateway de pagamento",  # integrate payment gateway
            "lidar com webhooks para notificações de eventos",  # handle webhooks for event notifications
            "construir uma arquitetura de plugins",  # build a plugin architecture
            "habilitar versionamento de API",  # enable API versioning
            "criar jobs em batch para processamento de dados",  # create batch jobs for data processing
            "implantar em plataforma de nuvem",  # deploy on cloud platform
            "otimizar tempo de resposta da API",  # optimize API response time
            "implementar cache no lado do servidor",  # implement server-side caching
            "escrever scripts shell para automação",  # write shell scripts for automation
            "criar middleware personalizado",  # create custom middleware
            "implementar microserviços orientados a eventos",  # implement event-driven microservices
            "realizar otimização de banco de dados",  # perform database optimization
            "configurar testes contínuos",  # set up continuous testing
            "integrar com provedor de identidade",  # integrate with identity provider
            "implementar controle de acesso baseado em funções",  # implement role-based access control
            "otimizar o desempenho de renderização no frontend",  # optimize frontend rendering performance
            "habilitar implantação em múltiplas regiões",  # enable multi-region deployment
            "gerenciar segredos na nuvem",  # manage cloud secrets
            "construir aplicativo web progressivo",  # build progressive web app
            "configurar índices de banco de dados",  # configure database indexes
            "gerenciar ciclo de vida da API",  # manage API lifecycle
            "construir dashboard de análise",  # build analytics dashboard
            "lidar com problemas de concorrência",  # handle concurrency issues
            "trabalhar com frameworks de big data",  # work with big data frameworks
            "gerenciar conformidade com a privacidade de dados",  # manage data privacy compliance
            "construir integrações com chatbots",  # build chatbot integrations
            "usar rastreamento distribuído",  # use distributed tracing
            "criar sistemas tolerantes a falhas",  # create fault-tolerant systems
            "otimizar entrega de arquivos de mídia",  # optimize media file delivery
            "configurar ferramentas de monitoramento de servidor",  # set up server monitoring tools
            "construir APIs RESTful com OAuth",  # build RESTful APIs with OAuth
            "implementar elasticsearch",  # implement elasticsearch
            "lidar com vulnerabilidades de injeção SQL",  # handle SQL injection vulnerabilities
            "otimizar entrega de ativos estáticos",  # optimize static assets delivery
            "integrar notificações em tempo real",  # integrate real-time notifications
            "criar rastreamento personalizado de analytics",  # create custom analytics tracking
            "implementar autenticação baseada em JWT",  # implement JWT-based authentication
            "implantar app usando Kubernetes",  # deploy app using Kubernetes
            "gerenciar documentação da API",  # manage API documentation
            "monitorar métricas de desempenho da aplicação",  # track application performance metrics
            "configurar rede de entrega de conteúdo (CDN)",  # configure content delivery network (CDN)
            "implementar criptografia de dados em repouso",  # implement data encryption at rest
            "escalar aplicação horizontalmente",  # scale application horizontally
            "gerenciar verificações de saúde da aplicação",  # manage application health checks
            "otimizar experiência do usuário para dispositivos móveis",  # optimize user experience for mobile
            "lidar com problemas de desserialização de dados",  # handle data deserialization issues
            "construir biblioteca de componentes reutilizáveis",  # build reusable components library
            "garantir conformidade com o GDPR",  # ensure GDPR compliance
            "implementar testes A/B para funcionalidades",  # implement A/B testing for features
            "otimizar tempo de carregamento de páginas web",  # optimize load time for web pages
            "monitorar analytics de comportamento do usuário",  # track user behavior analytics
            "construir pipeline de dados para processo ETL",  # build data pipeline for ETL process
            "configurar firewall de aplicação",  # set up application firewall
            "construir infraestrutura de nuvem tolerante a falhas",  # build fault-tolerant cloud infrastructure
            "usar toggles de funcionalidades para testes",  # use feature toggles for testing
            "configurar firewall de aplicação web",  # configure web application firewall
            "monitorar desempenho em tempo real da aplicação",  # track real-time application performance
            "implantar microserviços na nuvem",  # deploy microservices to the cloud
            "otimizar o tempo de resposta dos endpoints de API",  # optimize response time of API endpoints
            "gerenciar replicação de banco de dados",  # manage database replication
            "automatizar o provisionamento de infraestrutura",  # automate infrastructure provisioning
            "implementar arquitetura de service mesh",  # implement service mesh architecture
            "construir aplicativos web em tempo real",  # build real-time web applications
            "integrar bibliotecas de terceiros",  # integrate third-party libraries
            "desenhar infraestrutura de nuvem escalável",  # design scalable cloud infrastructure
            "monitorar a saúde dos containers",  # monitor container health
            "gerenciar aplicativos com estado",  # manage stateful applications
            "implantar arquitetura serverless",  # deploy serverless architecture
            "integrar com filas de mensagens",  # integrate with messaging queues
            "gerenciar consistência de sessões",  # manage session consistency
            "implementar autenticação multifatorial",  # implement multi-factor authentication
            "otimizar o desempenho do CDN",  # optimize CDN performance
            "monitorar erros com o Sentry",  # track errors with Sentry
            "configurar infraestrutura multi-cloud",  # setup multi-cloud infrastructure
            "desenhar sistemas de alta disponibilidade",  # design high-availability systems
            "construir aplicativos baseados em IA",  # build AI-powered applications
            "gerenciar orquestração de containers",  # manage container orchestration
            "desenvolver APIs REST personalizadas",  # develop custom REST APIs
            "garantir conformidade com SOC2",  # ensure compliance with SOC2
            "implementar limitação de taxa para APIs",  # implement rate limiting for APIs
            "usar flags de funcionalidades para lançamento gradual",  # use feature flags for gradual rollout
            "lidar com falhas de funções serverless",  # handle serverless function failures
            "otimizar o pipeline de deployment",  # optimize the deployment pipeline
            "aplicar modelos de aprendizado de máquina",  # apply machine learning models
            "gerenciar problemas de latência de rede",  # manage network latency issues
            "configurar escalabilidade automática",  # configure automatic scaling
            "realizar avaliação de vulnerabilidades",  # perform a vulnerability assessment
            "construir aplicativos nativos na nuvem",  # build cloud-native applications
            "usar cache para consultas de banco de dados",  # use caching for database queries
            "integrar com provedores externos de autenticação",  # integrate with external authentication providers
            "otimizar algoritmos de balanceamento de carga",  # optimize load balancing algorithms
            "configurar DNS para alta disponibilidade",  # configure DNS for high availability
            "implementar o modelo de segurança de confiança zero",  # implement zero-trust security model
            "monitorar registros de atividade de usuários",  # track user activity logs
            "construir sistemas distribuídos",  # build distributed systems
            "implementar soluções de logging e monitoramento",  # implement logging and monitoring solutions
            "realizar testes de carga de APIs",  # perform API load testing
            "gerenciar versionamento de APIs",  # manage API versioning
            "aplicar patches de segurança regularmente",  # apply security patches regularly
            "construir pipelines de dados com Kafka",  # build data pipelines with Kafka
            "desenhar bancos de dados distribuídos",  # design distributed databases
            "monitorar latência de API",  # monitor API latency
            "otimizar o desempenho de carregamento de imagens",  # optimize image loading performance
            "usar Kubernetes para deployment de aplicativos",  # use Kubernetes for application deployment
            "aplicar programação orientada a eventos",  # apply event-driven programming
            "configurar autenticação via OAuth2",  # configure authentication via OAuth2
            "garantir otimização de custos na nuvem",  # ensure cloud cost optimization
        ]

        for sentence, translation in zip(sentences, translated_in_ptbr):
            Sentences.objects.create(sentence=sentence, translation_ptbr=translation)

        self.stdout.write(self.style.SUCCESS("Sentences generated successfully!"))
