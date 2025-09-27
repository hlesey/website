# Kubernetes Fundamentals

## Course Overview

Inspired by [cncf](https://www.cncf.io/certification/cka/) and [kubernetes.io](https://kubernetes.io/docs/home/), the Kubernetes Fundamentals course is designed for software and system engineers who want to get started with Kubernetes. It is focused on hands-on practice and it will help you to develop basic skills needed to interact with Kubernetes ecosystem.
Once you master Kubernetes, you can manage other container-orchestration solutions such as: RedHat Openshift, Rancher, Amazon EKS, Azure AKS, Google GKE, IBM Cloud Kubernetes Service.

## What You'll Learn

By the end of this course, you will be able to:

- Understand Docker and Kubernetes architecture and core concepts
- Containerize and deploy an application on Kubernetes
- Understand multi-container pod design
- Implement services and load balancing
- Autoscale your application based on compute metrics
- And much more!

## Who Should Attend

- **Developers** looking to containerize and orchestrate applications
- **System Administrators** managing container infrastructure
- **DevOps Engineers** implementing CI/CD with Kubernetes
- **IT Professionals** seeking CKA certification
- **Architects** designing cloud-native solutions

## Course Format

- **Duration:** 2 days (16 hours)
- **Format:** Part lecture, part discussion, exercises and heavy hands-on practice.
- **Materials:** Digital course materials and lab guides

## Difficulty

Beginner to Intermediate

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

- Docker overview
- Docker underlying and security
- Containers vs VMs
- Dev vs Ops - separation of concerns
- Docker components (architecture)

Lab: Setup your Docker host machine

#### Application containerization

- Docker images
- Containers
- Resource quotas
- Container operations
- Docker networking
- Docker volumes

Lab: Configure, build and run applications using Docker

#### Kubernetes architecture

- Kubernetes adoption
- Kubernetes features
- Self-Healing

Lab: Setup your K8s lab cluster

### Day 2

#### Pods

- Pod manifest
- Pods operations (create, list, delete, update, debug)
Pod Lifecycle
- Container probes (self-healing with Readiness and Liveness Probes)
- Resource Management (resource requests vs resource limits)
Lab: Deploy, monitor and configure resource management for Pods

#### Services and Load Balancing

- Multi-Port Services
- Service types
- Cluster internal DNS
- Ingress controllers

Lab: Exposing your application inside and outside of a K8s cluster

#### ReplicaSet and Deployment

- Controller Objects
- Working with ReplicaSet and Deployments
- Taints and Tolerations
- Deployment strategies
- Autoscaling applications deployed on K8s

Lab: Deploy a real application on a K8s cluster

#### Kubernetes Configuration

- ConfigMaps
- Secrets
- Secrets vs ConfigMaps
- Encrypting secrets in etcd

Lab: Use secrets and configmaps to decouple configuration for an existing application deployed on a K8s cluster

## Next Steps

After completing this course, consider:

- [Kubernetes Pro](./kubernetes-pro.md) for advanced topics
- CKA certification exam preparation
- Specialized workshops on specific Kubernetes topics
