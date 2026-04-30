const NODE_NAME_NODE_SPEC = {
  'id': 'make-uppercase',
  'name': 'Make uppercase',
  'description': 'Transform the input text to uppercase.',
  'category': 'processor',
  'collection': 'Jason Collection',
  'propertySpecs': [
    {
      'name': 'option',
      'type': 'string',
      'editorSpec': {
        'type': 'dropdown',
        'options': [
          {
            'value': 'first-letter',
            'label': 'First letter only'
          },
          {
            'value': 'all-letters',
            'label': 'All letters'
          }
        ]
      }
    }
  ],
  'inputSpecs': [{
    'name': 'text',
    'type': 'string',
    'editorSpec': {
      'type': 'text_input'
    },
  }],
  'outputSpecs': [{
    'name': 'result',
    'type': 'string',
  }]
};

class MakeUppercase extends HTMLElement {
  constructor() {
    super();
  }

  runWithInputs(inputs) {
    let {text, option} = inputs;
    const upperText = option === 'first-letter' ?
        (text.charAt(0).toUpperCase() + text.slice(1)) : text.toUpperCase();

    this.dispatchEvent(new CustomEvent('outputs', {detail: {
        result: upperText}}));
  }
}

visualblocks.registerCustomNode(
  {nodeSpec: NODE_NAME_NODE_SPEC, nodeImpl: MakeUppercase}
);


