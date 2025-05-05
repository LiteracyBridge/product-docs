---
title: Introduction - Program Specification
---

# Introduction to Program Specification

A Talking Book program starts with defining a program specification. The program
specification defines the program information, deployment process, content delivery and recipients (beneficiaries) details. This specification is required for every Talking Book program.

The five (5) sections of the specification, which are General, Deployments, Languages, Content and Recipients, are explain next.

## General

This section outlines the basic information about the program, as explain in the table below.

| Field         |   Type        |   Required    |     Meaning
| ------------- | :-----------: | :-----------: | ------------
| Name          |    Text       |   True        | Name of the program. eg. Women's Land Right
| Program ID    |     Text       |   True       | Unique code given the program
| Country       |     Text       |   True       | Country where the program is being run. eg. Ghana
| Regions       |     Text       |   True       | Names of the regions/states in the country where the program is being run. eg. Upper West Region, Northern Region.
| Languages     |   List of Text  |   True        | List of languages, indicated by code, which the messages are recorded in. Eg. `['en', 'dag', 'fr']` for English, Dagaari and French.
| Deployments Count | Number    | True      | Number of deployments in the program. eg. `1`
| Deployments Length | Text     |  False     | Duration of each deployment - `Monthly`, `One Quarter`, `Quarterly`, `Bi Annually` or `Annually`
| Listening Models |    Text    |   False    | How the Talking Book devices will be distributed to and rotated between the recipients - `Group`, `Household`
| Feedback Frequency |  Text     | False     | How often feedback will be collected from the devices and recipients - `Monthly`, `One Quarter`, `Quarterly`, `Bi Annually` or `Annually`
| Sustainable Development Goals | List of Numbers |   False    | Indicated by numbers 1 - 17, the list of [SDG goals](https://sdgs.un.org/goals) the program seeks to solve. eg. 1, 5, 7.
| Direct Beneficiaries Map | [JSON](https://en.wikipedia.org/wiki/JSON#Syntax) | False | Number of males and females who directly benefits from the program.
| Affiliate    | Text   | False   | Name of organisations affiliated to the program.

## Deployments

The delivery of a Talking Book program can be divided into **batches**, also referred to as **Deployments**.

For example, consider a program on Women's Land Right, covering topics such as customary laws, customary laws, international conventions and treaties, marriage and divorce laws and inheritance laws. These topics can be delivered in batches, with each batch covering about 2 topics.

Dividing contents into deployments (batches) ensures that the recipients are not overloaded with information, and also effective monitoring and evaluation.

Listed below are the details of a deployment section.

| Field         |   Type        |   Required    |     Meaning
| ------------- | :-----------: | :-----------: | ------------
| Deployment #  |    Number     |   True        | The deployment number. Eg. `1`.
| Start Date    |    Text       |   True        | Start date of the deployment. Must be a correct [ISO8601 date](https://en.wikipedia.org/wiki/ISO_8601#General_principles), in the format `YYYY-MM-DD` eg. `2025-01-25`
| End Date      |    Text       |   True        | End date of the deployment. Must be a correct [ISO8601 date](https://en.wikipedia.org/wiki/ISO_8601#General_principles), in the format `YYYY-MM-DD` eg. `2025-05-25`
| Deployment Name  |    Text     |   True        | Name of the deployment, unique in the program. Usually in the form `{PROGRAM_NAME}-{YEAR}-{DEPLOYMENT_NUMBER}` eg. `DEMO-25-1`

## Languages

This section lists the name and code of the languages, which messages are recorded in.

| Field         |   Type        |   Required    |     Meaning
| ------------- | :-----------: | :-----------: | ------------
| Name          |    Text     |   True        | Language name. eg. `English`.
| Code          |    Text     |   True        | Language code. Refer to the [List of ISO 639 language codes](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes). eg. `en`.

## Content

The langu
of the program. eg. Women's Land Right

  it easi
In a Talking Book program, the content
