---
sidebar_position: 5
title: Kubernetes Security
description: Kubernetes Security, a 3-day hands-on Kubernetes course.
---

# Kubernetes Security

## Course Overview

Inspired by Cloud Native Computing Foundation (CNCF) and kubernetes.io, the Kubernetes Security course is designed for engineers who have Kubernetes knowledge and want to deepen their expertise in securing Kubernetes clusters and workloads. It is focused on Cloud Native security principles, cluster hardening, supply chain security and runtime threat detection. The foundation of this course is hands-on practice which helps you develop the necessary skills to secure the Kubernetes ecosystem.

## Certification

Prepares you for the [Certified Kubernetes Security Specialist (CKS)](https://www.cncf.io/training/certification/cks/) exam. CKS requires a passed CKA exam. See the [certification paths](/certifications).

## What You'll Learn

- Configure cluster authorization and access control with RBAC
- Harden Kubernetes API Server
- Audit cluster security with CIS Benchmarks and kube-bench
- Isolate workloads with Network Policies
- Apply kernel hardening with AppArmor and Seccomp profiles
- Enforce Pod Security Standards across namespaces
- Manage Kubernetes Secrets and encrypt data at rest
- Scan container images for vulnerabilities with Trivy
- Investigate runtime container activity
- Configure Kubernetes Audit Logging
- Enforce cluster-wide policies with Admission Controllers and ImagePolicyWebhook
- Solve real Kubernetes security challenges in a 2h "Capture the Flag" session
- And much more!

## Who Should Attend

DevOps engineers, platform engineers and architects who already work with Kubernetes and want to gain security expertise.

## Course Format

- **Duration:** 3 days (24 hours)
- **Format:** Part lecture, part discussion, exercises and heavy hands-on practice.
- **Materials:** Digital course materials and lab guides

## Difficulty

Advanced

## Course Prerequisites

To get the most out of this course, you should have:

- Working experience with Kubernetes (CKA level recommended)
- Basic Linux command line skills
- File editing skills (yaml, json)
- Previous experience with Linux containers (Docker)

## Recommended free courses

- [Introduction to Cloud Infrastructure Technologies (LFS151x)](https://training.linuxfoundation.org/training/introduction-to-cloud-infrastructure-technologies/)
- [Introduction to Kubernetes (LFS158)](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

## Course Content

### Day 1

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

### Day 2

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

### Day 3

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

#### Kubernetes Security CTF

- Introduction to the CTF platform and rules
- Security-focused challenges covering all CKS domains
- Team-based competitive format

**Lab:** Solve real Kubernetes security challenges in a 2h "Capture the Flag" session
