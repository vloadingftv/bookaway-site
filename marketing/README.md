# Marketing — EWZ Capital · Mundo Invest · Ilha Forte

Workspace de marketing das três marcas. Tudo em Markdown, versionado no Git:
histórico de quem mudou o quê, quando e por quê.

> **Preencher antes de usar:** os arquivos marcados com `⚠️ A CONFIRMAR` contêm
> premissas que precisam ser validadas pelo time. Nada aqui é dado oficial ainda.

## Mapa de pastas

| Pasta | O que vive aqui |
|---|---|
| `00-governanca/` | Como o time trabalha: estrutura, nomenclatura, rituais, papéis, ferramentas |
| `01-marcas/` | Uma pasta por marca: posicionamento, ICP, canais, KPIs, campanhas, calendário |
| `02-compartilhado/` | Templates, playbooks por canal e biblioteca comum às três marcas |
| `03-planejamento/` | OKRs, calendário master, orçamento, roadmap trimestral |
| `04-relatorios/` | Relatórios mensais e trimestrais consolidados |

## As três marcas

| Marca | Pasta | Público | Papel na casa |
|---|---|---|---|
| EWZ Capital | [`01-marcas/ewz-capital/`](01-marcas/ewz-capital/) | Investidor qualificado / institucional | Gestão e originação |
| Mundo Invest | [`01-marcas/mundo-invest/`](01-marcas/mundo-invest/) | Investidor pessoa física | Aquisição e educação |
| Ilha Forte | [`01-marcas/ilha-forte/`](01-marcas/ilha-forte/) | ⚠️ A CONFIRMAR | ⚠️ A CONFIRMAR |

## Por onde começar

1. Leia [`00-governanca/estrutura-de-pastas.md`](00-governanca/estrutura-de-pastas.md) — onde cada coisa mora.
2. Preencha o `brand-brief.md` de cada marca. É o documento-raiz: todo o resto deriva dele.
3. Defina os OKRs em [`03-planejamento/okrs.md`](03-planejamento/okrs.md).
4. Abra campanhas copiando [`02-compartilhado/templates/_briefing-campanha.md`](02-compartilhado/templates/_briefing-campanha.md).

## Como contribuir

- Uma branch por trabalho: `mkt/<marca>/<assunto>` (ex.: `mkt/mundo-invest/lancamento-q4`).
- Commits descritivos em português: `docs(mundo-invest): ICP e personas v1`.
- Nada de dado sensível aqui: sem senhas, tokens, planilhas de CRM ou base de leads.
  Este repositório guarda **decisões e planos**, não dados de clientes.
