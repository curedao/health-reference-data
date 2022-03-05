The health reference data repository is part of our core module **The Unified Health API (UHA)**, which has the main purpose to provide a single storage and query solution for the analysis of health data.

## Reference Database
To generate a common language for health data we put all health data references into a single table and call them variables. Pretty much anything quantifying a certain state of a human being could be used as health data and its analysis to find new insights.

The variables are:

- Biomarkers
- Outcomes
- Conditions
- Interventions

![Reference database diagram](diagrams/core_module_architecture.png)

## Online Data Browser

To browse the references online go to our [Online Reference Browser](https://search.curedao.org)

## Reference Data Sources

### [1. Nutritional Supplements](reference-databases/supplements/supplements.md)



### [2. Units of Measurement](reference-databases/units/units.md)

[UCUM](https://ucum.org/)

### [3. Medication](reference-databases/medications/medications.md)

[RXNORM](https://www.nlm.nih.gov/research/umls/rxnorm/index.html)

### [4. Symptoms and Diseases](reference-databases/diseases/diseases.md)

[ICD-10](https://www.icd-code.de/)

### [5. Observations, Lab Test Results, and Biomarkers](reference-databases/biomarkers/biomarkers.md)

[LOINC](https://loinc.org/search/)

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

### 8.Proteomics

[UniProt](https://www.uniprot.org/)

### 9.Metabolomics

[HMDB](https://hmdb.ca/)

### 10.Genomics

[GENE ONTOLOGY](http://geneontology.org/)

## Data Schema

Variables table schema


### Git Large File Storage
This repository requires that you install the [Git Large File Storage plugin](https://git-lfs.github.com/) to store large files in Git.
