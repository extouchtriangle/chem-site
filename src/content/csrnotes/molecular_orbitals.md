---
title: "Molecular orbitals"
author: ["Easton"]
date: 2026-07-16
tags: ["csr"]
draft: false
pubDate: 2026-07-16
---

MOs are analogous to atomic orbitals but for molecules


## Introductory example: H_2<sup>+</sup>


### Contributions to the energy of \\(\text{H}\_2^+\\):

-   Electrostatic attraction between nuclei and electron
    -   Causes energy to decrease as internuclear separation decreases
-   Electrostatic repulsion between two nuclei
    -   Makes energy increase as internuclear separation decreases
-   Kinetic energy of electron (associated with motion around nuclei)
    -   As atoms come together, KE initially decreases slightly and then increases sharply
-   Total energy has a minimum at distance called \\(R\_e\\) (this is the bond length)


## Linear Combination of Atomic Orbitals (LCAO)

-   MO = c_A &times; 1s AO on atom A + c_B &times; 1s AO on atom B
-   For H_2<sup>+</sup>, there are two MOs:
    -   &psi;<sub>+</sub> = (1s AO on atom A) + (1s AO on atom B)
    -   &psi;<sub>-</sub> = (1s AO on atom A) - (1s AO on atom B)
-   As atoms approach:
    -   E<sub>+</sub> falls until R = 2.5, after which it increases sharply --- **bonding**
    -   E<sub>-</sub> rises continuously --- **antibonding**
-   Bonding vs Antibonding

    | Bonding                                 | Antibonding                                     |
    |-----------------------------------------|-------------------------------------------------|
    | In-phase overlap                        | Out-of-phase overlap                            |
    | Orbital coefficients have the same sign | Orbital coefficients with different signs       |
    | More electron density between atoms     | Nodal plane/less electron density between atoms |


## Symmetry labels (see also: [Symmetry elements and symmetry operations]({{< relref "molecular_point_groups.md" >}}))


### &sigma;, &pi;, &delta;

These are classified based on the number of nodal planes passing through the internuclear axis:

-   &sigma;: 0 planes. Examples: 1s-1s, "head-to-head" overlap of p orbitals
-   &pi;: 1 plane. Examples: "shoulder-to-shoulder" overlap of p orbitals
-   &delta;: 2 planes. Examples: "face-to-face" overlap of d orbitals


### g, u

This deals with the symmetry of the molecule about an inversion center.

-   g: inversion through center leads to unchanged orbital (in terms of signs)
-   u: inversion through center leads to sign flip


## The overlap integral

-   The overlap integral is a tool to find the strength of interactions between AOs (and hence the energy shift of the MOs).
-   It is found by multiplying the two AO wavefunctions and taking the integral
-   Larger overlap integral = higher difference between MOs and AOs
