---
sidebar_position: 2
title: Kubernetes Fundamentals
description: Kubernetes Fundamentals, a 2-day hands-on Kubernetes course.
---

# Kubernetes Fundamentals

## Course Overview

Inspired by Cloud Native Computing Foundation (CNCF) and kubernetes.io, the Kubernetes Fundamentals course is designed for developers and system engineers who want to get started with Kubernetes. It is focused on hands-on practice and it will help you develop basic skills needed to interact with the Kubernetes ecosystem.

Once you master Kubernetes, you can work with other container-orchestration solutions such as Red Hat OpenShift, Amazon EKS, Azure AKS or Google GKE.

## Certification

Prepares you for the [Kubernetes and Cloud Native Associate (KCNA)](https://www.cncf.io/training/certification/kcna/) exam and is the foundation for the Platform Engineer and Developer paths. See the [certification paths](/certifications).

## What You'll Learn

- Docker and Kubernetes architecture
- Containerize and deploy an application on Kubernetes
- Understand multi-container pod design
- Implement services and load balancing
- Autoscale your application based on compute metrics
- And much more!

## Who Should Attend

Developers, system engineers and architects who want to get started with Kubernetes and gain more skills.

## Course Format

- **Duration:** 2 days (16 hours)
- **Format:** Part lecture, part discussion, exercises and heavy hands-on practice.
- **Materials:** Digital course materials and lab guides

## Difficulty

Beginner to intermediate

## Course Prerequisites

To get the most out of this course, you should have:

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

### Day 2

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

## Next Steps

After completing this course, consider:

- [Kubernetes for Platform Engineers](./kubernetes-for-platform-engineers.md), towards CKA
- [Kubernetes for Developers](./kubernetes-for-developers.md), towards CKAD
