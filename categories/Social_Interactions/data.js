
var model = {
    "amazon_product_category": "",
    "cause_only": false,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:05",
    "duration_of_action": 86400,
    "filling_type": "zero",
    "filling_value": 0,
    "font_awesome": "far fa-comment-alt",
    "id": 7,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/collaboration-96.png",
    "ion_icon": "ion-ios-chatboxes-outline",
    "is_goal": "",
    "is_public": 0,
    "manual_tracking": false,
    "minimum_allowed_seconds_between_measurements": 60,
    "more_info": "A social relation or social interaction is any relationship between two or more individuals. ",
    "name": "Social Interactions",
    "name_singular": "",
    "number_of_measurements": 132992,
    "number_of_outcome_case_studies": 3958,
    "number_of_outcome_population_studies": 1269,
    "number_of_predictor_case_studies": 5131,
    "number_of_predictor_population_studies": 2555,
    "number_of_user_variables": 1126,
    "number_of_variables": 78,
    "onset_delay": 0,
    "outcome": true,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Social Interactions",
        "Social Interaction"
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
