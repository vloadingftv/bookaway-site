# Marketing — EWZ Group

Workspace de marketing do EWZ Group e das suas três marcas: **EWZ Capital**,
**Mundo Invest** e **Ilha Forte**. Tudo em Markdown, versionado no Git:
histórico de quem mudou o quê, quando e por quê.

> **Preencher antes de usar:** os arquivos marcados com `⚠️ A CONFIRMAR` contêm
> premissas que precisam ser validadas pelo time. Nada aqui é dado oficial ainda.

## Mapa de pastas

| Pasta | O que vive aqui |
|---|---|
| `00-governanca/` | Como o time trabalha: estrutura, nomenclatura, rituais, papéis, ferramentas |
| `01-marcas/` | Uma pasta por marca: posicionamento, ICP, canais, KPIs, campanhas, calendário |
| `02-compartilhado/` | Templates, playbooks por canal e biblioteca comuns ao grupo |
| `03-planejamento/` | OKRs, calendário master, orçamento, roadmap trimestral |
| `04-relatorios/` | Relatórios mensais e trimestrais consolidados do grupo |
| `05-inteligencia/` | Pesquisa de mercado e auditoria de presença digital |

## As marcas do grupo

| Marca | Pasta | Público | Papel no grupo |
|---|---|---|---|
| EWZ Capital | [`01-marcas/ewz-capital/`](01-marcas/ewz-capital/) | Investidor qualificado / institucional | Gestão e originação |
| Mundo Invest | [`01-marcas/mundo-invest/`](01-marcas/mundo-invest/) | Investidor pessoa física | Aquisição e educação |
| Ilha Forte | [`01-marcas/ilha-forte/`](01-marcas/ilha-forte/) | Quem constrói patrimônio via crédito | Alavancagem, consórcio e câmbio |

> A varredura de set/2026 encontrou **oito** ativos de marca no ar, não três —
> EWZ Private, EWZ Câmbio, EWZ Seguros, Guru Investidor e Clube do Henriquecer também.
> Ver [`05-inteligencia/2026-09-mapeamento-digital.md`](05-inteligencia/2026-09-mapeamento-digital.md).

O **EWZ Group** é o guarda-chuva — a casa que detém as três. Ele não é uma quarta
marca com calendário e campanha próprios; é o nível em que se consolidam orçamento,
OKRs, relatório e as regras que valem para todo mundo.

⚠️ Falta decidir **como** o grupo aparece publicamente: as marcas se apresentam como
independentes, endossadas ("EWZ Capital, uma empresa do EWZ Group") ou sob marca única?
Ver [`01-marcas/README.md`](01-marcas/README.md).

## Por onde começar

1. Leia [`00-governanca/estrutura-de-pastas.md`](00-governanca/estrutura-de-pastas.md) — onde cada coisa mora.
2. Preencha o `brand-brief.md` de cada marca. É o documento-raiz: todo o resto deriva dele.
3. Defina os OKRs do grupo em [`03-planejamento/okrs.md`](03-planejamento/okrs.md).
4. Abra campanhas copiando [`02-compartilhado/templates/_briefing-campanha.md`](02-compartilhado/templates/_briefing-campanha.md).

## Como contribuir

- Uma branch por trabalho: `mkt/<marca>/<assunto>` (ex.: `mkt/mundo-invest/lancamento-q4`).
  Trabalho no nível do grupo: `mkt/ewz-group/<assunto>`.
- Commits descritivos em português: `docs(mundo-invest): ICP e personas v1`.
- Nada de dado sensível aqui: sem senhas, tokens, planilhas de CRM ou base de leads.
  Este repositório guarda **decisões e planos**, não dados de clientes.
