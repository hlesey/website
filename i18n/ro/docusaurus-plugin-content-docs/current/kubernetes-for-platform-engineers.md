---
sidebar_position: 3
sidebar_label: Kubernetes for Platform Engineers
title: "Kubernetes for Platform Engineers – CKA si agenti AI"
description: "Kubernetes for Platform Engineers: curs practic de 3 zile pentru pregatirea CKA, despre retea, RBAC, multitenancy, kubeadm, observabilitate si agenti AI."
---

import CourseSchema from '@site/src/components/CourseSchema';
import CourseFaq from '@site/src/components/CourseFaq';

<CourseSchema
  name="Kubernetes for Platform Engineers"
  hours={24}
  level="Intermediate to advanced"
  teaches={["Services si Gateway API", "Deployments, DaemonSets si StatefulSets", "Retelistica Kubernetes si Network Policies", "RBAC si controlul accesului", "Multitenancy", "Initializarea clusterului cu kubeadm", "Observabilitate si depanare", "Operarea clusterelor Kubernetes cu agenti AI", "Pregatire pentru examenul CKA"]}
/>

# Kubernetes for Platform Engineers

## Prezentarea cursului

Inspirat de Cloud Native Computing Foundation (CNCF) si kubernetes.io, cursul Kubernetes for Platform Engineers este destinat dezvoltatorilor si inginerilor de sisteme care vor sa capete experienta avansata cu Kubernetes. Cursul pune accent pe principiile Cloud Native si pe arhitecturile bazate pe microservicii. Cursul se tine live, fizic sau online, in engleza sau romana.

Odata ce stapanesti Kubernetes, poti lucra si cu alte solutii de orchestrare a containerelor, precum Red Hat OpenShift, Amazon EKS, Azure AKS sau Google GKE.

Cursul arata si cum sa operezi Kubernetes impreuna cu agenti AI precum Claude Code si OpenCode: ce poate face un agent in siguranta pe un cluster, cum ii dai runbook-urile si conventiile tale, si ce limite il tin sub control.

## Certificare

Impreuna cu [Kubernetes Fundamentals](./kubernetes-fundamentals.md), te pregateste pentru examenul [Certified Kubernetes Administrator (CKA)](https://www.cncf.io/training/certification/cka/). CKA este necesar inainte de examenul CKS. Vezi [traseele de certificare](/certifications).

## Ce vei invata

- Sa expui aplicatii cu Services si Gateway API
- Sa rulezi agenti pe noduri si aplicatii stateful cu DaemonSets si StatefulSets
- Sa izolezi echipele (tenants) cu namespace-uri, cote si politici
- Sa configurezi autorizarea si controlul accesului in cluster
- Sa scalezi automat aplicatia pe baza metricilor de calcul
- Sa izolezi workload-urile cu Network Policies
- Strategii avansate de livrare continua folosite in Kubernetes
- Sa initializezi un cluster Kubernetes
- Sa folosesti pilonii observabilitatii pentru a creste fiabilitatea clusterului si a aplicatiilor
- Sa depanezi o aplicatie Kubernetes reala intr-o sesiune "Capture the Flag" de 2 ore
- Sa operezi si sa depanezi clustere cu agenti AI, in siguranta
- Si multe altele!

## Cui se adreseaza

Dezvoltatorilor, inginerilor de sisteme si arhitectilor care vor sa capete experienta avansata cu Kubernetes.

## Formatul cursului

- **Durata:** 3 zile (24 de ore)
- **Format:** Parte teorie, parte discutii, exercitii si multa practica.
- **Materiale:** Materiale de curs si ghiduri de laborator in format digital

## Dificultate

Intermediar spre avansat

## Cerinte preliminare

Pentru a profita la maximum de acest curs, ar trebui sa ai:

- Experienta anterioara cu Docker
- Cunostinte de baza de linie de comanda Linux
- Experienta in editarea fisierelor (yaml, json)
- Kubernetes Fundamentals

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

#### DaemonSets and StatefulSets

- DaemonSet overview
- DaemonSet vs Deployment
- Manage DaemonSets
- Stateful applications overview
- Stateful vs Stateless applications
- StatefulSets components

**Lab:** Work with DaemonSets and deploy a stateful application on a Kubernetes cluster

#### Advanced Kubernetes Networking

- Networking implementation on Kubernetes
- Container Network Interface (CNI)
- CNI Plugins
- TCP/IP model overview
- Isolate workloads with Network Policies

**Lab:** Secure an application using network policies

### Ziua 2

#### Mastering kubectl

- Configuration Best Practices
- Kubeconfig
- Kubectl Cheat Sheet
- Kubectl explain

**Lab:** Boost your kubectl productivity

#### Role-Based Access Control

- Authorization with RBAC
- Roles and ClusterRoles
- RoleBindings and ClusterRoleBindings
- Default ClusterRoles
- Working with user permissions at the namespace level

**Lab:** Create a user with limited access on a Kubernetes namespace

#### Multi-Tenancy

- Types of workloads
- Managing compute allocation and quotas
- Defining policies for resource usage and workload isolation

**Lab:** Isolate a namespace on a Kubernetes cluster

#### Create a Kubernetes Cluster

- Planning a cluster
- Kubeadm - Key design takeaways
- Bootstrap a Kubernetes cluster using kubeadm

**Lab:** Create and configure a Kubernetes cluster using kubeadm

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

- AI agents for platform work: how Claude Code and OpenCode run kubectl, helm and kubeadm for you
- AGENTS.md and skills: give the agent your cluster runbooks, conventions and upgrade procedures
- Guardrails: a dedicated read-only identity for the agent, human approval for every change, never admin.conf
- Agent-assisted troubleshooting: events, logs and node status, with a human validating the fix

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
    {question: "Pentru ce certificare te pregateste?", answer: "Impreuna cu Kubernetes Fundamentals, pentru examenul Certified Kubernetes Administrator (CKA). CKA este necesar inainte de examenul CKS."},
    {question: "Cursul include si agenti AI?", answer: "Da. Inveti sa operezi si sa depanezi clustere cu agenti AI precum Claude Code si OpenCode: ce poate face un agent in siguranta pe un cluster, cum ii dai runbook-urile si conventiile tale, si ce limite il tin sub control."},
    {question: "Ce trebuie sa stiu inainte de curs?", answer: "Experienta anterioara cu Docker, cunostinte de baza de linie de comanda Linux, editarea fisierelor YAML si JSON, si cursul Kubernetes Fundamentals sau cunostinte echivalente."},
    {question: "Organizati cursuri private pentru echipe?", answer: "Da. Cursurile private si pentru companii au curriculum personalizat, se tin la sediul companiei tale sau la distanta si au programare flexibila. Scrie-ne la contact@qedzone.ro cu numarul de participanti si perioada preferata."},
  ]}
/>

## Pasii urmatori

Dupa acest curs, poti continua cu:

- [Kubernetes Security](./kubernetes-security.md), pentru CKS
