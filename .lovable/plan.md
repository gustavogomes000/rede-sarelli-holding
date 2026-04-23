
# Manual Interativo — Holding Sarelli 2026

Uma **apresentação web institucional** (não PPT) que funciona como o "Pitch Deck Vivo" da campanha — bonita, tecnológica, com a estética rosa/dourado/preto da marca Sarelli, fundindo o branding Cimed com a eficiência de João Campos / Tabata Amaral. Será o documento mestre que você apresenta para a Doutora, suplentes, promotores, financiadores e parceiros.

## Estética & Identidade
- **Paleta**: Rosa Sarelli (#E91E63 / pink vibrante), Dourado champagne, Preto profundo, off-white
- **Tipografia**: Headers display bold (estilo Cimed/marca de desejo) + sans serif técnica para dados
- **Tom visual**: Dark mode premium nas seções de dados/holding (sensação "Bloomberg político"), light/rosa nas seções de marca e gente
- **Motivos recorrentes**: linha dourada (do logo), badges "Chama a Doutora", cards com glassmorphism leve, números grandes (estilo Tabata)
- Microinterações suaves, scroll storytelling, gráficos animados

## Arquitetura de Rotas (TanStack Router — uma rota por capítulo)

1. **`/` — Capa / Manifesto**
   Hero com foto da Doutora, slogan "Chama a Doutora", contador regressivo até 4 de outubro, tese central: *Holding política auditável, marca de desejo, eleição vencida no dado*.

2. **`/holding` — A Tese da Holding**
   Por que tratar a campanha como empresa. Os 3 DNAs: Cimed (marca), João Campos (execução), Tabata (dados). Diagrama animado.

3. **`/pilares` — Pilares & Propostas**
   Defesa da Mulher · Defesa da Criança · Famílias Vulneráveis · Segurança · Empreendedorismo. Cada pilar com narrativa, propostas concretas e prova (14 anos Pingo de Gente).

4. **`/organograma` — Organograma da Holding**
   Diagrama interativo C-Level → HQ → Exército de Campo. Ao clicar em cada cargo: missão, KPI, ferramentas, a quem reporta. (CEO Pública, COO Deocleciano, Chief of Staff, CTO/Dados, Marketing, CS Político, Recepção, Gerentes de Expansão, Suplentes, Lideranças de Nicho, Promotores).

5. **`/marca` — Construção de Marca**
   Atributos (Firmeza · Acolhimento · Eficiência), tom de voz, do/don't, biblioteca visual, hashtag #ChamaADoutora, paralelos Cimed/João Campos/Tabata, arquétipo "CEO de Aparecida".

6. **`/roadmap` — Roadmap até 4 de Outubro**
   Timeline horizontal das 5 fases (Awareness → Autoridade → Movimento → Hard Sell → Grande Dia) + planejamento semanal de conteúdo (24 semanas, semanas 1-8 detalhadas com tema, peça, canal, KPI).

7. **`/rede-sarelli` — A Plataforma Rede Sarelli**
   O sistema como produto. Seções por tipo de usuário (mockups/cards):
   - **Promotor (App Campo)** — captura geolocalizada, scripts, metas
   - **Gerente de Expansão** — mapa de calor, ranking de tropa
   - **CS Político** — fila de leads, script de ligação, status de voto
   - **Recepção** — check-in do comitê
   - **CTO/Dados** — auditoria de hashtags, dashboard executivo
   - **COO/CEO** — relatório diário, decisões

8. **`/funil` — Funil de Conversão de Voto**
   Visualização do funil auditável: Prospecção → Qualificação digital (#ChamaADoutora) → Retenção CS → Auditoria. Métricas e SLA por etapa.

9. **`/promotores` — Manual do Promotor**
   Como o promotor usa a Rede no dia a dia: cadastro do lead, abordagem, gamificação, comissionamento por engajamento, hierarquia.

10. **`/governanca` — Governança & Auditoria**
    Reuniões semanais, rituais (daily, weekly, monthly), KPIs por área, transparência financeira, compliance eleitoral.

11. **`/proximos-passos` — O Que Fazer Agora**
    Checklist priorizado até a próxima entrega; CTAs para a Doutora, suplentes e equipe.

## Recursos Transversais
- **Header fixo** com navegação entre capítulos + barra de progresso
- **Modo apresentação** (tecla `P`): cada rota vira slide cheio para reuniões
- **Print-friendly** para gerar PDF do manual quando precisar
- **Dark/Light toggle** (default dark nas seções operacionais)
- Responsivo mobile (Doutora vai abrir no celular)

## Fora do Escopo (próximas iterações)
- Sistema Rede Sarelli funcional (login, banco de dados, app do promotor) — esta entrega é o **manual/apresentação**. Quando aprovar, partimos para o produto real com Lovable Cloud, autenticação por papel, mapa, CRM de leads, integração WhatsApp.
- Conteúdo definitivo dos pilares (vamos preencher com base no site + você revisa)

Após aprovação, construo a v1 com as 11 rotas, identidade visual completa e conteúdo do PDF já incorporado. Iteramos capítulo por capítulo.
