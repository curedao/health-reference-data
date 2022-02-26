# The Unified Health API
The Unified Health API integrates the disparate health data standards in order to accelerate clinical research.

## [Online Data Browser](https://data.crowdsourcingcures.org)
Contact m@thinkbynumbers.org if you desire access.

## Reference Data Sources

### [1. Nutritional Supplements](reference-databases/supplements/supplements.md)

### [2. Units of Measurement](reference-databases/units/units.md)

### [3. Medication](reference-databases/medications/medications.md)

### [4. Symptoms and Diseases](reference-databases/diseases/diseases.md)

### [5. Observations, Lab Test Results, and Biomarkers](reference-databases/biomarkers/biomarkers.md)

### 6. Clinical Trials

[AACT](https://aact.ctti-clinicaltrials.org/) is a publicly available relational database that contains all information (protocol and result data elements) about every study registered in ClinicalTrials.gov.

### 7. Medical Codes, Terms, and Synonyms

[The Systematized Nomenclature of Medicine (SNOMED)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiP-bmSy8f0AhXxJzQIHZw1DyMQFnoECA4QAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSystematized_Nomenclature_of_Medicine&usg=AOvVaw0OEA6yHcGONHJwDX9OrbKc)  is a systematic collection of medical codes, terms, synonyms and definitions which cover 
- anatomy
- diseases
- findings
- procedures
- microorganisms
- substances
- etc.

**SnoMed Databases**
- [SnomedRfsMySql.zip](https://s3.amazonaws.com/static.quantimo.do/unified-health-api/reference-databases/SnomedRfsMySql.zip)
- [snomed-release-service-4.4.0.zip](https://s3.amazonaws.com/static.quantimo.do/unified-health-api/reference-databases/snomed-release-service-4.4.0.zip)

## Data Schema

### Wearables
- [Open mHealth](https://www.openmhealth.org/documentation/#/schema-docs/schema-library) - common schemas define the meaningful distinctions for each clinical measure
- [Apple HealthKit](https://github.com/openmhealth/schemas/tree/develop/schema/granola) - a set of schemas for the Apple HealthKit platform

### EHR
- [FHIR](https://www.hl7.org/fhir/) - a standard for electronic health records
- [openEHR](https://www.openehr.org/) - openEHR is a technology for e-health consisting of open platform specifications, clinical models and software that together define a domain-driven information systems platform for healthcare and medical research.

## Repository Notes

### [1. Democratic Pull Requests](voting.md)

### 2. Git Large File Storage
This repository requires that you install the [Git Large File Storage plugin](https://git-lfs.github.com/) to store large files in Git.
