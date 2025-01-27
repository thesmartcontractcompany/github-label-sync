'use strict';

const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true });

const schema = {
	type: 'object',
	properties: {
		name: { type: 'string', maxLength: 50, },
		color: { type: 'string', pattern: '^[a-fA-F0-9]{6}$' },
		description: { type: 'string', maxLength: 100 },
		aliases: {
			type: 'array',
			items: { type: 'string', maxLength: 50 }
		},
	},
	required: ['name'],
	additionalProperties: false
};

const validate = ajv.compile(schema);

module.exports = validate;
