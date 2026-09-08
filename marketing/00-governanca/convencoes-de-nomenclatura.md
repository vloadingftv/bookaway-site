# Convenções de nomenclatura

## Arquivos e pastas

- Sempre minúsculo, sem acento, palavras separadas por hífen: `plano-de-lancamento.md`.
- Documento datado começa pela data ISO: `2026-10-black-friday.md` — ordena sozinho.
- Template começa com underline para ficar no topo: `_template-campanha.md`.

## Campanhas

`AAAA-MM-<marca>-<nome-curto>`

Exemplos: `2026-10-mundo-invest-renda-fixa`, `2026-11-ewz-carta-trimestral`.

## UTMs

Padrão único para as três marcas — sem isso o relatório não fecha.

```
utm_source   = plataforma          google | meta | linkedin | youtube | email | whatsapp
utm_medium   = tipo de mídia       cpc | paid_social | organic_social | email | referral
utm_campaign = AAAA-MM-marca-nome  2026-10-mundo-invest-renda-fixa
utm_content  = variação criativa   video-15s-a | carrossel-b
utm_term     = palavra-chave       (só em search)
```

Tudo minúsculo, sem acento, separado por hífen dentro do campo e por underline entre conceitos.

## Criativos

`<marca>_<campanha>_<formato>_<variacao>_<versao>`

Exemplo: `mundoinvest_2026-10-renda-fixa_stories-9x16_a_v2.mp4`

## Branches do Git

`mkt/<marca>/<assunto>` — ex.: `mkt/ewz-capital/carta-q4`.
Assunto que cruza marcas: `mkt/geral/<assunto>`.

## Commits

`<tipo>(<escopo>): <descrição>` — tipos: `docs`, `feat`, `fix`, `chore`.

Exemplo: `docs(ilha-forte): calendário editorial Q4 2026`.
