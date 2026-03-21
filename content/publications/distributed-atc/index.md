---
title: 'Distributed (ATC) Gradient Descent for High Dimension Sparse Regression'

authors:
  - me
  - Gesualdo Scutari
  - Ying Sun
  - Harsha Honnappa

date: '2023-04-17T00:00:00Z'
doi: '10.1109/TIT.2023.3267742'

publication_types: ['article-journal']

publication: '*IEEE Transactions on Information Theory*'

abstract: We study linear regression from data distributed over a network of agents (with no master node) by means of LASSO estimation, in high-dimension, which allows the ambient dimension to grow faster than the sample size. While there is a vast literature of distributed algorithms applicable to the problem, statistical and computational guarantees of most of them remain unclear in high dimension. This paper provides a first statistical study of the Distributed Gradient Descent (DGD) in the Adapt-Then-Combine (ATC) form. Our theory shows that, under standard notions of restricted strong convexity and smoothness of the loss functions–which hold with high probability for standard data generation models–suitable conditions on the network connectivity and algorithm tuning, DGD-ATC converges globally at a linear rate to an estimate that is within the centralized statistical precision of the model. In the worst-case scenario, the total number of communications to statistical optimality grows logarithmically with the ambient dimension, which improves on the communication complexity of DGD in the Combine-Then-Adapt (CTA) form, scaling linearly with the dimension. This reveals that mixing gradient information among agents, as DGD-ATC does, is critical in high-dimensions to obtain favorable rate scalings.

summary: First statistical study of Distributed Gradient Descent in ATC form for high-dimensional sparse regression.

tags:
  - Distributed Optimization
  - High-Dimension Statistics
  - Linear Convergence
  - Sparse Linear Regression

featured: true

links:
  - type: pdf
    url: https://ieeexplore.ieee.org/abstract/document/10103556
---
