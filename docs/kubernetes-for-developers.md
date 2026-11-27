---
sidebar_position: 4
sidebar_label: Kubernetes for Developers
title: "Kubernetes for Developers – CKAD Prep & AI Agents"
description: "Kubernetes for Developers: a 3-day hands-on CKAD prep course on building and deploying apps on Kubernetes, Helm, observability and working with AI agents."
---

import CourseSchema from '@site/src/components/CourseSchema';
import CourseFaq from '@site/src/components/CourseFaq';

<CourseSchema
  name="Kubernetes for Developers"
  hours={24}
  level="Beginner to intermediate"
  teaches={["Deploying applications on Kubernetes", "Multi-container Pod design", "Jobs and CronJobs", "Configuration and persistence", "Helm", "Deployment strategies", "Observability and troubleshooting", "Building and deploying with AI agents", "CKAD exam preparation"]}
/>

# Kubernetes for Developers

## Course Overview

Inspired by Cloud Native Computing Foundation (CNCF) and kubernetes.io, the Kubernetes for Developers course is designed for developers who have basic containers knowledge and want to get started with Kubernetes and gain more expertise. It is focused on Cloud Native principles and microservices architectures. The foundation of this course is hands-on practice which helps you develop the necessary skills to interact with the Kubernetes ecosystem. The course runs live, in person or online, in English or Romanian.

Once you master Kubernetes, you can work with other container-orchestration solutions such as Red Hat OpenShift, Amazon EKS, Azure AKS or Google GKE.

The course also shows how to build and deploy on Kubernetes with AI agents such as Claude Code and OpenCode: generating and reviewing manifests, encoding your team's conventions, and keeping the agent inside safe limits.

## Certification

Prepares you for the [Certified Kubernetes Application Developer (CKAD)](https://www.cncf.io/training/certification/ckad/) exam. See the [certification paths](/certifications).

## What You'll Learn

- Deploy an application on Kubernetes
- Understand multi-container pod design
- Decouple application configuration
- Add state persistence to your application
- Run batch workloads with Jobs and CronJobs
- Configure cluster authorization and access control
- Autoscale your application based on compute metrics
- Isolate workloads with Network Policies
- Deploy your application using Helm
- Advanced continuous deployment strategies used in Kubernetes
- Use Observability pillars to improve cluster and application reliability
- Troubleshoot a real Kubernetes application in a 2h "Capture the Flag" session
- Build, deploy and debug applications with AI agents, safely
- And much more!

## Who Should Attend

Developers and architects who want to get started with Kubernetes and gain more skills.

## Course Format

- **Duration:** 3 days (24 hours)
- **Format:** Part lecture, part discussion, exercises and heavy hands-on practice.
- **Materials:** Digital course materials and lab guides

## Difficulty

Beginner to intermediate

## Course Prerequisites

To get the most out of this course, you should have:

- Previous experience with Linux containers (Docker)
- Basic Linux command line skills
- File editing skills (yaml, json)
- Overview of Cloud Native application concepts and architectures

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

### Day 2

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

- AI agents for developers: Claude Code and OpenCode writing manifests and Helm charts
- AGENTS.md and skills in the application repository: namespaces, registries, labels and deployment conventions
- Guardrails: a namespace-scoped ServiceAccount for the agent, development clusters
- Agent-assisted debugging: logs, events and probes, with a human reviewing every change

#### Troubleshooting and CTF

- Logging
- Strategies to debug applications and Kubernetes components
- Troubleshooting an application deployed on a Kubernetes cluster

**Lab:** Solve real Kubernetes application challenges in a 2h "Capture the Flag" session

## Frequently asked questions {/* #faq */}

<CourseFaq
  items={[
    {question: "How long is the course and what is the format?", answer: "3 days (24 hours) of live, instructor-led training: part lecture, part discussion, with exercises and heavy hands-on practice on real Kubernetes clusters."},
    {question: "Is the course in person or online?", answer: "Both. Courses run in person in Bucharest, Romania, or live online for teams across Europe and the US. Online sessions for US teams are scheduled during US working hours."},
    {question: "What language is the course taught in?", answer: "English or Romanian, depending on the group."},
    {question: "Which certification does it prepare for?", answer: "The Certified Kubernetes Application Developer (CKAD) exam."},
    {question: "Does the course cover AI agents?", answer: "Yes. You learn to build and deploy on Kubernetes with AI agents such as Claude Code and OpenCode: generating and reviewing manifests, encoding your team's conventions, and keeping the agent inside safe limits."},
    {question: "What do I need to know before the course?", answer: "Previous experience with Linux containers (Docker), basic Linux command line skills, editing YAML and JSON files, and an overview of Cloud Native application concepts."},
    {question: "Do you run private training for teams?", answer: "Yes. Private and corporate training comes with a customized curriculum, on-site or remote delivery and flexible scheduling. Write to contact@qedzone.ro with your team size and preferred dates."},
  ]}
/>

## Next Steps

After completing this course, consider:

- [Kubernetes for Platform Engineers](./kubernetes-for-platform-engineers.md), towards CKA
