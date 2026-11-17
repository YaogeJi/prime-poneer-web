---
title: 'Computation of Strong Solutions to Stochastic Variational Inequalities'

authors:
  - me
  - Guanghui Lan
  - Jason Zhu

date: '2026-09-04T00:00:00Z'

publication_types: ['article']

publication: '*arXiv preprint arXiv:2609.04188*'

abstract: >-
  This paper studies the computation of strong solutions of monotone variational
  inequalities (VIs) with Lipschitz continuous operators. Building on the idea of
  accumulative regularization (AR), we develop a general framework for VIs, with
  particular emphasis on stochastic settings. Under unbiased stochastic oracles with
  uniformly bounded variance $\sigma^2$, AR computes an approximate solution with
  expected operator residual bounded by $\varepsilon$ using at most
  $\widetilde{\mathcal{O}}(\tfrac{LD_0}{\varepsilon}+\tfrac{\sigma^2}{\varepsilon^2}(\log\tfrac{LD_0}{\varepsilon})^3)$
  stochastic oracle calls, where $L$ is the Lipschitz constant and $D_0$ bounds the
  initial distance to the solution. This substantially improves the existing
  $\mathcal{O}(\sigma^2/\varepsilon^4)$ complexity for residual reduction and matches
  the lower bound up to logarithmic factors. For strongly monotone VIs, measured by the
  distance to the solution, AR achieves the optimal oracle complexity when the strong
  monotonicity modulus is known. By treating the problem as merely monotone, AR still
  achieves nearly optimal complexity without knowledge of this modulus. We further
  introduce a state-dependent noise model applicable to general monotone VIs with
  potentially nonunique solutions, extending state-dependent noise analysis beyond the
  strongly monotone setting. Under this model, AR, when equipped with an enhanced
  stochastic operator extrapolation (SOE) method, achieves nearly optimal complexity
  with the stochastic term depending on the variance at a solution. We apply these
  results to policy evaluation in reinforcement learning, where we show that estimators
  of the projected Bellman operator satisfy our state-dependent noise condition. This
  yields improved rates for fast temporal-difference (FTD) learning, including optimal
  Bellman-residual rates in the long-horizon regime without dependence on the
  deteriorating strong-monotonicity parameter.

summary: >-
  An accumulative regularization framework for computing strong solutions of stochastic
  monotone variational inequalities, improving the residual complexity from
  $\mathcal{O}(\sigma^2/\varepsilon^4)$ to $\widetilde{\mathcal{O}}(\sigma^2/\varepsilon^2)$,
  with a state-dependent noise model that yields improved rates for fast
  temporal-difference learning.

tags:
  - Variational Inequalities
  - Stochastic Optimization
  - Accumulative Regularization
  - Reinforcement Learning
  - Temporal-Difference Learning

featured: true

links:
  - type: pdf
    url: https://arxiv.org/abs/2609.04188
---
