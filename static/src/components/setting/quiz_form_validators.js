import VueFormGenerator from 'vue-form-generator';

VueFormGenerator.validators.enabledValidation = function (value, field, model) {
    if ((model.n_gold_unexpired === 0 && model.enabled) || (model.n_gold_unexpired < model.questions && model.enabled)) { return ['With the current settings users won\'t be able to finish the quiz, please add more gold tasks']; }
    return [];
};

VueFormGenerator.validators.maxPassingQuestions = function (value, field, model) {
  if (model.questions < model.passing) { return [`The number should not be larger than questions per quiz! Maximun: ${model.questions}`]; }
  return [];
};

VueFormGenerator.validators.minQuestions = function (value, field, model) {
  if (model.questions < model.passing) { return [`The number should not be smaller than  correct answers per quiz! Minimun: ${model.passing}`]; }
  return [];
};

export default VueFormGenerator;
