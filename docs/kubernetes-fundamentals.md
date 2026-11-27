---
sidebar_position: 2
sidebar_label: Kubernetes Fundamentals
title: "Kubernetes Fundamentals Course – KCNA Preparation"
description: "Kubernetes Fundamentals: a 2-day hands-on course on Docker, Kubernetes architecture, Pods, Services and Deployments that prepares you for the KCNA exam."
---

import CourseSchema from '@site/src/components/CourseSchema';
import CourseFaq from '@site/src/components/CourseFaq';

<CourseSchema
  name="Kubernetes Fundamentals"
  hours={16}
  level="Beginner to intermediate"
  teaches={["Docker and containers", "Kubernetes architecture and API", "Pods, Services and Deployments", "Persistence in Kubernetes", "KCNA exam preparation"]}
/>

# Kubernetes Fundamentals

## Course Overview

Inspired by Cloud Native Computing Foundation (CNCF) and kubernetes.io, the Kubernetes Fundamentals course is designed for developers and system engineers who want to get started with Kubernetes. It is focused on hands-on practice and it will help you develop basic skills needed to interact with the Kubernetes ecosystem. The course runs live, in person or online, in English or Romanian.

Once you master Kubernetes, you can work with other container-orchestration solutions such as Red Hat OpenShift, Amazon EKS, Azure AKS or Google GKE.

## Certification

Prepares you for the [Kubernetes and Cloud Native Associate (KCNA)](https://www.cncf.io/training/certification/kcna/) exam and is the foundation for the Platform Engineer and Developer paths. See the [certification paths](/certifications).

## What You'll Learn

- Docker and Kubernetes architecture
- Containerize and deploy an application on Kubernetes
- Understand multi-container pod design
- Decouple application configuration with ConfigMaps and Secrets
- Add state persistence to your application
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

#### ConfigMaps and Secrets

- ConfigMaps
- Secrets
- Secrets vs ConfigMaps
- Encrypting secrets in etcd

**Lab:** Use secrets and ConfigMaps to decouple configuration for an existing application deployed on a Kubernetes cluster

## Frequently asked questions {#faq}

<CourseFaq
  items={[
    {question: "How long is the course and what is the format?", answer: "2 days (16 hours) of live, instructor-led training: part lecture, part discussion, with exercises and heavy hands-on practice on real Kubernetes clusters."},
    {question: "Is the course in person or online?", answer: "Both. Courses run in person in Bucharest, Romania, or live online for teams across Europe and the US. Online sessions for US teams are scheduled during US working hours."},
    {question: "What language is the course taught in?", answer: "English or Romanian, depending on the group."},
    {question: "Which certification does it prepare for?", answer: "The Kubernetes and Cloud Native Associate (KCNA) exam. It is also the foundation for the Platform Engineer (CKA) and Developer (CKAD) paths."},
    {question: "What do I need to know before the course?", answer: "Basic Linux command line skills, editing YAML and JSON files, and an overview of Cloud Native application concepts."},
    {question: "Do you run private training for teams?", answer: "Yes. Private and corporate training comes with a customized curriculum, on-site or remote delivery and flexible scheduling. Write to contact@qedzone.ro with your team size and preferred dates."},
  ]}
/>

## Next Steps

After completing this course, consider:

- [Kubernetes for Platform Engineers](./kubernetes-for-platform-engineers.md), towards CKA
- [Kubernetes for Developers](./kubernetes-for-developers.md), towards CKAD
