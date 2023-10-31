# Agente-racional-limpa-quartos
Atividade avaliativa de inteligência artificial
Alunos: Fhellipe Cabral e Matheus Adrik
Curso: Engenharia da Computação - ENGCO201N01 8° - Período

Parte A 

PEAS:

Medida de Desempenho (Performance Measure): O desempenho do agente pode ser medido pela quantidade de energia que ele possui. O objetivo é minimizar o consumo de energia e limpar o ambiente o máximo possível antes que a energia se esgote. Além disso, o desempenho também pode ser medido pela capacidade da bolsa do agente, ou seja, quantos itens de sujeira ele coleta antes de precisar retornar para esvaziá-la.

Ambiente (Environment): O ambiente é um quarto dividido em quadrados de 4x4. Cada quadrado pode conter sujeira ou não. O agente pode se mover para o Norte, Sul, Leste ou Oeste e aspirar a sujeira do quadrado em que se encontra. O ambiente também possui um ponto de partida (localização A) onde o agente retorna para esvaziar sua bolsa.

Atuadores (Actuators): Os atuadores do agente são as ações que ele pode realizar no ambiente. Isso inclui movimentar-se para os lados, aspirar sujeira e retornar para o ponto de partida.

Sensores (Sensors): Os sensores do agente são responsáveis por detectar a sujeira no ambiente, medir a energia restante e monitorar o conteúdo da bolsa. Eles permitem que o agente tome decisões informadas com base nas condições do ambiente.