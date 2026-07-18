+++
title = "Operators"
author = ["Easton"]
date = 2026-07-17
tags = ["csr"]
draft = false
pubDate = 2026-07-17
+++

An operator is a mathematical object that acts on a function to create a new function.
Examples: x &times;, d/dx.

In quantum mechanics, we use operators to represent quantities (something which can be measured).
There are two quantities we are interested in: position and energy.
We will show these operators for a particle of mass _m_ in motion along a one-dimensional system.


## Operator for position

This is very simple: the operator is just ̂x = x.


## Operator for energy (hamiltonian)

In classical mechanics, total energy is separated into kinetic energy (T) plus potential energy (V).
Kinetic energy arises from the motion of an object, while potential energy arises from the position of an object.

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

T̂ = -ℏ/2m d^2/dx^2.

</div>

Meanwhile, potential energy is just a function of position:

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

V̂ = V(x).

</div>

Now the hamiltonian, the operator for total energy, is just:

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

Ĥ = T̂ + V̂.

</div>
