create table variables
(
    id                                                  int unsigned auto_increment                     primary key,
    slug                                                varchar(125)                                    null comment 'The slug is an identifier in human-readable keywords, used as id for the exchange format',
    created_at                                          timestamp   default CURRENT_TIMESTAMP           not null,
    updated_at                                          timestamp   default CURRENT_TIMESTAMP           not null on update CURRENT_TIMESTAMP,
    name_short                                          varchar(20)                                     not null comment 'Variable common abbreviation',
    name_long                                           varchar(200)                                    not null comment 'Variable display name full',
    category_id                                         tinyint unsigned                                not null comment 'Variable category ID',
    unit                                                smallint unsigned                               not null comment 'ID of the default unit for the variable',
    value_type                                          varchar(20)                                     not null comment "Definition of the value type. One of 'bool' | 'int' | 'float' | 'rating_5' | 'rating_10' | 'percentage'",
    default_value                                       double                                          null,
    description                                         text                                            null,
    synonyms                                            varchar(600)                                    null comment 'The primary variable name and any synonyms for it. This field should be used for non-specific variable searches.',
    ranges                                              text                                            null comment 'ranges in serialized JSON format acc. to ranges-protocol',
    references                                          varchar(2083)[]                                 null comment 'URLs the websites related to the definition, source or more information to this entry',
    additional_meta_data                                text                                            null,
    canonical_variable_id                               int unsigned                                    null comment 'If a variable duplicates another but with a different name, set the canonical variable id to match the variable with the more appropriate name.  Then only the canonical variable will be displayed and all data for the duplicate variable will be included when fetching data for the canonical variable. Approved where canonical_id = id',


/* Cross references to reference databases */
    loinc
    rxnorm
    snomed
    meddra
    icd10
    uniprot
    hmdb
    gene_ontology
    aact

/* Biomarkers specific */

/* Interventions specific */
    application_route                                   varchar(20)                                     not null comment 'Definition of the application of the intervention e.g. oral',

/* Outcomes specific */

/* Conditions specific */
    
/* Property Analysis */
    analysis_settings_modified_at                       timestamp                                       null,
    analysis_requested_at                               timestamp                                       null,
    analysis_started_at                                 timestamp                                       null,
    analysis_ended_at                                   timestamp                                       null,   
    average_seconds_between_measurements                int                                             null,
    
    

    cause_only                                          tinyint(1)                                      null comment 'A value of 1 indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user',
    combination_operation                               enum ('SUM', 'MEAN')                            null comment 'How to combine values of this variable (for instance, to see a summary of the values over a month) SUM or MEAN',
    duration_of_action                                  int unsigned                                    null comment 'How long the effect of a measurement in this variable lasts',
    filling_value                                       double      default -1                          null comment 'Value for replacing null measurements',
    kurtosis                                            double                                          null comment 'Kurtosis',
    maximum_allowed_value                               double                                          null comment 'Maximum reasonable value for a single measurement for this variable in the default unit. ',
    mean                                                double                                          null comment 'Mean',
    median                                              double                                          null comment 'Median',
    minimum_allowed_value                               double                                          null comment 'Minimum reasonable value for this variable (uses default unit)',
    number_of_aggregate_correlations_as_cause           int unsigned                                    null comment 'Number of aggregate correlations for which this variable is the cause variable',
    most_common_original_unit_id                        int                                             null comment 'Most common Unit ID',
    most_common_value                                   double                                          null comment 'Most common value',
    number_of_unique_values                             int                                             null comment 'Number of unique values',
    onset_delay                                         int unsigned                                    null comment 'How long it takes for a measurement in this variable to take effect',
    outcome                                             tinyint(1)                                      null comment 'Outcome variables (those with `outcome` == 1) are variables for which a human would generally want to identify the influencing factors.  These include symptoms of illness, physique, mood, cognitive performance, etc.  Generally correlation calculations are only performed on outcome variables.',
    second_most_common_value                            double                                          null,
    skewness                                            double                                          null comment 'Skewness',
    standard_deviation                                  double                                          null comment 'Standard Deviation',
    variance                                            double                                          null comment 'Variance',
    upc_12                                              varchar(255)                                    null,
    upc_14                                              varchar(255)                                    null,
    number_common_tagged_by                             int unsigned                                    null,
    number_of_common_tags                               int unsigned                                    null,
    optimal_value_message                               varchar(500)                                    null,
    best_cause_variable_id                              int unsigned                                    null,
    best_effect_variable_id                             int unsigned                                    null,
    common_maximum_allowed_daily_value                  double                                          null,
    common_minimum_allowed_daily_value                  double                                          null,
    common_minimum_allowed_non_zero_value               double                                          null,
    minimum_allowed_seconds_between_measurements        int                                             null,
    average_seconds_between_measurements                int                                             null,
    median_seconds_between_measurements                 int                                             null,
    sort_order                                          int                                             not null,
    is_goal                                             tinyint(1)                                      null comment 'The effect of a food on the severity of a symptom is useful because you can control the predictor directly. However, the effect of a symptom on the foods you eat is not very useful.  The foods you eat are not generally an objective end in themselves. ',
    controllable                                        tinyint(1)                                      null comment 'You can control the foods you eat directly. However, symptom severity or weather is not directly controllable. ',
    predictor                                           tinyint(1)                                      null comment 'predictor is true if the variable is a factor that could influence an outcome of interest',
)
    comment 'Variable overviews with statistics, analysis settings, and data visualizations and likely outcomes or predictors based on the anonymously aggregated donated data.'
    charset = utf8;
