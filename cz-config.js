'use strict';

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'type',
    choices: [
      'feat     (new feature)',
      'fix      (bug fix)',
      'refactor (refactoring production code)',
      'style    (formatting, missing semi colons, etc; no code change)',
      'bump     (update version of repo or package)',
      'docs     (changes to documentation)',
      'test     (adding or refactoring tests; no production code change)',
      'chore    (updating grunt tasks etc; no production code change)'
    ],
    filter: function (val) {
      return val.split(' ')[0];
    }
  },
  {
    type: 'input',
    name: 'scope',
    message: 'scope (optional)'
  },
  {
    type: 'input',
    name: 'subject',
    message: 'commit message (72 chars max.)',
    validate: function (subject, answers) {
      if (!subject || subject === '') {
        return 'Must specify subject';
      }

      const typeSize = answers.type.length;
      const scopeSize = answers.scope.length;
      const subjectSize = subject.length;
      const totalSize = typeSize + scopeSize + subjectSize;

      if (totalSize <= 72) {
        return true;
      }

      const over = totalSize - 72;
      return `Over by ${over} characters. :(`;
    }
  },
  {
    type: 'input',
    name: 'issue',
    message: 'Issue number (ex, #1234)'
  },
  {
    type: 'confirm',
    name: 'addSummary',
    message: 'Would you like to add a summary?'
  },
  {
    type: 'editor',
    name: 'summary',
    message: 'Summary',
    when: function (answers) {
      return answers.addSummary;
    }
  },
  {
    type: 'confirm',
    name: 'addtestplan',
    message: 'Would you like to add a test plan?'
  },
  {
    type: 'editor',
    name: 'testplan',
    message: 'Test Plan',
    when: function (answers) {
      return answers.addTestplan;
    }
  }
];

module.exports = {
  prompter: (cz, commit) => {
    cz.prompt(questions).then((answers) => {
      const output = [];
      output.push(
        `${answers.type}${answers.scope ? `(${answers.scope})` : ''}: ${
          answers.subject
        }`
      );
      if (answers.summary) {
        output.push(`Summary: ${answers.summary}`);
      }
      if (answers.testplan) {
        output.push(`Test Plan: \n ${answers.testplan}`);
      }
      if (answers.issue) {
        output.push(`Issue: ${answers.issue}`);
      }

      commit(output.join('\n\n'));
    });
  }
};
