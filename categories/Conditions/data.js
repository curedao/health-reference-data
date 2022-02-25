
var model = {
    "amazon_product_category": "",
    "cause_only": false,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:04",
    "duration_of_action": 86400,
    "filling_value": -1,
    "font_awesome": "fas fa-couch",
    "id": 16,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/dizzy_person_2-96.png",
    "ion_icon": "ion-ios-medkit",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": true,
    "more_info": "Disease states or conditions that produce various symptoms. ",
    "name": "Conditions",
    "name_singular": "",
    "number_of_user_variables": 2,
    "number_of_variables": 8,
    "onset_delay": 0,
    "outcome": true,
    "predictor": 0,
    "sort_order": 0,
    "synonyms": [
        "Conditions",
        "Condition"
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
