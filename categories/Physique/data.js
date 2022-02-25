
var model = {
    "amazon_product_category": "",
    "cause_only": false,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:03",
    "duration_of_action": 604800,
    "filling_type": "none",
    "filling_value": -1,
    "font_awesome": "fas fa-weight",
    "id": 2,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/yoga-96.png",
    "ion_icon": "ion-ios-body-outline",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": false,
    "minimum_allowed_seconds_between_measurements": 86400,
    "more_info": "I can give you easy access to your weight and other vitals. You can manually enter weight, but I recommend using a Fitbit or Withings wifi scale for the most detailed data. I can create a beautiful graph of your weight changes, so you can easily keep trac",
    "name": "Physique",
    "name_singular": "",
    "number_of_measurements": 297734,
    "number_of_outcome_case_studies": 6809,
    "number_of_outcome_population_studies": 1097,
    "number_of_predictor_case_studies": 21317,
    "number_of_predictor_population_studies": 8143,
    "number_of_user_variables": 949,
    "number_of_variables": 41,
    "onset_delay": 0,
    "outcome": true,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Physique"
    ],
    "valence": "positive"
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
