---
sidebar_position: 3
sidebar_label: Kubernetes for Platform Engineers
title: "Kubernetes for Platform Engineers – CKA & AI Agents"
description: "Kubernetes for Platform Engineers: a 3-day hands-on CKA prep course on networking, RBAC, Helm, kubeadm, observability and operating clusters with AI agents."
---

import CourseSchema from '@site/src/components/CourseSchema';
import CourseFaq from '@site/src/components/CourseFaq';

<CourseSchema
  name="Kubernetes for Platform Engineers"
  hours={24}
  level="Intermediate to advanced"
  teaches={["Kubernetes networking and Network Policies", "RBAC and access control", "Helm", "Cluster bootstrap with kubeadm", "Observability and troubleshooting", "Operating Kubernetes clusters with AI agents", "CKA exam preparation"]}
/>

# Kubernetes for Platform Engineers

## Course Overview

Inspired by Cloud Native Computing Foundation (CNCF) and kubernetes.io, the Kubernetes for Platform Engineers course is designed for developers and system engineers who want to get more advanced experience with Kubernetes. It is focused on Cloud Native principles and microservices architectures. The course runs live, in person or online, in English or Romanian.

Once you master Kubernetes, you can work with other container-orchestration solutions such as Red Hat OpenShift, Amazon EKS, Azure AKS or Google GKE.

The course also shows how to operate Kubernetes together with AI agents such as Claude Code and OpenCode: what an agent can safely do on a cluster, how to give it your runbooks and conventions, and which guardrails keep it under control.

## Certification

Together with [Kubernetes Fundamentals](./kubernetes-fundamentals.md), prepares you for the [Certified Kubernetes Administrator (CKA)](https://www.cncf.io/training/certification/cka/) exam. CKA is required before the CKS exam. See the [certification paths](/certifications).

## What You'll Learn

- Decouple application configuration
- Add state persistence to your application
- Configure cluster authorization and access control
- Autoscale your application based on compute metrics
- Isolate workloads with Network Policies
- Advanced continuous deployment strategies used in Kubernetes
- Bootstrap a Kubernetes cluster
- Use Observability pillars to improve cluster and application reliability
- Troubleshoot a real Kubernetes application in a 2h "Capture the Flag" session
- Operate and troubleshoot clusters with AI agents, safely
- And much more!

## Who Should Attend

Developers, system engineers and architects who want to get more advanced experience with Kubernetes.

## Course Format

- **Duration:** 3 days (24 hours)
- **Format:** Part lecture, part discussion, exercises and heavy hands-on practice.
- **Materials:** Digital course materials and lab guides

## Difficulty

Intermediate to advanced

## Course Prerequisites

To get the most out of this course, you should have:

- Previous experience with Docker
- Basic Linux command line skills
- File editing skills (yaml, json)
- Kubernetes Fundamentals

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

### Day 2

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

### Day 3

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

## Frequently asked questions {#faq}

<CourseFaq
  items={[
    {question: "How long is the course and what is the format?", answer: "3 days (24 hours) of live, instructor-led training: part lecture, part discussion, with exercises and heavy hands-on practice on real Kubernetes clusters."},
    {question: "Is the course in person or online?", answer: "Both. Courses run in person in Bucharest, Romania, or live online for teams across Europe and the US. Online sessions for US teams are scheduled during US working hours."},
    {question: "What language is the course taught in?", answer: "English or Romanian, depending on the group."},
    {question: "Which certification does it prepare for?", answer: "Together with Kubernetes Fundamentals, the Certified Kubernetes Administrator (CKA) exam. CKA is required before the CKS exam."},
    {question: "Does the course cover AI agents?", answer: "Yes. You learn to operate and troubleshoot clusters with AI agents such as Claude Code and OpenCode: what an agent can safely do on a cluster, how to give it your runbooks and conventions, and which guardrails keep it under control."},
    {question: "What do I need to know before the course?", answer: "Previous experience with Docker, basic Linux command line skills, editing YAML and JSON files, and the Kubernetes Fundamentals course or equivalent knowledge."},
    {question: "Do you run private training for teams?", answer: "Yes. Private and corporate training comes with a customized curriculum, on-site or remote delivery and flexible scheduling. Write to contact@qedzone.ro with your team size and preferred dates."},
  ]}
/>

## Next Steps

After completing this course, consider:

- [Kubernetes Security](./kubernetes-security.md), towards CKS
