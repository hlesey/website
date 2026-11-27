---
sidebar_position: 2
sidebar_label: Kubernetes Fundamentals
title: "Curs Kubernetes Fundamentals – pregatire KCNA"
description: "Kubernetes Fundamentals: curs practic de 2 zile despre Docker, arhitectura Kubernetes, Pods, Deployments, persistenta si configurare, care te pregateste pentru examenul KCNA."
---

import CourseSchema from '@site/src/components/CourseSchema';
import CourseFaq from '@site/src/components/CourseFaq';

<CourseSchema
  name="Kubernetes Fundamentals"
  hours={16}
  level="Beginner to intermediate"
  teaches={["Docker si containere", "Arhitectura si API-ul Kubernetes", "Pods, Services si Deployments", "Persistenta in Kubernetes", "Pregatire pentru examenul KCNA"]}
/>

# Kubernetes Fundamentals

## Prezentarea cursului

Inspirat de Cloud Native Computing Foundation (CNCF) si kubernetes.io, cursul Kubernetes Fundamentals este destinat dezvoltatorilor si inginerilor de sisteme care vor sa inceapa cu Kubernetes. Cursul pune accent pe practica si te ajuta sa iti dezvolti abilitatile de baza necesare pentru a lucra cu ecosistemul Kubernetes. Cursul se tine live, fizic sau online, in engleza sau romana.

Odata ce stapanesti Kubernetes, poti lucra si cu alte solutii de orchestrare a containerelor, precum Red Hat OpenShift, Amazon EKS, Azure AKS sau Google GKE.

## Certificare

Te pregateste pentru examenul [Kubernetes and Cloud Native Associate (KCNA)](https://www.cncf.io/training/certification/kcna/) si este baza pentru traseele Platform Engineer si Developer. Vezi [traseele de certificare](/certifications).

## Ce vei invata

- Arhitectura Docker si Kubernetes
- Sa containerizezi si sa livrezi o aplicatie pe Kubernetes
- Sa intelegi designul pod-urilor cu mai multe containere
- Sa separi configuratia de aplicatie cu ConfigMaps si Secrets
- Sa adaugi persistenta starii aplicatiei
- Sa scalezi automat aplicatia pe baza metricilor de calcul
- Si multe altele!

## Cui se adreseaza

Dezvoltatorilor, inginerilor de sisteme si arhitectilor care vor sa inceapa cu Kubernetes si sa isi dezvolte abilitatile.

## Formatul cursului

- **Durata:** 2 zile (16 ore)
- **Format:** Parte teorie, parte discutii, exercitii si multa practica.
- **Materiale:** Materiale de curs si ghiduri de laborator in format digital

## Dificultate

Incepator spre intermediar

## Cerinte preliminare

Pentru a profita la maximum de acest curs, ar trebui sa ai:

- Cunostinte de baza de linie de comanda Linux
- Experienta in editarea fisierelor (yaml, json)
- O privire de ansamblu asupra conceptelor si arhitecturilor aplicatiilor Cloud Native

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

### Ziua 2

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

## Intrebari frecvente {#faq}

<CourseFaq
  items={[
    {question: "Cat dureaza cursul si cum se desfasoara?", answer: "2 zile (16 ore) de curs live, cu instructor: parte teorie, parte discutii, cu exercitii si multa practica pe clustere Kubernetes reale."},
    {question: "Cursul este fizic sau online?", answer: "Ambele. Cursurile se tin fizic in Bucuresti sau live online, pentru echipe din Europa si SUA. Sesiunile online pentru echipele din SUA sunt programate in orele de lucru din SUA."},
    {question: "In ce limba se preda cursul?", answer: "In romana sau in engleza, in functie de grupa."},
    {question: "Pentru ce certificare te pregateste?", answer: "Pentru examenul Kubernetes and Cloud Native Associate (KCNA). Este si baza pentru traseele Platform Engineer (CKA) si Developer (CKAD)."},
    {question: "Ce trebuie sa stiu inainte de curs?", answer: "Cunostinte de baza de linie de comanda Linux, editarea fisierelor YAML si JSON si o privire de ansamblu asupra conceptelor Cloud Native."},
    {question: "Organizati cursuri private pentru echipe?", answer: "Da. Cursurile private si pentru companii au curriculum personalizat, se tin la sediul companiei tale sau la distanta si au programare flexibila. Scrie-ne la contact@qedzone.ro cu numarul de participanti si perioada preferata."},
  ]}
/>

## Pasii urmatori

Dupa acest curs, poti continua cu:

- [Kubernetes for Platform Engineers](./kubernetes-for-platform-engineers.md), pentru CKA
- [Kubernetes for Developers](./kubernetes-for-developers.md), pentru CKAD
