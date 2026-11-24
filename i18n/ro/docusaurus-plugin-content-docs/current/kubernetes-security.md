---
sidebar_position: 5
title: Kubernetes Security
description: Kubernetes Security, un curs practic de Kubernetes de 3 zile.
---

# Kubernetes Security

## Prezentarea cursului

Inspirat de Cloud Native Computing Foundation (CNCF) si kubernetes.io, cursul Kubernetes Security este destinat inginerilor care au cunostinte de Kubernetes si vor sa isi aprofundeze expertiza in securizarea clusterelor si a workload-urilor Kubernetes. Cursul pune accent pe principiile de securitate Cloud Native, hardening-ul clusterului, securitatea lantului de aprovizionare (supply chain) si detectarea amenintarilor la runtime. Baza acestui curs este practica, care te ajuta sa iti dezvolti abilitatile necesare pentru a securiza ecosistemul Kubernetes.

Cursul trateaza si agentii AI precum Claude Code si OpenCode ca pe un nou tip de utilizator al clusterului: cum le acorzi privilegii minime, cum auditezi ce fac si cum te aperi de prompt injection si de skill-uri nesigure.

## Certificare

Te pregateste pentru examenul [Certified Kubernetes Security Specialist (CKS)](https://www.cncf.io/training/certification/cks/). Pentru CKS trebuie sa fi promovat examenul CKA. Vezi [traseele de certificare](/certifications).

## Ce vei invata

- Sa configurezi autorizarea si controlul accesului in cluster cu RBAC
- Sa securizezi (hardening) Kubernetes API Server
- Sa auditezi securitatea clusterului cu CIS Benchmarks si kube-bench
- Sa izolezi workload-urile cu Network Policies
- Sa aplici hardening la nivel de kernel cu profiluri AppArmor si Seccomp
- Sa impui Pod Security Standards in toate namespace-urile
- Sa gestionezi Kubernetes Secrets si sa criptezi datele stocate
- Sa scanezi imaginile de containere pentru vulnerabilitati cu Trivy
- Sa investighezi activitatea containerelor la runtime
- Sa configurezi Kubernetes Audit Logging
- Sa impui politici la nivel de cluster cu Admission Controllers si ImagePolicyWebhook
- Sa rezolvi provocari reale de securitate Kubernetes intr-o sesiune "Capture the Flag" de 2 ore
- Sa securizezi agentii AI care acceseaza clustere Kubernetes
- Si multe altele!

## Cui se adreseaza

Inginerilor DevOps, inginerilor de platforma si arhitectilor care lucreaza deja cu Kubernetes si vor sa capete expertiza in securitate.

## Formatul cursului

- **Durata:** 3 zile (24 de ore)
- **Format:** Parte teorie, parte discutii, exercitii si multa practica.
- **Materiale:** Materiale de curs si ghiduri de laborator in format digital

## Dificultate

Avansat

## Cerinte preliminare

Pentru a profita la maximum de acest curs, ar trebui sa ai:

- Experienta practica cu Kubernetes (nivel CKA recomandat)
- Cunostinte de baza de linie de comanda Linux
- Experienta in editarea fisierelor (yaml, json)
- Experienta anterioara cu containere Linux (Docker)

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

#### Role-Based Access Control

- Authorization with RBAC
- Roles and ClusterRoles
- RoleBindings and ClusterRoleBindings
- Default ClusterRoles
- Working with user permissions at the namespace level
- Service Account Security

**Lab:** Create a user with limited access on a Kubernetes namespace

#### Services and Load Balancing

- Multi-Port Services
- Service types
- Cluster internal DNS
- Gateway API
- HTTPRoute
- TLS termination

**Lab:** Exposing your application inside and outside of a Kubernetes cluster

#### Advanced Kubernetes Networking

- Networking implementation on Kubernetes
- Container Network Interface (CNI)
- CNI Plugins
- TCP/IP model overview
- Isolate workloads with Network Policies
- Protecting cloud provider node metadata endpoints

**Lab:** Secure an application using network policies

#### CIS Benchmarks

- CIS Kubernetes Benchmark overview
- Running kube-bench to audit cluster components
- Reviewing security configuration of etcd, kubelet, kube-apiserver
- Remediating common CIS benchmark failures

**Lab:** Run kube-bench and fix failing CIS checks

### Ziua 2

#### Cluster Hardening

- Restricting anonymous and unauthenticated API access
- API Server admission controllers overview
- Restricting kubelet API access
- Introduction to AppArmor profiles
- Applying AppArmor profiles to Kubernetes Pods
- Introduction to Seccomp profiles
- Applying Seccomp profiles to Kubernetes Pods

**Lab:** Restrict a container using AppArmor and Seccomp profiles

#### Pod Security Standards

- Pod Security Admission (PSA) overview
- Privileged, Baseline and Restricted security profiles
- Enforcing, warning and auditing modes
- Security Contexts: runAsNonRoot, readOnlyRootFilesystem, capabilities
- Ensuring container immutability at runtime

**Lab:** Enforce Pod Security Standards on a namespace

#### Kubernetes Configuration

- ConfigMaps
- Secrets
- Secrets vs ConfigMaps
- Encrypting secrets in etcd

**Lab:** Use secrets and ConfigMaps to decouple configuration for an existing application

#### Supply Chain Security

- Dockerfile security best practices (non-root user, fixed image tags)
- Minimizing base image footprint (distroless, multi-stage builds)
- Image vulnerability scanning with Trivy

**Lab:** Scan images for vulnerabilities

#### Runtime Security

- Introduction to runtime investigation
- Capturing container syscall activity
- Analyzing container behavior for incident response
- Introduction to Falco for runtime threat detection

**Lab:** Investigate suspicious container activity and save incident logs

### Ziua 3

#### Observability

- Monitoring Kubernetes components with Prometheus
- Set up Prometheus on Kubernetes
- Monitoring an application deployed on a Kubernetes cluster
- The Four Golden Signals from the Google SRE book
- Audit Logging & Kubernetes Monitoring

**Lab:** Use Prometheus to monitor Kubernetes components and configure audit logging

#### Admission Controllers & Policy Enforcement

- Kubernetes Admission Controllers overview
- ValidatingWebhookConfiguration and MutatingWebhookConfiguration
- Configuring ImagePolicyWebhook admission controller
- Enforcing security policies: required labels, allowed registries, pod security

**Lab:** Configure ImagePolicyWebhook and enforce admission policies

#### Cluster Administration and Multitenancy

- Types of workloads
- Managing compute allocation and quotas
- Defining policies for resource usage and workload isolation

**Lab:** Isolate a namespace on a Kubernetes cluster

#### Interacting with Kubernetes using AI agents

- The agent as a new identity: dedicated ServiceAccount, least-privilege RBAC, short-lived tokens, audit logs of every agent action
- New attack surface: prompt injection from cluster data (logs, annotations, ConfigMaps), untrusted skills and MCP servers as a supply chain risk
- Guardrails: AGENTS.md rules, permission modes and command allowlists in Claude Code and OpenCode, admission policies as the last line of defense
- Agents for security work: triaging kube-bench and Trivy findings, with a human validating every remediation

#### Kubernetes Security CTF

- Introduction to the CTF platform and rules
- Security-focused challenges covering all CKS domains
- Team-based competitive format

**Lab:** Solve real Kubernetes security challenges in a 2h "Capture the Flag" session
