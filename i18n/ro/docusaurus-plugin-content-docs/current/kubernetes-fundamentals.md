---
sidebar_position: 2
title: Kubernetes Fundamentals
description: Kubernetes Fundamentals, un curs practic de Kubernetes de 2 zile.
---

# Kubernetes Fundamentals

## Prezentarea cursului

Inspirat de Cloud Native Computing Foundation (CNCF) si kubernetes.io, cursul Kubernetes Fundamentals este destinat dezvoltatorilor si inginerilor de sisteme care vor sa inceapa cu Kubernetes. Cursul pune accent pe practica si te ajuta sa iti dezvolti abilitatile de baza necesare pentru a lucra cu ecosistemul Kubernetes.

Odata ce stapanesti Kubernetes, poti lucra si cu alte solutii de orchestrare a containerelor, precum Red Hat OpenShift, Amazon EKS, Azure AKS sau Google GKE.

## Certificare

Te pregateste pentru examenul [Kubernetes and Cloud Native Associate (KCNA)](https://www.cncf.io/training/certification/kcna/) si este baza pentru traseele Platform Engineer si Developer. Vezi [traseele de certificare](/certifications).

## Ce vei invata

- Arhitectura Docker si Kubernetes
- Sa containerizezi si sa livrezi o aplicatie pe Kubernetes
- Sa intelegi designul pod-urilor cu mai multe containere
- Sa implementezi servicii si load balancing
- Sa scalezi automat aplicatia pe baza metricilor de calcul
- Si multe altele!

## Cui se adreseaza

Dezvoltatorilor, inginerilor de sisteme si arhitectilor care vor sa inceapa cu Kubernetes si sa isi dezvolte abilitatile.

## Formatul cursului

- **Durata:** 2 zile (16 ore)
- **Format:** Parte teorie, parte discutii, exercitii si multa practica.
- **Materiale:** Materiale de curs si ghiduri de laborator in format digital

## Dificultate

Incepator spre intermediar

## Cerinte preliminare

Pentru a profita la maximum de acest curs, ar trebui sa ai:

- Cunostinte de baza de linie de comanda Linux
- Experienta in editarea fisierelor (yaml, json)
- O privire de ansamblu asupra conceptelor si arhitecturilor aplicatiilor Cloud Native

## Cursuri gratuite recomandate

- [Introduction to Cloud Infrastructure Technologies (LFS151x)](https://training.linuxfoundation.org/training/introduction-to-cloud-infrastructure-technologies/)
- [Introduction to Kubernetes (LFS158)](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

## Continutul cursului

### Ziua 1

#### Course introduction

- Course goals
- Recommended lectures
- Kubernetes certifications
- Your practice environment

#### Docker Overview

- Docker internals and security
- Containers vs VMs
- Dev vs Ops - separation of concerns
- Docker components (architecture)

**Lab:** Set up your Docker host machine

#### Application containerization

- Docker images
- Containers
- Resource quotas
- Container operations
- Docker networking
- Docker volumes

**Lab:** Configure, build and run applications using Docker

#### Kubernetes architecture

- Kubernetes adoption
- Kubernetes features
- Self-Healing

**Lab:** Set up your Kubernetes lab cluster

#### Understanding the Kubernetes API

- API Terminology
- Interact with Kubernetes API
- Namespaces
- Labels, annotations and selectors

**Lab:** Interacting with Kubernetes API using kubectl and the Kubernetes dashboard

### Ziua 2

#### Pods

- Pod manifest
- Pod operations (create, list, delete, update, debug)
- Pod Lifecycle
- Container probes (self-healing with Readiness and Liveness probes)
- Resource Management (resource requests vs resource limits)

**Lab:** Deploy, monitor and configure resource management for Pods

#### Services and Load Balancing

- Multi-Port Services
- Service types
- Cluster internal DNS
- Gateway API
- HTTPRoute

**Lab:** Exposing your application inside and outside of a Kubernetes cluster

#### ReplicaSets and Deployments

- Controller Objects
- ReplicaSets and Deployments
- Taints and Tolerations
- Deployment strategies
- Autoscaling applications deployed on Kubernetes

**Lab:** Deploy a real application on a Kubernetes cluster

#### Persistence in Kubernetes

- Types of Volumes
- Persistent Volume
- Persistent Volume Claim

**Lab:** Add persistence to an existing application deployed on a Kubernetes cluster

## Pasii urmatori

Dupa acest curs, poti continua cu:

- [Kubernetes for Platform Engineers](./kubernetes-for-platform-engineers.md), pentru CKA
- [Kubernetes for Developers](./kubernetes-for-developers.md), pentru CKAD
