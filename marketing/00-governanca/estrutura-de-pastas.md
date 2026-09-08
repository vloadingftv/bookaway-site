# Estrutura de pastas

Regra geral: **o que é de uma marca vive na marca; o que serve às três vive em `02-compartilhado/`.**

```
marketing/
├── 00-governanca/          Como o time opera
├── 01-marcas/
│   └── <marca>/
│       ├── brand-brief.md          Documento-raiz da marca
│       ├── icp-e-personas.md       Para quem falamos
│       ├── funil-e-jornada.md      Etapas, gargalos, conteúdo por etapa
│       ├── canais.md               Onde estamos e com que peso
│       ├── kpis.md                 O que medimos e as metas
│       ├── compliance.md           Limites regulatórios da comunicação
│       ├── calendario/             Um arquivo por trimestre (2026-Q4.md)
│       ├── campanhas/              Um arquivo por campanha
│       ├── conteudo/               Backlog de pautas e biblioteca editorial
│       └── ativos/                 Onde ficam logos, fontes, fotos (links)
├── 02-compartilhado/
│   ├── templates/          Modelos para copiar ao iniciar algo novo
│   ├── playbooks/          Como fazemos cada canal
│   └── biblioteca/         Glossário e fontes de dados
├── 03-planejamento/        OKRs, calendário master, orçamento, roadmap
└── 04-relatorios/          Resultados por mês e trimestre
```

## Onde colocar o quê — casos de dúvida

| Situação | Vai para |
|---|---|
| Nova campanha de uma marca | `01-marcas/<marca>/campanhas/AAAA-MM-nome.md` |
| Campanha que envolve duas ou mais marcas | `03-planejamento/` e link nas marcas envolvidas |
| Ideia de post ainda não aprovada | `01-marcas/<marca>/conteudo/backlog-pautas.md` |
| Aprendizado que vale para todas as marcas | `02-compartilhado/playbooks/<canal>.md` |
| Resultado do mês | `04-relatorios/AAAA/AAAA-MM-consolidado.md` |
| Arquivo pesado (vídeo, PSD, raw) | **Não entra no Git.** Deixe o link em `ativos/README.md` |

## O que não entra neste repositório

- Base de leads, export de CRM, planilha com dados pessoais (LGPD).
- Credenciais, tokens de API, acessos de plataforma de mídia.
- Binários grandes: vídeo, RAW, PSD, PDF de alta resolução.
