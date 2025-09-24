>[!info] Definition: Entropy
>- Entropy is the number of possible arrangements of particles and their energy in a given system.

>[!tip] Key Points
>- **Higher Entropy = More Disorder**: A system with more disorder has more possible arrangements for its particles and energy, and therefore a higher entropy value.
>- **Tendency towards Maximum Entropy:** Systems naturally tend to move towards a state of higher entropy (more disorder).
>- **Standard Entropy ($\mathrm{S^{⦵}}$)**: 
>	- Entropy of **one mole** of a substance under standard conditions.
>	- **Units:** $\mathrm{JK^{-1}mol^{-1}}$

>[!warning] Note
>- Unlike standard enthalpy of formation, the standard entropy of an element in its standard state is ==**not**== zero.
>- All substances have positive entropy values at temperatures above absolute zero ($\mathrm{0 K}$)

## Predicting and Explaining the sign of Entropy change ($\mathrm{\Delta S}$)
The sign of $\mathrm{\Delta S}$ tells us whether the system has become more ordered or more disordered:
- $\mathrm{\Delta S}$ is positive: Entropy has increased (more disorder).
- $\mathrm{\Delta S}$ is negative: Entropy has decreased (more order).


> [!success]- How can the system's entropy (ΔS_system) be negative if disorder always increases?
> This is a crucial point! The statement "disorder always increases" is a simplification of the **Second Law of Thermodynamics**. The full law is more precise:
>
> **For any spontaneous process, the *total entropy of the universe* must increase.**
>
> The "universe" is made of two parts: the chemical reaction (**the system**) and everything else (**the surroundings**).
>
> ### The Key Equation
> ΔS_total = ΔS_system + ΔS_surroundings
>
> For a reaction to be feasible, **ΔS_total > 0**.
>
> ### The Compensation Mechanism
> A system can become more ordered (**ΔS_system is negative**) only if it causes a *larger* increase in the disorder of its surroundings.
>
> How does it do this? By releasing heat!
>
> 1.  **System Becomes Ordered:** The particles in the reaction become more ordered, so **ΔS_system is negative**.
> 2.  **Heat is Released:** The reaction must be **exothermic** (ΔH is negative). This heat flows from the system into the surroundings.
> 3.  **Surroundings Become Disordered:** The heat absorbed by the surroundings increases the kinetic energy and random motion of its particles. This causes a large increase in the entropy of the surroundings, so **ΔS_surroundings is positive**.
>
> As long as the positive `ΔS_surroundings` is greater than the negative `ΔS_system`, the overall `ΔS_total` will be positive, and the reaction can happen.
>
> ---
>
> > [!example] Freezing Water: H₂O(l) → H₂O(s)
> > - **System:** The H₂O molecules become a highly ordered ice crystal. **ΔS_system is negative**.
> > - **Surroundings:** The freezing process releases heat (the latent heat of fusion) into the environment. This increases the disorder of the surroundings. **ΔS_surroundings is positive**.
> > - **Result:** Below 0°C, the increase in the surroundings' entropy is greater than the decrease in the system's entropy, so the water freezes spontaneously.
>
> ---
>
> > [!tip] The Takeaway
> > Think of it like this: A system can 'pay' for becoming more ordered by releasing enough heat (`-ΔH`) to create an even greater amount of disorder in its surroundings.

### (a) During a change in state (and dissolving)
The state of matter is the primary factor affecting entropy.

<figure>
  <img src="https://s3.eu-west-2.amazonaws.com/elements.cognitoedu.org/7e7bffd7-e3ff-47c3-a7e5-359f585f7d10/entropy-physical-states.png" class="custom-img">
  <figcaption></figcaption>
</figure>
- **General Trend:** Entropy increases as you go from solid to liquid to gas.
	- $\mathrm{S(solid)} < \mathrm{S(liquid)} < \mathrm{S(gas)}$

**Entropy change during changes in state:**
- **Melting (Solid $\to$ Liquid):**
	- Particles break free from the fixed, ordered lattice and can move past each other.
	- Disorder increases so **$\mathrm{\Delta S}$ is positive**.
- **Boiling (Liquid $\to$ Gas):**
	- Particles break their intermolecular forces and move randomly and far apart.
	- There is a very large increase in disorder, so **$\mathrm{\Delta S}$ is positive**
- **Dissolving (Solid $\to$ Aqueous):**
	- The ordered crystal lattice of the solid breaks down.
	- The ions or molecules become mobile and spread out in the solvent.
	- Disorder increases, so **$\mathrm{\Delta S}$ is positive**
**Reverse Processes:**
- **Freezing (Liquid $\to$ Solid):**
	- Particles become fixed in an ordered lattice.
	- Disorder decreases, so **$\mathrm{\Delta S}$ is negative**
- **Condensation (Gas $\to$ Liquid):**
	- Particles come closer together with less freedom of movement.
	- Disorder decreases, so **$\mathrm{\Delta S}$ is negative**
- **Crystallisation (Aqueous $\to$ Solid):**
	- Mobile ions form an ordered lattice.
	- Disorder decreases, so **$\mathrm{\Delta S}$ is negative**

### (b) During a temperature change
- **Increasing Temperature:**
	- Particles gain kinetic energy, causing them to move faster (translating, rotating, and vibrating more vigorously)
	- This increases the number of ways energy can be distributed among the particles.
	- Entropy increases, so **$\mathrm{\Delta S}$ is positive**
- **Decreasing Temperature:**
	- Particles lose kinetic energy and move less.
	- Disorder decreases.
	- Entropy decreases, so **$\mathrm{\Delta S}$ is negative**

### (c) During a reaction (Change in gaseous molecules)
- For chemical reactions, the **change in the number of moles of gas** is the most important factor in predicting the sign of $\mathrm{\Delta S}$. 
- Gases have vastly higher entropy than solid or liquids.

- **Rule 1: Moles of gas increase:**
	- If a reaction produces more moles of gas than it consumes, the system become significantly more disordered.
	- **$\mathrm{\Delta S}$ is positive**
	- Example: $\ce{CaCO_{3}_{(s)}->CaO_{(s)} + CO_{2}_{(g)}}$
		- (0 moles of gas $\to$ 1 mole of gas)
- **Rule 2: Moles of gas decrease:**
	- If a reaction consumes more moles of gas than it produces, the system becomes significantly more ordered.
	- **$\mathrm{\Delta S}$ is negative**
	- Example: $\ce{N_{2}_{(g)} + 3H_{2}_{(g)} -> 2NH_{3}_{(g)}}$
		- (4 moles of gas $\to$ 2 moles of gas)
- **Rule 3: Moles of gas stay constant**
	- The entropy change will likely be small.
	- The sign will be harder to predict without the standard entropy values.


## Calculating the standard entropy change of a reaction ($\mathrm{\Delta S^{⦵}}$)
- The standard entropy change of a reaction ($\mathrm{\Delta S^{⦵}}$) can be calculated using the standard entropies ($S^{⦵}$) of the reactants and products.

**The formula for $\mathrm{\Delta S^{⦵}}$ is:**
$$
\large
\begin{align}
\mathrm{\Delta S^{⦵}_{reaction}= \sum{S^{⦵}_{\text{products}}} -\sum{S^{⦵}_{\text{reactants}}}}
\end{align}
$$
**Where:**
- $\sum{S^{⦵}_{\text{products}}}$ is the sum of the standard entropies of all products.
- $\sum{S^{⦵}_{\text{reactants}}}$ is the sum of the standard entropies of all reactants.

**Important:** You must multiply the $S^{⦵}$ value for each substance by its stoichiometric coefficient in the balanced chemical equation.
