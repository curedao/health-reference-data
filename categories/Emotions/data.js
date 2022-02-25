
var model = {
    "amazon_product_category": "",
    "boring": 0,
    "cause_only": false,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:03",
    "default_unit_id": 10,
    "duration_of_action": 86400,
    "filling_type": "none",
    "filling_value": -1,
    "font_awesome": "far fa-grin-tongue-wink",
    "id": 1,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/theatre_mask-96.png",
    "ion_icon": "ion-happy-outline",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": true,
    "minimum_allowed_seconds_between_measurements": 60,
    "more_info": "Do you have any emotions that fluctuate regularly?  If so, add them so I can try to determine which factors are influencing them.",
    "name": "Emotions",
    "name_singular": "Emotion",
    "number_of_measurements": 1211325,
    "number_of_outcome_case_studies": 17690,
    "number_of_outcome_population_studies": 5394,
    "number_of_predictor_case_studies": 101580,
    "number_of_predictor_population_studies": 41770,
    "number_of_user_variables": 43085,
    "number_of_variables": 2028,
    "onset_delay": 0,
    "outcome": true,
    "predictor": 0,
    "sort_order": 0,
    "synonyms": [
        "Emotions",
        "Emotion",
        "Mood"
    ],
    "valence": "neutral"
}
var host = window.location.host;
if(host === ""){host = "local.quantimo.do"} // We just opened the file locally
if(host.indexOf('quantimo.do') !== -1 || host.indexOf('crowdsourcingcures.org') !== -1){
    var str = JSON.stringify(model)
        .replaceAll('staging.quantimo.do', host)
        .replaceAll('local.quantimo.do', host)
        .replaceAll('app.quantimo.do', host);
    variableCategory = JSON.parse(str);
}
