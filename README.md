# The Unified Health API
The Unified Health API integrates the disparate health data standards in order to accelerate clinical research.

## Reference Data Sources

### Units of Measurement
- [UCUM](https://github.com/crowdsourcing-cures/unified-health-api/blob/main/reference-databases/ucum_units_of_measure.csv) - The Unified Code for Units of Measure (UCUM) is a code system intended to include all units of measures being contemporarily used in international science

### AACT

[AACT](https://aact.ctti-clinicaltrials.org/) is a publicly available relational database that contains all information (protocol and result data elements) about every study registered in ClinicalTrials.gov. 

### Observations, Lab Test Results
- [LOINC](https://loinc.org/downloads/) - Logical Observation Identifiers Names and Codes (LOINC®) is clinical terminology that is important for laboratory test orders and results, and is one of a suite of designated standards for use in U.S. Federal Government systems for the electronic exchange of clinical health information.

### Medication
- [The Systematized Nomenclature of Medicine (SNOMED)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiP-bmSy8f0AhXxJzQIHZw1DyMQFnoECA4QAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSystematized_Nomenclature_of_Medicine&usg=AOvVaw0OEA6yHcGONHJwDX9OrbKc) - The Systematized Nomenclature of Medicine (SNOMED) is a systematic, computer-processable collection of medical terms, in human and veterinary medicine, to provide codes, terms, synonyms and definitions which cover anatomy, diseases, findings, procedures, microorganisms, substances, etc.
- [RXNORM](https://www.nlm.nih.gov/research/umls/rxnorm/docs/rxnormfiles.html) - The RxNorm database is a controlled vocabulary of drugs and their ingredients.
- [Medical Dictionary for Regulatory Activities (MedDRA)](https://www.meddra.org/news-and-events/news/english-meddra-version-240-now-available-download) -  A rich and highly specific standardised medical terminology to facilitate sharing of regulatory information internationally for medical products used by humans.

### Diagnosis / Symptoms
- [International Classification of Diseases, 10th revision (ICD-10)](https://www.cms.gov/Medicare/Coding/ICD10/index.html) - A standard for the coding of diseases and their related conditions.

### Wearables
- [Open mHealth](https://www.openmhealth.org/documentation/#/schema-docs/schema-library) - common schemas define the meaningful distinctions for each clinical measure
  - [Apple HealthKit](https://github.com/openmhealth/schemas/tree/develop/schema/granola) - a set of schemas for the Apple HealthKit platform

### EHR
- [FHIR](https://www.hl7.org/fhir/) - a standard for electronic health records
- [openEHR](https://www.openehr.org/) - openEHR is a technology for e-health consisting of open platform specifications, clinical models and software that together define a domain-driven information systems platform for healthcare and medical research.

## [Online Data Browser](https://data.crowdsourcingcures.org)
Contact m@thinkbynumbers.org if you desire access.

## Democratic Pull Requests
When a Pull Request is made to the main branch, a new comment is posted on the PR where you can click :thumbsup: or :thumbsdown:. When a Pull Request is updated, it will clear the voting and restart the vote.

### Rules of Voting
[.voting.yml](.voting.yml) contains the rules of voting:
- `percentageToApprove` is the percentage of up-votes needed to approve a merge.
- `minVotersRequired` is the minimum number of unique voters needed to merge.
- `minVotingWindowMinutes` is the minimum amount of time that must pass after the voting comment is created before any vote can pass.

### Voters
[.voters.yml](.voting.yml) defines the allowed voters and their vote weights. Each entry has the format of `<github-user>:<voting-weight>`.

Contact m@thinkbynumbers.org to add your name to the voter list.
