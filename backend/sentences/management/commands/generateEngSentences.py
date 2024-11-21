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
        ]

        for sentence, translation in zip(sentences, translated_in_ptbr):
            Sentences.objects.create(sentence=sentence, translation_ptbr=translation)

        self.stdout.write(self.style.SUCCESS("Sentences generated successfully!"))