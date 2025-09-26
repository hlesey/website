# Kubernetes Pro - 3 Day Advanced Course

## Course Overview

Inspired by [cncf](https://www.cncf.io/certification/cka/) and [kubernetes.io](https://kubernetes.io/docs/home/), the Kubernetes Pro course is designed for developers and system administrators who want to get more advanced experience with Kubernetes. It is focused on Cloud Native principles and microservices architectures.

This course aligns with [Certified Kubernetes Administrator](https://www.cncf.io/certification/expert/cka/) and [Certified Kubernetes Application Developer](https://www.cncf.io/certification/ckad/) exams from the [Cloud Native Computing Foundation](https://www.cncf.io/). 
Once you master Kubernetes, you can manage other container-orchestration solutions such as: RedHat Openshift, Rancher, Amazon EKS, Azure AKS, Google GKE, IBM Cloud Kubernetes Service.

## What You'll Learn

By the end of this course, you will master:

- Decouple application configuration
- Add state persistence to your application
- Configure cluster authorization and access control
- Autoscale your application based on compute metrics
- Isolate workloads with Network Policies
- Advanced continuous deployment strategies used in Kubernetes
- Zero-downtime cluster upgrades
- Multi-tenant cluster design and implementation
- Bootstrap a Kubernetes cluster
- Use Observability pillars to improve cluster and application reliability
- Complex networking troubleshooting
- Troubleshoot a real K8s application in a 2h “Capture the Flag” session
- And much more!

## Who Should Attend

- **Developers** looking to containerize and orchestrate applications
- **DevOps Engineers** managing production Kubernetes
- **Platform Engineers** building Kubernetes platforms
- **Site Reliability Engineers** ensuring service reliability
- **Cloud Architects** designing enterprise solutions
- **Team Leads** responsible for Kubernetes adoption
- **Consultants** implementing Kubernetes for clients

## Course Format

- **Duration:** 3 days (24 hours)
- **Format:** Part lecture, part discussion, exercises and heavy hands-on practice.
- **Materials:** Digital course materials and lab guides

## Certification Preparation

This course covers the foundational concepts needed for:

- **CKA (Certified Kubernetes Administrator)** - Core administration tasks
- **CKAD (Certified Kubernetes Application Developer)** - Application deployment basics

## Difficulty

Intermediate to advanced

## Course Prerequisites

To get the most out of this course, you should have:

- Previous experience with linux containers (Docker)
- Basic Linux command line skills
- File editing skills (yaml, json)
- Kubernetes Fundamentals

## Course Content

### Day 1

- Course introduction
- Course goals
- Recommended lectures 
- Kubernetes certifications
- Your practice environment


#### Persistance in Kubernetes

- Types of Volumes
- Persistent Volume
- Persistent Volume Claim

Lab: Add persistance to an existing application deployed on a K8s cluster


#### Advanced Kubernetes Networking

- Networking implementation on Kubernetes
- Container Network Interface (CNI)
- CNI Plugins
- TCP/IP model overview
- Isolate workloads with Network Policies

Lab: Secure an application using network policies


#### Package management with Helm

- Explain Helm Charts
- Working with Chart Repositories
- Helm Releases

Lab: Deploy an application on a K8s cluster using Helm


#### DaemonSets

- DemonSet overview
- DemonSet vs Deployment
- Manage DaemonSet

Lab:  Working with DaemonSets


#### StatefulSets

- Stateful applications overview
- Stateful vs Stateless applications
- StatefulSets Components

Lab: Deploy a stateful application on a K8s cluster


### Day 2

- Jobs and CronJobs
- Parallel and Non-parallel Jobs
- Job Termination and Cleanup
- Working with CronJobs

Lab: Deploy short-lived applications using Jobs and CronJobs on a K8s cluster


#### Mastering kubectl
- Configuration Best Practices
- Understanding Kubeconfig
- Kubectl cheatsheet
- Kubectl explain

Lab: Boost your kubectl productivity


#### Role-Based Access Control

- Authorization with RBAC
- Roles and ClusteRoles
- RoleBindings and ClusterRoleBindigs
- Default ClusterRoles
- Working with user permissions at the namespace level

Lab: Create a user with limited access on a K8s namespace

#### Cluster Administration and Multitenancy

- Type of workloads
- Managing compute allocation and quotas
- Defining policies for resource usage and workload isolation

Lab: Isolate a namespace on a K8s cluster


#### AI on Kubertnetes: Running ML Model Inference on Kubernetes

- Understanding ML Inference
- Serving Models on Kubernetes
- Packaging & Deploying a Model

Lab: Deploy a Model as a REST API


### Day 3

#### Obervability

- Monitoring Kubernetes components with Prometheus
- Setup prometheus on K8s
- Monitoring an application deployed on K8s cluster
- The Four Golden Signals from Google SRE book

Lab: Use Prometheus to monitor K8s components


#### Deployment strategies on Kubernetes

- Explain Recreate strategy
- Explain RollingUpdate  strategy
Explain Blue/Green strategy
- Explain Canary strategy
- Explain A/B testing strategy
- Explain Shadow strategy

Lab: Deploy an application on K8s using Blue/Green and Canary strategies


#### Troubleshooting and CTF

- Loggging
- Strategies to debug applications and K8s components
- Trooublshooting an application deployed on a K8s cluster

Lab: Solve real K8s application challanges in a 1.5h “Capture the Flag” session


## Next Steps

After completing this course:

- Consider specialized workshops (Security, Networking, Storage)
- Pursue advanced certifications (CKS, cloud-specific)
- Join our advanced practitioners community
- Explore custom enterprise training options

[Contact Us](../contact) | [Prerequisites Course](./kubernetes-fundamentals.md) | [View All Courses](./intro.md)
