'use strict';

/**
 * Module dependencies.
 */

const Linter = require('eslint/lib/cli-engine');
const path = require('path');

/**
 * Tests for `eslint-config-seegno`.
 */

describe('eslint-config-seegno', () => {
  const linter = new Linter({ configFile: path.join(__dirname, '..', 'src', 'index.js') });

  it('should not generate any violation for correct code', () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');

    linter.executeOnFiles([source]).errorCount.should.equal(0);
  });

  it('should generate violations for environment-specific rules', () => {
    const source = path.join(__dirname, 'fixtures', 'environment.js');

    Array.from(linter.executeOnFiles([source]).results[0].messages.map(violation => violation.ruleId)).should.eql([
      'linebreak-style',
      'linebreak-style',
      'linebreak-style',
      'linebreak-style',
      'eol-last'
    ]);
  });

  it('should generate violations for incorrect code', () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');

    Array.from(linter.executeOnFiles([source]).results[0].messages.map(violation => violation.ruleId)).should.eql([
      'array-bracket-spacing',
      'arrow-parens',
      'brace-style',
      'capitalized-comments',
      'comma-dangle',
      'comma-spacing',
      'comma-style',
      'consistent-this',
      'curly',
      'dot-notation',
      'generator-star-spacing',
      'generator-star-spacing',
      'generator-star-spacing',
      'generator-star-spacing',
      'generator-star-spacing',
      'id-match',
      'indent',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'jest/no-focused-tests',
      'jest/no-identical-title',
      'key-spacing',
      'keyword-spacing',
      'no-new',
      'new-cap',
      'new-with-error/new-with-error',
      'newline-after-var',
      'newline-before-return',
      'no-class-assign',
      'no-const-assign',
      'no-constant-condition',
      'no-dupe-class-members',
      'no-empty',
      'no-labels',
      'no-labels',
      'no-multi-spaces',
      'no-multi-str',
      'no-multiple-empty-lines',
      'no-spaced-func',
      'no-this-before-super',
      'no-undef',
      'no-underscore-dangle',
      'no-unused-vars',
      'object-curly-spacing',
      'object-curly-spacing',
      'one-var',
      'one-var-declaration-per-line',
      'operator-linebreak',
      'padded-blocks',
      'padded-blocks',
      'padded-blocks',
      'padded-blocks',
      'padded-blocks',
      'padded-blocks',
      'quote-props',
      'quote-props',
      'quote-props',
      'quote-props',
      'quotes',
      'semi',
      'semi-spacing',
      'semi-spacing',
      'sort-imports-es6/sort-imports-es6',
      'sort-keys',
      'space-before-blocks',
      'space-before-function-paren',
      'space-in-parens',
      'space-in-parens',
      'space-infix-ops',
      'space-unary-ops',
      'spaced-comment',
      'sql-template/no-unsafe-query',
      'switch-case/newline-between-switch-case',
      'template-curly-spacing',
      'template-curly-spacing',
      'wrap-iife',
      'yoda'
    ]);
  });
});
