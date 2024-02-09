---
title: The correctness metrics
---


The correctness metrics evaluate the quality of high-frequency information introduced by the SR model. Three correctness metrics are implemented in `opensr-test`: improvement, omission, and hallucination. Each metric serves a specific purpose:

**Improvement**: Low values represent a good match between the SR and HR images. The equation for calculating improvement is:

<p style="margin-bottom: 20px;">\(H = d_{im} + d_{om} - 1\)</p>
<p style="margin-bottom: 20px;">\(Improvement = d_{im} + d_{om} \cdot (1 - e^{-\gamma H})\)</p>

<p align="center">
  <img src="../../imgs/images_opensrtest/improvement.png" alt="correctness_metric" width="100%">
</p>

<p>Where:</p>
				<ul>
						<li>\(d_{im}\) is the distance between the SR and HR images.</li>
						<li>\(d_{om}\) is the distance between the SR and LR images.</li>
				</ul>

**Omission**: Low values are related to the inability to represent the actual high-frequency information from the landscape and keep similar to the LR image. The equation for calculating improvement is:

<p style="margin-bottom: 20px;">\(H = d_{im} + d_{om} - 1\)</p>
<p style="margin-bottom: 20px;">\(Omission = d_{om} + d_{im} \cdot (1 - e^{-\gamma H})\)</p>

<p align="center">
  <img src="../imgs/images_opensrtest/omission.png" alt="correctness_metric" width="100%">
</p>

**Hallucination**: Low values shows the areas where the SR model has introduced high-frequency information that is not present in the HR image. The equation for calculating hallucination is:

<p style="margin-bottom: 15px; margin-top: 15px;">\(Hallucination = e^{-\gamma \cdot d_{om} \cdot
										d_{im}}\)</p>

<p align="center">
  <img src="../imgs/images_opensrtest/hallucination.png" alt="correctness_metric" width="100%">
</p>
