---
sidebar_position: 3
---

# Machine learning development lifecycle (MLDLC)

Building an ML product is not only picking **supervised vs unsupervised**—teams repeat a broader **lifecycle**: clarify the business problem, prepare data, train models, ship them, and improve them as reality changes. That workflow is often abbreviated **MLDLC** (machine learning development lifecycle).

This page walks through the stages shown in the flowchart below.

---

## Lifecycle diagram

![Machine learning development lifecycle (MLDLC)](/assets/mldlc_flowchart.svg)

---

## Stages (in order)

Each box matches the numbered stages in the diagram.

1. **Frame the problem** — Decide what “success” means before touching models: the decision the system will support, constraints (**budget**, timeline, risk), who owns the work (**team** / stakeholders), and **metrics** that align with the business (not only raw accuracy). A crisp problem statement prevents building the right model for the wrong question.

2. **Gather data** — Collect raw material from **APIs**, **scraping** (where legal and ethical), **surveys**, **databases**, logs, or partners. Document provenance, licenses, and privacy expectations; garbage or biased data here propagates everywhere downstream.

3. **Data preprocessing** — Turn messy inputs into something models can use: **clean** errors and outliers, **handle missing values** (impute, drop, or flag), **encode** categories and normalize scales. This stage is where many real-world projects spend a large fraction of effort.

4. **Exploratory data analysis (EDA)** — Use plots and summaries to see **patterns**, **correlations**, class balance, drift, and data-quality issues. EDA informs preprocessing fixes, feature ideas, and whether the problem is feasible with available labels.

5. **Feature engineering and selection** — **Create** derived signals (ratios, counts over windows, domain-specific transforms), **transform** them consistently, and **select** a subset that helps generalization and keeps latency and maintenance manageable. Good features often beat a fancier algorithm on mediocre inputs.

6. **Model training and evaluation** — **Train** candidate models, **tune hyperparameters**, and **compare** them with rigorous evaluation (held-out sets, cross-validation, business-aligned metrics). Watch for leakage, overfitting on small sets, and fairness implications before declaring a “winner.”

7. **Deployment and beta testing** — Put the model where users or systems can reach it (**cloud**, edge, batch pipelines), monitor basics from day one, and run **beta** or shadow deployments to gather **user feedback** and catch failures cheaper than a full launch.

8. **Optimize and retrain** — In production, focus shifts to **reliability**: scaling, **load balancing**, monitoring, **backups**, and versioning. Data and behavior drift mean **model retraining** or replacement on a schedule or when metrics degrade—production ML is ongoing operations, not a one-time train step.

---

## Continuous improvement

The dashed side arrow labeled **continuous improvement** is deliberate: feedback from deployment (errors, drift, new requirements) often sends you **back** to earlier stages—maybe reframing the problem, refreshing data, revisiting features, or replacing the model—not only tweaking weights at the end.

---

## Color legend (in the diagram)

The footer maps colors to rough **concerns**:

| Theme | Focus |
| --- | --- |
| **Business** | Problem framing; tying ML to goals and metrics |
| **Data** | Gathering, cleaning, exploring raw inputs |
| **Features** | Engineering and selecting model inputs |
| **Modelling** | Training, tuning, evaluating algorithms |
| **Production** | Shipping, testing with users, operating and retraining |

---

## Related

- Learning paradigms (supervised, unsupervised, etc.) live in [`ML-Types.md`](ML-Types.md).
- Diagram source: `ml-notes/static/assets/mldlc_flowchart.svg` (URL `/assets/mldlc_flowchart.svg`).
