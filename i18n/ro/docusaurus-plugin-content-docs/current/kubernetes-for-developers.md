---
sidebar_position: 4
sidebar_label: Kubernetes for Developers
title: "Curs Kubernetes for Developers – CKAD si agenti AI"
description: "Kubernetes for Developers: curs practic de 3 zile pentru pregatirea CKAD, despre aplicatii pe Kubernetes, Helm, observabilitate si lucrul cu agenti AI."
---

import CourseSchema from '@site/src/components/CourseSchema';
import CourseFaq from '@site/src/components/CourseFaq';

<CourseSchema
  name="Kubernetes for Developers"
  hours={24}
  level="Beginner to intermediate"
  teaches={["Livrarea aplicatiilor pe Kubernetes", "Pods cu mai multe containere", "Jobs si CronJobs", "Configurare si persistenta", "Helm", "Strategii de livrare", "Observabilitate si depanare", "Construirea si livrarea aplicatiilor cu agenti AI", "Pregatire pentru examenul CKAD"]}
/>

# Kubernetes for Developers

## Prezentarea cursului

Inspirat de Cloud Native Computing Foundation (CNCF) si kubernetes.io, cursul Kubernetes for Developers este destinat dezvoltatorilor care au cunostinte de baza despre containere si vor sa inceapa cu Kubernetes si sa capete mai multa experienta. Cursul pune accent pe principiile Cloud Native si pe arhitecturile bazate pe microservicii. Baza acestui curs este practica, care te ajuta sa iti dezvolti abilitatile necesare pentru a lucra cu ecosistemul Kubernetes. Cursul se tine live, fizic sau online, in engleza sau romana.

Odata ce stapanesti Kubernetes, poti lucra si cu alte solutii de orchestrare a containerelor, precum Red Hat OpenShift, Amazon EKS, Azure AKS sau Google GKE.

Cursul arata si cum sa construiesti si sa livrezi pe Kubernetes cu agenti AI precum Claude Code si OpenCode: generarea si verificarea manifestelor, transmiterea conventiilor echipei si pastrarea agentului in limite sigure.

## Certificare

Te pregateste pentru examenul [Certified Kubernetes Application Developer (CKAD)](https://www.cncf.io/training/certification/ckad/). Vezi [traseele de certificare](/certifications).

## Ce vei invata

- Sa livrezi o aplicatie pe Kubernetes
- Sa intelegi designul pod-urilor cu mai multe containere
- Sa separi configuratia de aplicatie
- Sa adaugi persistenta starii aplicatiei
- Sa rulezi workload-uri batch cu Jobs si CronJobs
- Sa configurezi autorizarea si controlul accesului in cluster
- Sa scalezi automat aplicatia pe baza metricilor de calcul
- Sa izolezi workload-urile cu Network Policies
- Sa livrezi aplicatia folosind Helm
- Strategii avansate de livrare continua folosite in Kubernetes
- Sa folosesti pilonii observabilitatii pentru a creste fiabilitatea clusterului si a aplicatiilor
- Sa depanezi o aplicatie Kubernetes reala intr-o sesiune "Capture the Flag" de 2 ore
- Sa construiesti, sa livrezi si sa depanezi aplicatii cu agenti AI, in siguranta
- Si multe altele!

## Cui se adreseaza

Dezvoltatorilor si arhitectilor care vor sa inceapa cu Kubernetes si sa isi dezvolte abilitatile.

## Formatul cursului

- **Durata:** 3 zile (24 de ore)
- **Format:** Parte teorie, parte discutii, exercitii si multa practica.
- **Materiale:** Materiale de curs si ghiduri de laborator in format digital

## Dificultate

Incepator spre intermediar

## Cerinte preliminare

Pentru a profita la maximum de acest curs, ar trebui sa ai:

- Experienta anterioara cu containere Linux (Docker)
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

#### Jobs and CronJobs

- Parallel and Non-parallel Jobs
- Job Termination and Cleanup
- Working with CronJobs

**Lab:** Deploy short-lived applications using Jobs and CronJobs on a Kubernetes cluster

### Ziua 2

#### Persistence in Kubernetes

- Types of Volumes
- Persistent Volume
- Persistent Volume Claim

**Lab:** Add persistence to an existing application deployed on a Kubernetes cluster

#### ConfigMaps and Secrets

- ConfigMaps
- Secrets
- Secrets vs ConfigMaps
- Encrypting secrets in etcd

**Lab:** Use secrets and ConfigMaps to decouple configuration for an existing application deployed on a Kubernetes cluster

#### Role-Based Access Control

- Authorization with RBAC
- Roles and ClusterRoles
- RoleBindings and ClusterRoleBindings
- Default ClusterRoles
- Working with user permissions at the namespace level

**Lab:** Create a user with limited access on a Kubernetes namespace

#### Package management with Helm

- Helm Charts
- Working with Chart Repositories
- Helm Releases

**Lab:** Deploy an application on a Kubernetes cluster using Helm

### Ziua 3

#### Observability

- Monitoring Kubernetes components with Prometheus
- Set up Prometheus on Kubernetes
- Monitoring an application deployed on a Kubernetes cluster
- The Four Golden Signals from the Google SRE book

**Lab:** Use Prometheus to monitor Kubernetes components

#### Deployment strategies on Kubernetes

- Recreate strategy
- RollingUpdate strategy
- Blue/Green strategy
- Canary strategy
- A/B testing strategy
- Shadow strategy

**Lab:** Deploy an application on Kubernetes using Blue/Green and Canary strategies

#### Interacting with Kubernetes using AI agents

- AI agents for developers: Claude Code and OpenCode writing manifests and Helm charts
- AGENTS.md and skills in the application repository: namespaces, registries, labels and deployment conventions
- Guardrails: a namespace-scoped ServiceAccount for the agent, development clusters
- Agent-assisted debugging: logs, events and probes, with a human reviewing every change

#### Troubleshooting and CTF

- Logging
- Strategies to debug applications and Kubernetes components
- Troubleshooting an application deployed on a Kubernetes cluster

**Lab:** Solve real Kubernetes application challenges in a 2h "Capture the Flag" session

## Intrebari frecvente {/* #faq */}

<CourseFaq
  items={[
    {question: "Cat dureaza cursul si cum se desfasoara?", answer: "3 zile (24 de ore) de curs live, cu instructor: parte teorie, parte discutii, cu exercitii si multa practica pe clustere Kubernetes reale."},
    {question: "Cursul este fizic sau online?", answer: "Ambele. Cursurile se tin fizic in Bucuresti sau live online, pentru echipe din Europa si SUA. Sesiunile online pentru echipele din SUA sunt programate in orele de lucru din SUA."},
    {question: "In ce limba se preda cursul?", answer: "In romana sau in engleza, in functie de grupa."},
    {question: "Pentru ce certificare te pregateste?", answer: "Pentru examenul Certified Kubernetes Application Developer (CKAD)."},
    {question: "Cursul include si agenti AI?", answer: "Da. Inveti sa construiesti si sa livrezi pe Kubernetes cu agenti AI precum Claude Code si OpenCode: generarea si verificarea manifestelor, transmiterea conventiilor echipei si pastrarea agentului in limite sigure."},
    {question: "Ce trebuie sa stiu inainte de curs?", answer: "Experienta anterioara cu containere Linux (Docker), cunostinte de baza de linie de comanda Linux, editarea fisierelor YAML si JSON si o privire de ansamblu asupra conceptelor Cloud Native."},
    {question: "Organizati cursuri private pentru echipe?", answer: "Da. Cursurile private si pentru companii au curriculum personalizat, se tin la sediul companiei tale sau la distanta si au programare flexibila. Scrie-ne la contact@qedzone.ro cu numarul de participanti si perioada preferata."},
  ]}
/>

## Pasii urmatori

Dupa acest curs, poti continua cu:

- [Kubernetes for Platform Engineers](./kubernetes-for-platform-engineers.md), pentru CKA
