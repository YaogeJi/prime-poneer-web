---
title: 'Stochastic Auto-conditioned Fast Gradient Methods with Optimal Rates'

authors:
  - me
  - Guanghui Lan

date: '2026-04-07T00:00:00Z'

publication_types: ['article']

publication: '*arXiv preprint arXiv:2604.06525*'

abstract: "Achieving optimal rates for stochastic composite convex optimization without prior knowledge of problem parameters remains a central challenge. In the deterministic setting, the auto-conditioned fast gradient method has recently been proposed to attain optimal accelerated rates without line-search procedures or prior knowledge of the Lipschitz smoothness constant, providing a natural prototype for parameter-free acceleration. However, extending this approach to the stochastic setting has proven technically challenging and remains open. Existing parameter-free stochastic methods either fail to achieve accelerated rates or rely on restrictive assumptions, such as bounded domains, bounded gradients, prior knowledge of the iteration horizon, or strictly sub-Gaussian noise. To address these limitations, we propose a stochastic variant of the auto-conditioned fast gradient method, referred to as stochastic AC-FGM. The proposed method is fully adaptive to the Lipschitz constant, the iteration horizon, and the noise level, enabling both adaptive stepsize selection and adaptive mini-batch sizing without line-search procedures. Under standard bounded conditional variance assumptions, we show that stochastic AC-FGM achieves the optimal iteration complexity of $\\mathcal{O}(1/\\sqrt{\\epsilon})$ and the optimal sample complexity of $\\mathcal{O}(1/\\epsilon^2)$."

summary: We propose stochastic AC-FGM, a parameter-free accelerated method for stochastic composite convex optimization that is fully adaptive to the Lipschitz constant, iteration horizon, and noise level. Without line-search, bounded domains, or bounded gradients, it achieves optimal iteration complexity $\\mathcal{O}(1/\\sqrt{\\epsilon})$ and sample complexity $\\mathcal{O}(1/\\epsilon^2)$.

tags:
  - Stochastic Optimization
  - Convex Optimization
  - Parameter-Free Optimization
  - Accelerated Gradient Methods
  - Auto-Conditioned

featured: true

links:
  - type: pdf
    url: https://arxiv.org/abs/2604.06525
---
