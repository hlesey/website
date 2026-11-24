---
sidebar_position: 3
title: Kubernetes for Platform Engineers
description: Kubernetes for Platform Engineers, un curs practic de Kubernetes de 3 zile.
---

# Kubernetes for Platform Engineers

## Prezentarea cursului

Inspirat de Cloud Native Computing Foundation (CNCF) si kubernetes.io, cursul Kubernetes for Platform Engineers este destinat dezvoltatorilor si inginerilor de sisteme care vor sa capete experienta avansata cu Kubernetes. Cursul pune accent pe principiile Cloud Native si pe arhitecturile bazate pe microservicii.

Odata ce stapanesti Kubernetes, poti lucra si cu alte solutii de orchestrare a containerelor, precum Red Hat OpenShift, Amazon EKS, Azure AKS sau Google GKE.

Cursul arata si cum sa operezi Kubernetes impreuna cu agenti AI precum Claude Code si OpenCode: ce poate face un agent in siguranta pe un cluster, cum ii dai runbook-urile si conventiile tale, si ce limite il tin sub control.

## Certificare

Impreuna cu [Kubernetes Fundamentals](./kubernetes-fundamentals.md), te pregateste pentru examenul [Certified Kubernetes Administrator (CKA)](https://www.cncf.io/training/certification/cka/). CKA este necesar inainte de examenul CKS. Vezi [traseele de certificare](/certifications).

## Ce vei invata

- Sa separi configuratia de aplicatie
- Sa adaugi persistenta starii aplicatiei
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

#### Advanced Kubernetes Networking

- Networking implementation on Kubernetes
- Container Network Interface (CNI)
- CNI Plugins
- TCP/IP model overview
- Isolate workloads with Network Policies

**Lab:** Secure an application using network policies

#### Kubernetes Configuration

- ConfigMaps
- Secrets
- Secrets vs ConfigMaps
- Encrypting secrets in etcd

**Lab:** Use secrets and ConfigMaps to decouple configuration for an existing application deployed on a Kubernetes cluster

#### DaemonSets

- DaemonSet overview
- DaemonSet vs Deployment
- Manage DaemonSets

**Lab:** Work with DaemonSets

#### StatefulSets

- Stateful applications overview
- Stateful vs Stateless applications
- StatefulSets components

**Lab:** Deploy a stateful application on a Kubernetes cluster

#### Jobs and CronJobs

- Parallel and Non-parallel Jobs
- Job Termination and Cleanup
- Working with CronJobs

**Lab:** Deploy short-lived applications using Jobs and CronJobs on a Kubernetes cluster

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

#### Package management with Helm

- Helm Charts
- Working with Chart Repositories
- Helm Releases

**Lab:** Deploy an application on a Kubernetes cluster using Helm

#### Cluster Administration and Multitenancy

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

## Pasii urmatori

Dupa acest curs, poti continua cu:

- [Kubernetes Security](./kubernetes-security.md), pentru CKS
