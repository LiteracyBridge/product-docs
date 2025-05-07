---
title: Introduction - Program Specification
---

# Introduction to Program Specification

A Talking Book program starts with defining a program specification. The program
specification defines the program information, deployment process, content delivery and recipients (beneficiaries) details. This specification is required for every Talking Book program.

The five (5) sections of the specification, which are General, Deployments, Languages, Content and Recipients, are explain next.

## General {#general}

This section outlines the basic information about the program, as explain in the table below.

| Field         |   Type        |   Required    |     Meaning
| ------------- | :-----------: | :-----------: | ------------
| Name          |    Text       |   Yes        | Name of the program. eg. Women's Land Right
| Program ID    |     Text       |   Yes       | Unique code given the program
| Country       |     Text       |   Yes       | Country where the program is being run. eg. Ghana
| Regions       |     Text       |   Yes       | Names of the regions/states in the country where the program is being run. eg. `"Upper West Region", "Northern Region"`.
| Languages     |   List of Text  |   Yes        | List of languages, indicated by code, which the messages are recorded in. Eg. `['en', 'dag', 'fr']` for English, Dagaari and French.
| Deployments Count | Number    | Yes      | Number of deployments in the program. eg. `1`
| Deployments Length | Text     |  No     | Duration of each deployment - `Monthly`, `One Quarter`, `Quarterly`, `Bi Annually` or `Annually`
| Listening Models |    Text    |   No    | How the Talking Book devices will be distributed to and rotated between the recipients - `Group`, `Household`
| Feedback Frequency |  Text     | No     | How often feedback will be collected from the devices and recipients - `Monthly`, `One Quarter`, `Quarterly`, `Bi Annually` or `Annually`
| Sustainable Development Goals | List of Numbers |   No    | Indicated by numbers 1 - 17, the list of [SDG goals](https://sdgs.un.org/goals) the program seeks to solve. eg. `1, 5, 7`
| Direct Beneficiaries Map | [JSON](https://en.wikipedia.org/wiki/JSON#Syntax) | No | Number of males and females who directly benefits from the program.
| Affiliate    | Text   | No   | Name of organisations affiliated to the program.

## Deployments {#deployments}

The delivery of a Talking Book program can be divided into **batches**, also referred to as **Deployments**.

For example, consider a program on Women's Land Right, covering topics such as customary laws, customary laws, international conventions and treaties, marriage and divorce laws and inheritance laws. These topics can be delivered in batches, with each batch covering about 2 topics.

Dividing contents into deployments (batches) ensures that the recipients are not overloaded with information, and also effective monitoring and evaluation.

Listed below are the details of a deployment section.

| Field         |   Type        |   Required    |     Meaning
| ------------- | :-----------: | :-----------: | ------------
| Deployment #  |    Number     |   Yes        | The deployment number. Eg. `1`.
| Start Date    |    Text       |   Yes        | Start date of the deployment. Must be a correct [ISO8601 date](https://en.wikipedia.org/wiki/ISO_8601#General_principles), in the format `YYYY-MM-DD` eg. `2025-01-25`
| End Date      |    Text       |   Yes        | End date of the deployment. Must be a correct [ISO8601 date](https://en.wikipedia.org/wiki/ISO_8601#General_principles), in the format `YYYY-MM-DD` eg. `2025-05-25`
| Deployment Name  |    Text     |   Yes        | Name of the deployment, unique in the program. Usually in the form `{PROGRAM_NAME}-{YEAR}-{DEPLOYMENT_NUMBER}` eg. `DEMO-25-1`

## Languages {#languages}

This section lists the name and code of the languages, which messages are recorded in.

| Field         |   Type        |   Required    |     Meaning
| ------------- | :-----------: | :-----------: | ------------
| Name          |    Text     |   Yes        | Language name. eg. `English`.
| Code          |    Text     |   Yes        | Language code. Refer to the [List of ISO 639 language codes](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes). eg. `en`.

## Contents

The section list the details of the contents of all deployments. The *contents* mainly of consists of messages and playlists.

> [!TIP]
> A **message** is an audio recording that discusses a specific topic. Messages are grouped into one or more **playlists** or subjects.
> The terms **messages** and **contents** are used interchangeably in the [ACM](../acm/introduction.md) and [program specification](../program-spec/introduction.md).


Using Women's Land Right program as example, the playlists (subjects) are customary laws, customary laws, international conventions and treaties, marriage and divorce laws and inheritance laws. 'Customary laws' playlist might have messages on Women's Inheritance Rights, Widows' Rights, and Inheritance Rules.

Explained below are in the fields in the content section.

| Field         |   Type        |   Required    |     Meaning
| ------------- | :-----------: | :-----------: | ------------
|  Deployment # | Number      |   Yes         | The [deployment](#deployments) which the message belows to. eg. `1`
| Playlist Title | Text       | Yes          | Title of the playlist which that message belongs to.
| Message Title  | Text       | Yes         | Title of the message
| Language Code  | List of Text    | Yes | Language which the message is recorded in. The language must be in [Languages](#languages) list. eg. `en, fr, dag`
| Key Points     | Text       | No  | Summary of key points of the message
| Variant   | Text      | No   | Functions as a tag, for grouping messages. Usually used when one wants to upload multiple language contents onto a Talking be device. eg. `T`
| Format   | Text   | No | Format of the message - `Drama`, `Interview`.
| Audience | Text   | No | Target audience of the message.
| SDG Goals | Number | No | Indicated by a number, SDG goals covered by the message. Usually a subset of the SDG Goals list in the [General section](#general). eg. `1`

## Recipients

Recipients or beneficiaries are persons or group of persons who the Talking Book devices will be given it, with contents. After all, the goal of a Talking Book program is to educate people, the recipients.

> [!TIP]
> Recipient can be person, group of people (in the case of household rotation of Talking Book devices) or a place (eg. device can be given to a CHIPS compound, which will be played to patients.)

The details of these recipients, explained below, are in the "Recipients" section of the specification.

| Field         |   Type        |   Required    |     Meaning
| ------------- | :-----------: | :-----------: | ------------
| Country       | Text      |   Yes         | Country of the recipient. Same as specified in the [General section](#general). eg. `Ghana`.
| Language Code  | Text      |   Yes      | Language spoken by the recipient. Must be in the [Languages](#languages) list. This, together with `variant` determines the messages  uploaded onto a Talking Book. eg. `en`.
| Region       | Text      |   Yes         | Region of the recipient. Must be one of the regions listed in the [General section](#general). eg. `Northern Region`.
| District       | Text      |   Yes         | District of the recipient.
| Community      | Text      |   Yes         | Community of the recipient.
| Recipient ID   | Text     |   Yes       | System generated unique ID of the recipient.**Do not edit this value!**
| # TBs      | Number     |   Yes      | Number of Talking Book devices given to the recipient. Minimum of `1`
| Group Name      | Text     |   No         | Name of the group the recipient belows to.
| Variant      | Text     |   No         | Determines the contents the recipient receives. Used for multi language deployments.
| Agent      | Text     |   No         | The staff responsible for handling the recipeint(s)
| Agent Gender      | Text     |   No         | -
| Listening Model      | Text     |   No       | Listening model used by the program - `Households`, `Groups`, `Community Workers`, `Place-based`, `Other`.
| Group Size      | Number     |   No       | Number of people in a group. Default `0`
| # HH      | Number     |   No       | Number of households. Default `0`
| Support Entity   | Text     |   No       | Staff responsible for assisting the recipient.
| Direct Beneficiaries   | Number     |   No       | Number of people who benefits directly from a given device
| Direct Beneficiaries Additional   | [JSON](https://en.wikipedia.org/wiki/JSON#Syntax)      |   No       | Key-value of number of male and female who benefits directly from a given device. eg. `{"male":5,"female":30}`
| Indirect Beneficiaries   | Number     |   No       | Number of people who benefits indirectly from a given device
| Deployments   | List of Numbers     |   No       | List of deployments the recipient should be added. Leave empty for all deployments.
